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

export default function EditorialImage({
  src,
  alt,
  ratio = "16/10",
  priority = false,
  caption,
  variant = "full",
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const wrapperClass = "clio-editorial clio-editorial--" + variant;
  const hasValidSrc = typeof src === "string" && src.length > 0;
  const showImage = hasValidSrc && !failed;

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
