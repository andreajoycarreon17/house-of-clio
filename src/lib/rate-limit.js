/**
 * THE HOUSE OF CLIO — In-memory token-bucket rate limiter
 *
 * Designed for Next.js API route handlers (Edge or Node runtime).
 * State is per-process — resets on cold start / redeploy, which is
 * acceptable for abuse prevention on low-traffic routes.
 *
 * Usage:
 *   import { rateLimit } from "@/lib/rate-limit";
 *
 *   const limiter = rateLimit({ interval: 60_000, uniqueTokenPerInterval: 500 });
 *
 *   // Inside a route handler:
 *   try {
 *     await limiter.check(10, req.headers.get("x-forwarded-for") ?? "anonymous");
 *   } catch {
 *     return NextResponse.json({ error: "Too many requests" }, { status: 429 });
 *   }
 *
 * @param {object} options
 * @param {number} options.interval            - Window length in ms (default 60 000)
 * @param {number} options.uniqueTokenPerInterval - Max distinct tokens tracked before
 *                                               the oldest is evicted (default 500)
 */

/** @type {Map<string, { count: number, lastReset: number }>} */
const tokenBuckets = new Map();

export function rateLimit({ interval = 60_000, uniqueTokenPerInterval = 500 } = {}) {
  return {
    /**
     * Check whether `token` has exceeded `limit` requests within the window.
     *
     * Resolves if the request is allowed.
     * Rejects with an Error("Rate limited") if the limit is exceeded.
     *
     * @param {number} limit  - Max requests allowed per interval for this token
     * @param {string} token  - Unique identifier (IP address, user ID, etc.)
     * @returns {Promise<void>}
     */
    check(limit, token) {
      return new Promise((resolve, reject) => {
        const now = Date.now();
        const bucket = tokenBuckets.get(token) ?? { count: 0, lastReset: now };

        // Reset counter if the window has elapsed
        if (now - bucket.lastReset > interval) {
          bucket.count = 0;
          bucket.lastReset = now;
        }

        bucket.count += 1;
        tokenBuckets.set(token, bucket);

        // Evict the oldest entry when the map exceeds the token cap
        if (tokenBuckets.size > uniqueTokenPerInterval) {
          let oldestKey = null;
          let oldestTime = Infinity;

          for (const [key, val] of tokenBuckets) {
            if (val.lastReset < oldestTime) {
              oldestTime = val.lastReset;
              oldestKey = key;
            }
          }

          if (oldestKey !== null) tokenBuckets.delete(oldestKey);
        }

        if (bucket.count > limit) {
          reject(new Error("Rate limited"));
        } else {
          resolve();
        }
      });
    },
  };
}
