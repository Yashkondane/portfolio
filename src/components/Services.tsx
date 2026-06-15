"use client";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  cta: string;
}

const SERVICES: Service[] = [
  {
    id: "custom-website",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
      </svg>
    ),
    title: "Custom Website Development",
    desc: "Stunning, mobile-first websites built with modern tech. Fast-loading, SEO-friendly, and designed to convert visitors into customers.",
    features: ["Mobile-first design", "SEO optimized", "Fast loading speed"],
    cta: "Get a Website",
  },
  {
    id: "landing-page",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
        <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    title: "Google Ads Landing Pages",
    desc: "High-converting landing pages specifically designed for Google Ads campaigns. Maximize your ad spend ROI with pages built for lead generation.",
    features: ["Conversion optimized", "A/B tested layouts", "Lead capture forms"],
    cta: "Build Landing Page",
  },
  {
    id: "ecommerce",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with secure payments, inventory management, and beautiful product pages that drive sales.",
    features: ["Secure payments", "Product management", "Order tracking"],
    cta: "Start E-Commerce",
  },
  {
    id: "webapp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
    title: "Custom Web Applications",
    desc: "Powerful web apps with dashboards, admin panels, and complex business logic. Built with React, Next.js, and modern backends.",
    features: ["Admin dashboards", "API integrations", "Real-time features"],
    cta: "Build Web App",
  },
];

const WA = "917823082038";

export default function Services() {
  return (
    <section id="services" style={{ background: "#fff", padding: "5rem 0" }}>
      <div className="container-custom">
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
            Our Services
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            Everything Your Business Needs Online
          </h2>
          <p style={{ color: "#666", marginTop: "0.75rem", maxWidth: "480px", margin: "0.75rem auto 0" }}>
            From a simple landing page to a complex web application — we build solutions that drive real business results.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.id}
              style={{
                background: "#fafafa",
                borderRadius: "16px",
                padding: "1.75rem",
                border: "1.5px solid #e8e8e8",
                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1A1A1A";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,86,219,0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e8e8e8";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "linear-gradient(135deg, #1A1A1A, #0A0A0A)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {s.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.4rem" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {s.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", color: "#444" }}>
                    <span style={{ color: "#FF6A00", fontWeight: 900, fontSize: "1rem" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem" }}>
                <a
                  href={`https://wa.me/${WA}?text=Hi!%20I%20need%20${encodeURIComponent(s.title)}%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background: "#FF6A00",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    padding: "11px 0",
                    borderRadius: "8px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#E55D00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FF6A00";
                  }}
                >
                  {s.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
