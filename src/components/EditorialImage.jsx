"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * EditorialImage
 * Structured image slot with aspect-ratio container.
 * Renders a branded placeholder if the image is missing or fails to load.
 *
 * Props:
 *   src      — image path, e.g. "/images/home/hero.jpg"
 *   alt      — descriptive alt text (required)
 *   ratio    — CSS aspect-ratio string, e.g. "16/9", "3/2", "4/3", "1/1"
 *   priority — boolean, set true for above-the-fold images
 *   caption  — optional caption text shown below
 */
export default function EditorialImage({
    src,
    alt = "",
    ratio = "16/9",
    priority = true,
    caption,
}) {
    const [failed, setFailed] = useState(false);

    return (
        <figure style={{ margin: 0, width: "100%" }}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: ratio,
                    overflow: "hidden",
                    background: "linear-gradient(155deg,#120618,#2D0B38,#0C0310)",
                }}
            >
                {/* Placeholder — always visible until image loads */}
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: failed || !src ? 1 : 0,
                        transition: "opacity 0.4s ease",
                        pointerEvents: "none",
                    }}
                >
                    {/* Subtle Muse Mark watermark */}
                    <svg width="80" height="80" viewBox="0 0 320 320" fill="none" opacity=".12">
                        <circle cx="160" cy="160" r="108" stroke="#C9956C" strokeWidth="1.8" fill="none" />
                        <path d="M160,58 L220,214 L100,214 Z" stroke="#C9956C" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                        <path d="M160,250 L68,130 L252,130 Z" stroke="#C9956C" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                        <circle cx="160" cy="160" r="4.5" fill="#C9956C" opacity=".9" />
                    </svg>
                    {/* Slot label for dev reference */}
                    {alt && (
                        <span
                            style={{
                                position: "absolute",
                                bottom: 12,
                                left: 16,
                                right: 16,
                                fontFamily: "'Jost', sans-serif",
                                fontSize: 10,
                                fontWeight: 500,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(201,149,108,0.5)",
                                textAlign: "center",
                            }}
                        >
                            {alt}
                        </span>
                    )}
                </div>

                {/* Actual image */}
                {src && !failed && (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        priority={priority}
                        sizes="(max-width: 768px) 100vw, 900px"
                        onError={() => setFailed(true)}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                )}

                {/* Subtle overlay for contrast */}
                {src && !failed && (
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg,rgba(26,8,32,0.1),rgba(26,8,32,0.2))",
                            pointerEvents: "none",
                        }}
                    />
                )}
            </div>

            {caption && (
                <figcaption
                    style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: 11,
                        fontWeight: 300,
                        letterSpacing: "0.06em",
                        color: "rgba(250,244,238,0.4)",
                        marginTop: 8,
                        textAlign: "center",
                        fontStyle: "italic",
                    }}
                >
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
