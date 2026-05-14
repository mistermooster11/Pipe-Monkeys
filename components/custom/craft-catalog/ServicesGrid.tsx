"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { crafts } from "@/data/craft-catalog/crafts";

function ServiceCard({
  title,
  description,
  slug,
  delay,
  vis,
}: {
  title: string;
  description: string;
  slug: string;
  delay: string;
  vis: string;
}) {
  return (
    <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: delay }}>
      <Link
        href={`/craft-catalog/${slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "3rem 2.8rem",
          background: "#fff",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          textDecoration: "none",
          color: "inherit",
        }}
        className="group"
      >
        <h3
          className="h5"
          style={{ color: "#024979", marginBottom: "1.2rem" }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "1.5rem", lineHeight: 1.6, color: "#252525", flex: 1, marginBottom: "2rem" }}>
          {description}
        </p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "1.4rem", color: "#D6000B", fontWeight: 600 }}>
          <i className="icon-arrow-right" style={{ fontSize: "1.1rem" }} />
          <span style={{ borderBottom: "1px solid currentColor" }}>Full Service Details</span>
        </span>
      </Link>
    </div>
  );
}

export default function ServicesGrid() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";
  const gridVis = gridInView ? " is-visible" : "";

  return (
    <>
      {/* ── Masthead ── */}
      <div ref={heroRef} className="ia-bg-dark" style={{ padding: "5rem 0 6rem" }}>
        <div className="inner inner--slim-1172">
          <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
            <span><a href="/" style={{ color: "inherit" }}>Home</a></span>
            <em>&gt;</em>
            <span className="current-item">Our Services</span>
          </div>
          <h1 className={`ia-white fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s", marginTop: "1.5rem", marginBottom: "1.6rem" }}>
            Our Services
          </h1>
          <p className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s", fontSize: "1.8rem", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", maxWidth: "62rem" }}>
            From a single clogged drain to a full sewer line backup, Pipe Monkeys handles every drain and plumbing job in Brooklyn, Queens, and Nassau County. We use professional equipment, give you upfront pricing, and don&apos;t leave until the job is done right.
          </p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div ref={gridRef} style={{ background: "#FEFEF0", padding: "6rem 0 8rem" }}>
        <div className="inner inner--slim-1172">
          <p className={`fadeInUpS wow${gridVis}`} style={{ fontSize: "1.5rem", color: "#252525", marginBottom: "4rem" }}>
            {crafts.length} Services — Select a service to see how we handle it.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
              gap: "2.4rem",
            }}
          >
            {crafts.map((c, i) => (
              <ServiceCard
                key={c.slug}
                title={c.title}
                description={c.description}
                slug={c.slug}
                delay={`${i * 0.07}s`}
                vis={gridVis}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
