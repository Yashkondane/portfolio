"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Our pricing depends on the project scope. A simple landing page starts at ₹8,499, while a premium website starts at ₹17,999, and custom enterprise solutions range from ₹25,000+. Contact us on WhatsApp for a free, no-obligation quote within minutes.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A landing page can be delivered in 3-5 days. A full custom website takes 1-3 weeks depending on complexity. We prioritize speed without compromising quality.",
  },
  {
    q: "Do you build websites optimized for Google Ads?",
    a: "Absolutely! This is our specialty. We build landing pages and websites specifically designed to maximize your Google Ads ROI with fast load times, strong CTAs, and conversion-optimized layouts.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, industry-leading technologies: Next.js, React, TypeScript, Tailwind CSS, and Node.js. This ensures your website is fast, secure, scalable, and SEO-friendly out of the box.",
  },
  {
    q: "Will my website work well on mobile phones?",
    a: "Yes! Every website we build is mobile-first. Since 80%+ of Indian internet users browse on mobile, we design for phones first and then scale up to desktop. Your site will look perfect on every device.",
  },
  {
    q: "Do you provide maintenance and support after delivery?",
    a: "Yes, we offer post-launch support including bug fixes, minor updates, and performance monitoring. We also offer monthly maintenance packages for ongoing content updates and feature additions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "#f5f5f5", padding: "5rem 0" }}>
      <div className="container-custom" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "#E2E8F0",
              color: "#0A0A0A",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "99px",
              marginBottom: "0.75rem",
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-0.5px",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                border: `1.5px solid ${openIndex === i ? "#1A1A1A" : "#e8e8e8"}`,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.125rem 1.25rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
                aria-expanded={openIndex === i}
                id={`faq-btn-${i}`}
                aria-controls={`faq-panel-${i}`}
              >
                <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#FF6A00",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    padding: "0 1.25rem 1.25rem",
                    color: "#555",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "1rem",
                    marginTop: "0",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
