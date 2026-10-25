"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectMotion = () => {
      if (reduced.matches) video.pause();
      else video.play().catch(() => {});
    };

    respectMotion();
    reduced.addEventListener("change", respectMotion);
    return () => reduced.removeEventListener("change", respectMotion);
  }, []);

  return (
    <video
      ref={videoRef}
      className="aspect-video w-full rounded-xl bg-white object-contain"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/video/saifullah-connects-poster.jpg"
      aria-label="A brand connects through Saifullah Connects with a relevant creator and an approved campaign."
    >
      <source src="/video/saifullah-connects-partnerships-720p.webm" type="video/webm" />
      <source src="/video/saifullah-connects-partnerships-1080p.mp4" type="video/mp4" />
      {/* eslint-disable-next-line @next/next/no-img-element -- native <video> fallback, not a regular image */}
      <img
        src="/video/saifullah-connects-poster.jpg"
        alt="Brand, Saifullah Connects, relevant creator and approved campaign"
      />
    </video>
  );
}
