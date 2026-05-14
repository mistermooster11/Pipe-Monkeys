"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import type { ServicePage } from "@/data/craft-catalog/service-pages";
import type { CraftItem } from "@/data/craft-catalog/crafts";

const NAV_LINKS = [
  { label: "Overview",           anchor: "#overview" },
  { label: "Services We Provide", anchor: "#services" },
  { label: "How We Work",        anchor: "#how-we-work" },
  { label: "Related Services",   anchor: "#related" },
];

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";
  return (
    <div ref={ref} id={id} className={`fadeIn wow${vis}`} style={{ marginBottom: "5rem" }}>
      {children}
    </div>
  );
}

export default function ServicePageContent({
  page,
  related,
}: {
  page: ServicePage;
  related: CraftItem[];
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const heroVis = heroInView ? " is-visible" : "";

  return (
    <>
      {/* ── Hero / Masthead ── */}
      <div ref={heroRef} className="ia-bg-dark" style={{ padding: "5rem 0 6rem" }}>
        <div className="inner inner--slim-1172">
          <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
            <span><a href="/" style={{ color: "inherit" }}>Home</a></span>
            <em>&gt;</em>
            <span><a href="/craft-catalog" style={{ color: "inherit" }}>Services</a></span>
            <em>&gt;</em>
            <span className="current-item">{page.title}</span>
          </div>
          <h1
            className={`ia-white fadeInUpS wow${heroVis}`}
            style={{ animationDelay: "0.1s", marginTop: "1.5rem" }}
          >
            {page.title}
          </h1>
        </div>
      </div>

      {/* ── Body: sidebar + content ── */}
      <div style={{ background: "#fff", padding: "6rem 0 8rem" }}>
        <div className="inner inner--slim-1172">
          <div style={{ display: "flex", gap: "6rem", alignItems: "flex-start" }}>

            {/* ── Sidebar ── */}
            <aside
              style={{
                flexShrink: 0,
                width: "22rem",
                position: "sticky",
                top: "10rem",
              }}
              className="hidden lg:block"
            >
              <div style={{ marginBottom: "3rem" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.12rem", textTransform: "uppercase", color: "#024979", marginBottom: "1.2rem" }}>
                  Page Navigation
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {NAV_LINKS.map((l) => (
                    <li key={l.anchor} style={{ borderTop: "1px dashed #e0e0e0" }}>
                      <a
                        href={l.anchor}
                        style={{
                          display: "block",
                          padding: "1rem 0",
                          fontSize: "1.4rem",
                          color: "#252525",
                          textDecoration: "none",
                          transition: "color 0.25s",
                        }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                  <li style={{ borderTop: "1px dashed #e0e0e0", borderBottom: "1px dashed #e0e0e0" }}>
                    <a
                      href="tel:7187491830"
                      style={{ display: "block", padding: "1rem 0", fontSize: "1.4rem", color: "#D6000B", fontWeight: 600, textDecoration: "none" }}
                    >
                      Call (718) 749-1830
                    </a>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact-us"
                className="ia-btn ia-btn--dark is-visible"
                style={{ display: "block", textAlign: "center" }}
              >
                <span>Contact Now</span>
              </Link>
            </aside>

            {/* ── Main content ── */}
            <div style={{ flex: 1, minWidth: 0 }}>

              {/* Overview */}
              <Section id="overview">
                <h2 className="h4" style={{ color: "#024979", marginBottom: "2rem" }}>Overview</h2>
                {page.overview.map((para, i) => (
                  <p key={i} style={{ fontSize: "1.6rem", lineHeight: 1.7, color: "#252525", marginBottom: "1.6rem" }}>
                    {para}
                  </p>
                ))}

                {/* Quick contact */}
                <div
                  style={{
                    background: "#FEFEF0",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    padding: "2.4rem",
                    marginTop: "3rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.6rem",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", color: "#252525", fontWeight: 500 }}>Same-day service available:</span>
                  <a href="tel:7187491830" style={{ fontSize: "1.5rem", color: "#D6000B", fontWeight: 700, textDecoration: "none" }}>
                    (718) 749-1830
                  </a>
                  <Link href="/contact-us" style={{ fontSize: "1.4rem", color: "#024979", textDecoration: "underline" }}>
                    Contact Us Online
                  </Link>
                </div>
              </Section>

              {/* Services Provided */}
              <Section id="services">
                <h2 className="h4" style={{ color: "#024979", marginBottom: "2rem" }}>Services We Provide</h2>
                <p style={{ fontSize: "1.6rem", lineHeight: 1.7, color: "#252525", marginBottom: "1.6rem" }}>
                  {page.servicesProvided}
                </p>
                {page.servicesProvidedExtra && (
                  <p style={{ fontSize: "1.6rem", lineHeight: 1.7, color: "#252525" }}>
                    {page.servicesProvidedExtra}
                  </p>
                )}
              </Section>

              {/* How We Work */}
              <Section id="how-we-work">
                <h2 className="h4" style={{ color: "#024979", marginBottom: "2.5rem" }}>How We Work</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {page.benefits.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "2.4rem 2.8rem",
                        background: "#FEFEF0",
                        borderLeft: "4px solid #024979",
                        borderRadius: "0 4px 4px 0",
                      }}
                    >
                      <p style={{ fontSize: "1.6rem", lineHeight: 1.65, color: "#252525", margin: 0 }}>
                        <strong style={{ color: "#024979" }}>{b.heading}</strong>{" "}
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Ready to book CTA */}
              <div
                style={{
                  background: "#024979",
                  borderRadius: "4px",
                  padding: "3.5rem",
                  marginBottom: "5rem",
                  textAlign: "center",
                }}
              >
                <h3 className="h4" style={{ color: "#fff", marginBottom: "1rem" }}>Ready to book?</h3>
                <p style={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.85)", marginBottom: "2.5rem" }}>
                  Call <a href="tel:7187491830" style={{ color: "#50B6EA", fontWeight: 700 }}>(718) 749-1830</a> for same-day scheduling, or{" "}
                  <Link href="/contact-us" style={{ color: "#50B6EA" }}>send us a message online</Link>.
                  We give you a price before we start — no surprises.
                </p>
                <div style={{ display: "flex", gap: "1.6rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <a href="tel:7187491830" className="ia-btn is-visible">
                    <span>(718) 749-1830</span>
                  </a>
                  <Link href="/contact-us" className="ia-btn is-visible">
                    <span>Contact Us Online</span>
                  </Link>
                </div>
              </div>

              {/* Related Services */}
              {related.length > 0 && (
                <Section id="related">
                  <h2 className="h4" style={{ color: "#024979", marginBottom: "1rem" }}>Related Services</h2>
                  <p style={{ fontSize: "1.5rem", color: "#252525", marginBottom: "2.5rem" }}>
                    Pipe Monkeys handles every type of drain and plumbing job across Brooklyn, Queens, and Nassau County. Explore our other services below.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(22rem, 1fr))",
                      gap: "1.6rem",
                    }}
                  >
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/craft-catalog/${r.slug}`}
                        style={{
                          display: "block",
                          padding: "2rem 2.4rem",
                          background: "#fff",
                          border: "1px solid #e0e0e0",
                          borderRadius: "4px",
                          textDecoration: "none",
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#024979",
                        }}
                      >
                        {r.title} →
                      </Link>
                    ))}
                  </div>
                </Section>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
