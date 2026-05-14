"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const testimonials = [
  {
    id: "daniel-p",
    quote:
      "Professional service with a very fair price. They send you info about the assigned technician in advance and showed up exactly on time. They cleaned up nicely after snaking a drain line on the 2nd floor of a 3 story building. Forget Roto Rooter — Pipe Monkeys will be my new go-to for plumbing needs.",
    name: "Daniel P.",
    location: "Brooklyn Homeowner",
    platform: "Google Review",
  },
  {
    id: "maria-r",
    quote:
      "Had a main sewer line backup on a Sunday morning. Called Pipe Monkeys and they were at my door within two hours. The tech did a camera inspection, found the blockage, and cleared it completely. Honest pricing and no upsell pressure. Highly recommend.",
    name: "Maria R.",
    location: "Queens Homeowner",
    platform: "Google Review",
  },
  {
    id: "james-t",
    quote:
      "I manage a 12-unit building in Bay Ridge and Pipe Monkeys has become our go-to for any drain issue. Fast response, fair rates, and they always leave the job site clean. When hydro-jetting cleared a line three other companies couldn't, I stopped calling anyone else.",
    name: "James T.",
    location: "Bay Ridge Property Manager",
    platform: "Google Review",
  },
  {
    id: "linda-k",
    quote:
      "Called about a slow kitchen sink — they actually showed up the same day. The technician explained exactly what was causing the clog and fixed it in under an hour. Reasonable price and very respectful of our home. Will absolutely use again.",
    name: "Linda K.",
    location: "Nassau County Homeowner",
    platform: "Yelp Review",
  },
];

function StarRating() {
  return (
    <div className="flex gap-[2px] mb-[1.2rem]" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D6000B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ item, delay }: { item: typeof testimonials[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "4px",
          padding: "3rem 2.8rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StarRating />
        <p
          style={{
            fontSize: "1.6rem",
            lineHeight: 1.65,
            fontStyle: "italic",
            color: "#fff",
            flex: 1,
            marginBottom: "2.4rem",
          }}
        >
          &ldquo;{item.quote}&rdquo;
        </p>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.6rem" }}>
          <strong style={{ display: "block", fontSize: "1.5rem", color: "#fff" }}>
            {item.name}
          </strong>
          <span style={{ display: "block", fontSize: "1.3rem", color: "#50B6EA", marginTop: "0.3rem" }}>
            {item.location}
          </span>
          <span style={{ display: "block", fontSize: "1.2rem", color: "rgba(255,255,255,0.55)", marginTop: "0.3rem" }}>
            {item.platform} ★★★★★
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="front-testimonial ia-bg-dark">
      <div className="inner inner--slim-1172">
        <div className={`sub-heading sub-heading__white fadeInUpS wow${vis}`}>
          What Our Customers Say
        </div>
        <h2 className={`h3 ia-white fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
          Real Reviews From Real Neighbors
        </h2>
      </div>

      <div className="inner" style={{ paddingTop: "3.5rem", paddingBottom: "6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(28rem, 1fr))",
            gap: "2.4rem",
          }}
        >
          {testimonials.map((t, i) => (
            <ReviewCard key={t.id} item={t} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </div>
  );
}
