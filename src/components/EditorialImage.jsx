"use client";

/**
 * THE HOUSE OF CLIO - EditorialImage
 *
 * Single component for every editorial image on the site.
 * Renders rose-gold placeholder if file is missing.
 */

import Image from "next/image";
import { useEffect, useState } from "react";

const AKAN_O = String.fromCharCode(0x0186);

// Registry of local image paths that are known to exist.
// Add a path here once the file is placed in /public.
// While absent, the component renders the placeholder without
// attempting a network request (avoids SSR 404 noise in the terminal).
const KNOWN_IMAGES = new Set([
  // "/images/home/hero-room.jpg",
  // "/images/home/empty-room.jpg",
  // "/images/home/guests-evening.jpg",
  // "/images/home/door-evening.jpg",
  "/images/home/hoc_public_images_table.png",
  "/images/home/hoc_invitation-dining-table.png",
  "/images/home/hoc-home-email-capture-accent-handwrittennote-01-var-a.jpg",
  "/images/house/Option-2_hoc_Full-dinner-table_2.jpg",
  "/images/house/hoc_The-Hand-at-Work_Photo-1.png",
  "/images/house/hoc_scale-through-people.png",
  "/images/journal/hoc_Open-notebook-overhead_2.jpg"
]);

function isAvailable(src) {
  if (typeof src !== "string" || src.length === 0) return false;
  // External URLs (http/https) are always attempted.
  if (src.startsWith("http://") || src.startsWith("https://")) return true;
  // Local paths: only attempt if registered above.
  return KNOWN_IMAGES.has(src);
}

export default function EditorialImage({
  src,
  alt,
  ratio = "16/10",
  priority = false,
  caption,
  variant = "full",
  objectPosition = "center",
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const wrapperClass = "clio-editorial clio-editorial--" + variant;
  const showImage = isAvailable(src) && !failed;

  return (
    <figure className={wrapperClass} style={{ aspectRatio: ratio }}>
      {showImage ? (
        <Image
          src={src}
          alt={alt || ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          quality={88}
          priority={priority}
          onError={() => setFailed(true)}
          className="clio-editorial__img"
          style={{ objectPosition }}
        />
      ) : (
        <div className="clio-editorial__placeholder" aria-hidden="true">
          <span className="clio-editorial__placeholder-glyph">{AKAN_O}</span>
        </div>
      )}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
