"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection({ price = "97" }: { price?: string }) {
  const [showOr, setShowOr] = useState(false);
  const [showCeramic, setShowCeramic] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [contentBlur, setContentBlur] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Show content after 2.5s
  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setShowContent(true);
      setContentBlur(true);
    }, 2500);
    const blurTimer = setTimeout(() => setContentBlur(false), 2850);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(blurTimer);
    };
  }, []);

  // Animation loop: or appears → ceramic appears → both fade out → repeat
  useEffect(() => {
    if (!showContent) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
      // Step 1: show "or"
      setShowOr(true);
      setShowCeramic(false);

      // Step 2: show "Ceramic" after 600ms
      timeouts.push(setTimeout(() => setShowCeramic(true), 600));

      // Step 3: Ceramic exits first
      timeouts.push(setTimeout(() => {
        setShowCeramic(false);
      }, 3500));

      // Step 4: then "or" exits
      timeouts.push(setTimeout(() => {
        setShowOr(false);
      }, 3925));

      // Step 5: restart cycle after pause
      timeouts.push(setTimeout(runCycle, 5000));
    };

    const initial = setTimeout(runCycle, 1200);
    timeouts.push(initial);

    return () => timeouts.forEach(clearTimeout);
  }, [showContent]);

  return (
    <section className="relative w-full h-screen max-h-[760px] overflow-hidden rounded-b-[38px]">
      <div className="absolute inset-0 md:left-5 md:right-5">
        {/* Video Background — Desktop */}
        <video
          ref={desktopVideoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 hidden h-full w-full object-cover md:block md:rounded-b-[38px]"
        >
          <source
            src="https://ourahealth.imgix.net/gen4-hero-desktop-tony-2.mp4?ixlib=js-3.8.0&fm=mp4&res=high&s=7762a09fef2a69cbda901ff9134ea15b"
            type="video/mp4"
          />
        </video>

        {/* Video Background — Mobile */}
        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        >
          <source
            src="https://ourahealth.imgix.net/gen4-hero-mobile-final.mp4?ixlib=js-3.8.0&fm=mp4&res=high&s=9aab9f98a8fa261ef3d201ec131b011d"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div
        className={`
          relative z-10 flex h-full flex-col
          px-5 md:mx-auto md:w-full md:max-w-[1280px] md:px-8
          transition-all duration-1000 ease-out
          ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          ${contentBlur ? "blur-[5px]" : "blur-0"}

          /* Mobile: text top center */
          items-center text-center pt-10 pb-8

          /* Desktop: left-aligned, vertically centered */
          md:justify-center md:items-start md:text-left md:pt-0 md:pb-0
        `}
      >
        {/* Text block */}
        <div className="max-w-xl">
          {/* Label */}
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--oura-mute)] mb-3">
            Oura Ring
          </p>

          {/* Main Heading */}
          <h1
            className="text-[var(--oura-ink)] font-normal leading-[0.96] tracking-[-0.06em]"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            Oura Ring 4
            <br />
            <span
              className={`
                italic
                transition-all duration-500 ease-out inline-block
                ${showOr
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-2 blur-[3px]"
                }
              `}
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 800,
                fontSize: "1.18em",
                background: "linear-gradient(135deg, var(--oura-ink) 0%, var(--oura-ink) 60%, #907558 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              or
            </span>
            <span
              className={`
                italic ml-3
                transition-all duration-500 ease-out inline-block
                ${showCeramic
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-2 blur-[3px]"
                }
              `}
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 800,
                fontSize: "1.18em",
                background: "linear-gradient(135deg, var(--oura-ink) 0%, var(--oura-ink) 60%, #907558 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingRight: "0.06em",
              }}
            >
              Ceramic
            </span>
          </h1>

          {/* Subtitle — moves down when Ceramic appears */}
          <div
            className={`
              transition-all duration-700 ease-out
              ${showOr ? "mt-3 md:mt-6" : "mt-1 md:mt-2"}
            `}
          >
            <p className="text-sm md:text-lg text-[var(--oura-ink)] leading-relaxed tracking-[-0.01em]">
              Sleeker. Smarter.{" "}
              <em
                className="not-italic"
                style={{ fontFamily: "var(--font-editorial)", fontStyle: "italic", fontWeight: 800, fontSize: "1.18em" }}
              >
                Made for you.
              </em>
            </p>
          </div>

          <div className="mt-2 md:mt-5 flex items-center gap-4 justify-center md:justify-start">
            <span className="strike-through text-[var(--oura-ink)] text-base leading-none md:text-lg">
              $499
            </span>
            <span className="text-[var(--oura-ink)] text-2xl leading-none md:text-3xl font-normal tracking-[-0.03em]">
              ${price}
            </span>
          </div>

          <div className="mt-3 md:mt-6 flex justify-center md:justify-start">
            <button
              onClick={() => document.getElementById("select-model")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--oura-ink)] text-[var(--oura-cream)] px-7 py-3 text-sm font-medium tracking-[0.02em] transition-all duration-150 hover:bg-[var(--oura-slate)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Choose Yours
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
