"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function ReadyToStart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      style={{
        background: "#FEFEF0",
        padding: "7rem 0",
        textAlign: "center",
      }}
    >
      <div className="inner inner--slim-1172">
        <div className={`sub-heading fadeInUpS wow${vis}`} style={{ color: "#D6000B" }}>
          Free Estimates
        </div>
        <h2
          className={`h2 fadeInUpS wow${vis}`}
          style={{ color: "#024979", animationDelay: "0.1s", marginBottom: "1.6rem" }}
        >
          Ready to Get Started?
        </h2>
        <p
          className={`fadeInUpS wow${vis}`}
          style={{
            fontSize: "1.8rem",
            lineHeight: 1.6,
            color: "#252525",
            maxWidth: "62rem",
            margin: "0 auto 3.5rem",
            animationDelay: "0.2s",
          }}
        >
          Pipe Monkeys serves Brooklyn, Queens, and Nassau County — seven days a week.
          Call us to discuss your drain or plumbing issue and we&apos;ll give you a
          straight answer and a fair price before any work begins.
        </p>
        <div
          className={`fadeInUpS wow${vis}`}
          style={{
            display: "flex",
            gap: "1.6rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animationDelay: "0.3s",
          }}
        >
          <a
            href="tel:7187491830"
            className="ia-btn ia-btn--dark ia-btn--secondary is-visible"
          >
            <span>(718) 749-1830 — Call Now</span>
          </a>
          <Link
            href="/contact-us"
            className="ia-btn ia-btn--secondary is-visible"
          >
            <span>Request a Free Estimate</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
