"use client";

import { useEffect, useRef, useState } from "react";

const NAV_COLS = [
  {
    heading: "Our Company",
    links: [
      { label: "About Us" },
      { label: "Leadership" },
      { label: "Medical Advisory Board" },
      { label: "Careers" },
      { label: "Newsroom" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", external: true },
      { label: "Sizing" },
      { label: "Recycling Program", external: true },
      { label: "Flexible Spending" },
      { label: "Heart Rate Monitoring" },
      { label: "My Account" },
      { label: "Oura on the Web", external: true },
      { label: "Contact" },
    ],
  },
  {
    heading: "Partner With Us",
    links: [
      { label: "For Organizations", external: true },
      { label: "Developers" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "The Pulse Blog" },
      { label: "Facebook" },
      { label: "Instagram" },
      { label: "Pinterest" },
      { label: "TikTok" },
      { label: "X" },
      { label: "YouTube" },
    ],
  },
];

const LEGAL_LINKS = [
  "Terms & Conditions",
  "Privacy Policy",
  "Accessibility",
  "IP Notice",
  "Security Center",
];

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className="relative z-0 -mt-[38px] w-full px-5 pt-[4.5rem] pb-8 md:px-10 md:pt-[5rem]"
      style={{ background: "#1c1b1a", color: "var(--oura-cream)" }}
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Top bar — logo */}
        <div
          className={`flex items-center pb-8 border-b transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {/* ŌURA wordmark */}
          <span
            className="tracking-[0.06em] font-medium select-none"
            style={{ fontSize: "1.35rem", color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-sans)" }}
          >
            ŌURA
          </span>
        </div>

        {/* Main content — newsletter + nav cols */}
        <div
          className={`grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2.8fr)] gap-10 md:gap-16 py-10 border-b transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[5px]"
          }`}
          style={{ borderColor: "rgba(255,255,255,0.1)", transitionDelay: "80ms" }}
        >
          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-lg leading-snug tracking-[-0.02em]" style={{ color: "rgba(255,255,255,0.88)" }}>
              Receive articles, tips, and offers from Oura
            </p>
            <div className="flex items-center rounded-full overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none min-w-0"
                style={{ color: "var(--oura-cream)" }}
              />
              <button
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mr-1 transition-all duration-150 hover:opacity-80 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.32)" }}>
              We care about protecting your data.{" "}
              <a href="#" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
                Read more in our Privacy Policy.
              </a>
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {NAV_COLS.map((col, ci) => (
              <div
                key={col.heading}
                className={`flex flex-col gap-3 transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${150 + ci * 50}ms` }}
              >
                <p className="text-[11px] font-medium tracking-[0.06em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {col.heading}
                </p>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    className="text-[13px] leading-snug flex items-center gap-1 transition-colors duration-150 group"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.95)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
                  >
                    {link.label}
                    {link.external && (
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pt-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6">
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              © 2026 Oura Health Oy. All rights reserved.
            </p>
            <button
              className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full transition-all duration-150 cursor-pointer"
              style={{
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              English
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
