"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";



// Local fallback angle images
const LOCAL = "/products/oura";

const MODELS = {
  standard: {
    label: "Oura Ring 4",
    desc: "Full titanium. Lightest smart ring ever.",
    sizes: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    colors: [
      { id: "silver",         name: "Silver",         bg: "#d8d4d0", swatch: `${LOCAL}/or4-silver-swatch.png`,         imgs: [{ src: `${LOCAL}/or4-silver-angle.png`,         label: "Angle", fit: "contain" }] },
      { id: "black",          name: "Black",          bg: "#2a2a2a", swatch: `${LOCAL}/or4-black-swatch.png`,          imgs: [{ src: `${LOCAL}/or4-black-angle.png`,          label: "Angle", fit: "contain" }] },
      { id: "brushed-silver", name: "Brushed Silver", bg: "#b8b6b2", swatch: `${LOCAL}/or4-brushed-silver-swatch.png`, imgs: [{ src: `${LOCAL}/or4-brushed-silver-angle.png`, label: "Angle", fit: "contain" }] },
      { id: "gold",           name: "Gold",           bg: "#c9a96e", swatch: `${LOCAL}/or4-gold-swatch.png`,           imgs: [{ src: `${LOCAL}/or4-gold-angle.png`,           label: "Angle", fit: "contain" }] },
      { id: "rose-gold",      name: "Rose Gold",      bg: "#c9a099", swatch: `${LOCAL}/or4-rose-gold-swatch.png`,      imgs: [{ src: `${LOCAL}/or4-rose-gold-angle.png`,      label: "Angle", fit: "contain" }] },
      { id: "stealth",        name: "Stealth",        bg: "#1c1c1c", swatch: `${LOCAL}/or4-stealth-swatch.png`,        imgs: [{ src: `${LOCAL}/or4-stealth-angle.png`,        label: "Angle", fit: "contain" }] },
    ],
  },
  ceramic: {
    label: "Oura Ring 4 Ceramic",
    desc: "Scratch-resistant ceramic. Timeless finish.",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: [
      { id: "cloud",    name: "Cloud",    bg: "#e4dfd9", swatch: `${LOCAL}/or4-ceramic-cloud-swatch.png`,    imgs: [{ src: `${LOCAL}/or4-ceramic-cloud-angle.png`,    label: "Angle", fit: "contain" }] },
      { id: "midnight", name: "Midnight", bg: "#1e1e22", swatch: `${LOCAL}/or4-ceramic-midnight-swatch.png`, imgs: [{ src: `${LOCAL}/or4-ceramic-midnight-angle.png`, label: "Angle", fit: "contain" }] },
      { id: "petal",    name: "Petal",    bg: "#d4b8b2", swatch: `${LOCAL}/or4-ceramic-petal-swatch.png`,    imgs: [{ src: `${LOCAL}/or4-ceramic-petal-angle.png`,    label: "Angle", fit: "contain" }] },
      { id: "tide",     name: "Tide",     bg: "#8fa89a", swatch: `${LOCAL}/or4-ceramic-tide-swatch.png`,     imgs: [{ src: `${LOCAL}/or4-ceramic-tide-angle.png`,     label: "Angle", fit: "contain" }] },
    ],
  },
};

// Image with error → local fallback
function ProductImage({
  src, fallback, alt, fit,
}: {
  src: string; fallback: string; alt: string; fit: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => { setImgSrc(src); }, [src]);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={`drop-shadow-xl transition-all duration-200 ${fit === "cover" ? "object-cover rounded-[20px]" : "object-contain"}`}
      onError={() => setImgSrc(fallback)}
    />
  );
}

export default function SelectYourModelSection({ price = "97", checkouts = {} }: { price?: string, checkouts?: Record<string, string> }) {
  const [model, setModel] = useState<"standard" | "ceramic">("standard");
  const [colorIdx, setColorIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [size, setSize] = useState<number | "kit" | null>(null);
  const [imgFade, setImgFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const current = MODELS[model];
  const color = current.colors[colorIdx];
  const activeImg = color.imgs[Math.min(imgIdx, color.imgs.length - 1)];

  function fade(cb: () => void) {
    setImgFade(false);
    setTimeout(() => { cb(); setImgFade(true); }, 200);
  }

  function switchModel(m: "standard" | "ceramic") {
    if (m === model) return;
    fade(() => { setModel(m); setColorIdx(0); setImgIdx(0); });
  }

  function pickColor(i: number) {
    if (i === colorIdx) return;
    fade(() => { setColorIdx(i); setImgIdx(0); });
  }

  function pickImg(i: number) {
    if (i === imgIdx) return;
    fade(() => setImgIdx(i));
  }

  // Local angle image for fallback
  const localAngle = model === "ceramic"
    ? `${LOCAL}/or4-ceramic-${color.id}-angle.png`
    : `${LOCAL}/or4-${color.id}-angle.png`;

  return (
    <section id="select-model" ref={sectionRef} className="w-full bg-[var(--oura-cream)] py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-5 blur-[6px]"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--oura-mute)] mb-3">Choose yours</p>
          <h2
            className="text-[var(--oura-ink)] font-normal leading-[0.96] tracking-[-0.05em]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            A finish for{" "}
            <em className="not-italic" style={{ fontFamily: "var(--font-editorial)", fontStyle: "italic", fontWeight: 800, fontSize: "1.18em" }}>
              every lifestyle
            </em>
          </h2>
        </div>

        {/* Card */}
        <div
          className={`rounded-[38px] overflow-hidden transition-colors duration-700 ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-[10px]"
          }`}
          style={{
            background: color.bg,
            transitionProperty: "opacity, transform, filter, background-color",
            transitionDuration: "800ms, 800ms, 800ms, 700ms",
            transitionDelay: "100ms, 100ms, 100ms, 0ms",
            transitionTimingFunction: "ease-out",
          }}
        >
          <div className="grid md:grid-cols-2 min-h-[540px]">

            {/* Left — image */}
            <div className="flex flex-col min-h-[340px] md:min-h-0">
              {/* Main image */}
              <div className="relative flex-1 flex items-center justify-center p-8 md:p-12">
                <div
                  className="relative w-full max-w-[340px] transition-all duration-200"
                  style={{
                    aspectRatio: activeImg.fit === "cover" ? "4/5" : "1/1",
                    opacity: imgFade ? 1 : 0,
                    transform: imgFade ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  <ProductImage
                    src={activeImg.src}
                    fallback={localAngle}
                    alt={`${current.label} ${color.name} — ${activeImg.label}`}
                    fit={activeImg.fit}
                  />
                </div>
              </div>

              {/* Thumbnail strip */}
              {color.imgs.length > 1 && (
                <div className="flex items-center justify-center gap-2 pb-5 px-5">
                  {color.imgs.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => pickImg(i)}
                      title={img.label}
                      className={`
                        relative w-12 h-12 rounded-[10px] overflow-hidden border-2 transition-all duration-150 cursor-pointer flex-shrink-0
                        ${imgIdx === i ? "border-[var(--oura-ink)] opacity-100 scale-105" : "border-transparent opacity-50 hover:opacity-80"}
                      `}
                      style={{ background: color.bg }}
                    >
                      <ProductImage src={img.src} fallback={localAngle} alt={img.label} fit="cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — controls */}
            <div className="flex flex-col justify-center bg-[var(--oura-cream)] rounded-[32px] m-2 p-8 md:p-10 gap-6">

              {/* Model toggle */}
              <div className="inline-flex self-start rounded-full bg-[var(--oura-soft)] p-1 border border-[var(--oura-line)]">
                {(["standard", "ceramic"] as const).map((m) => (
                  <button key={m} onClick={() => switchModel(m)}
                    className={`rounded-full px-4 py-2 text-xs font-medium tracking-[0.04em] transition-all duration-200 cursor-pointer whitespace-nowrap ${model === m ? "bg-[var(--oura-ink)] text-[var(--oura-cream)] shadow-sm" : "text-[var(--oura-mute)] hover:text-[var(--oura-ink)]"}`}
                  >
                    {m === "standard" ? "Oura Ring 4" : "Ceramic"}
                  </button>
                ))}
              </div>

              {/* Name + desc */}
              <div>
                <h3 className="text-[var(--oura-ink)] font-normal leading-tight tracking-[-0.04em]" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)" }}>
                  {current.label}
                </h3>
                <p className="mt-1 text-sm text-[var(--oura-mute)] leading-relaxed">{current.desc}</p>
              </div>

              {/* Color */}
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--oura-mute)] mb-3">
                  Color — <span className="text-[var(--oura-ink)]">{color.name}</span>
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {current.colors.map((c, i) => (
                    <button key={c.id} onClick={() => pickColor(i)} title={c.name}
                      className={`relative w-9 h-9 rounded-full transition-all duration-200 cursor-pointer flex-shrink-0 ${colorIdx === i ? "ring-2 ring-offset-2 ring-[var(--oura-ink)] scale-110" : "hover:scale-105 ring-1 ring-[var(--oura-line)]"}`}
                    >
                      <Image src={c.swatch} alt={c.name} fill className="rounded-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--oura-mute)] mb-3">
                  {size === "kit" ? "Size — Free Sizing Kit" : size ? `Size — US ${size}` : "Size — Select"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.sizes.map((s) => (
                    <button key={s} onClick={() => setSize(s)}
                      className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer border ${size === s ? "bg-[var(--oura-ink)] text-[var(--oura-cream)] border-[var(--oura-ink)]" : "bg-transparent text-[var(--oura-slate)] border-[var(--oura-line)] hover:border-[var(--oura-slate)]"}`}
                    >
                      {s}
                    </button>
                  ))}
                  <button onClick={() => setSize("kit")}
                    className={`rounded-full px-3 h-10 text-xs font-medium transition-all duration-150 cursor-pointer border whitespace-nowrap ${size === "kit" ? "bg-[var(--oura-ink)] text-[var(--oura-cream)] border-[var(--oura-ink)]" : "bg-transparent text-[var(--oura-slate)] border-[var(--oura-line)] hover:border-[var(--oura-slate)]"}`}
                  >
                    Free Kit
                  </button>
                </div>
                {size === "kit" && (
                  <p className="mt-2 text-xs text-[var(--oura-mute)]">Not sure of your size? We&apos;ll send a free sizing kit before your order.</p>
                )}
              </div>

              <div className="h-px bg-[var(--oura-line)]" />

              {/* Price + CTA */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="strike-through text-[var(--oura-mute)] text-base">$499</span>
                  <span className="text-[var(--oura-ink)] font-normal tracking-[-0.03em]" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)" }}>${price}</span>
                </div>
                <a href={checkouts[`${model}-${color.id}`] || ""} className="inline-flex items-center gap-2 rounded-full bg-[var(--oura-ink)] text-[var(--oura-cream)] px-7 py-3 text-sm font-medium tracking-[0.02em] transition-all duration-150 hover:bg-[var(--oura-slate)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                  Shop Now
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
