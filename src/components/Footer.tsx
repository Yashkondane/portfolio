"use client";
import Link from "next/link";

const PHONE = "+917823082038";
const PHONE_DISPLAY = "+91 78230 82038";
const WA = "917823082038";

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "PostgreSQL", "MongoDB", "Stripe", "Vercel", "Figma",
  "Google Analytics", "SEO", "Google Ads", "WordPress"
];

const LINKS = [
  { label: "Custom Websites", href: "#services" },
  { label: "Landing Pages", href: "#services" },
  { label: "E-Commerce", href: "#services" },
  { label: "Web Applications", href: "#services" },
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", color: "#94A3B8", borderTop: "3px solid #FF6A00" }}>
      <div className="container-custom" style={{ padding: "3.5rem 1rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
              <img 
                src="/image copy 2.png" 
                alt="Hyperlink Tech Solutions" 
                style={{ height: "110px", width: "auto", objectFit: "contain", mixBlendMode: "screen", margin: "-15px 0 -15px -10px" }} 
              />
            </Link>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Premium web development agency in India. We build fast, high-converting websites that drive real business results.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexDirection: "column" }}>
              <a href={`tel:${PHONE}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#FF6A00", fontWeight: 700, fontSize: "0.9rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call Now: {PHONE_DISPLAY}
              </a>
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#25D366", fontWeight: 700, fontSize: "0.9rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L0 24l6.267-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.647-.487-5.183-1.341l-.371-.22-3.722.895.928-3.633-.242-.384A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp Us
              </a>
              <a href="mailto:hyperlinktechsolutions@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#94A3B8", fontWeight: 600, fontSize: "0.9rem", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                hyperlinktechsolutions@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Services</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ fontSize: "0.85rem", color: "#94A3B8", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6A00")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Tech Stack</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {TECH_STACK.map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#94A3B8",
                    fontSize: "0.75rem",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "#64748B" }}>© {new Date().getFullYear()} Hyperlink Tech Solutions. All rights reserved.</p>
          <p style={{ fontSize: "0.8rem", color: "#64748B" }}>Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
