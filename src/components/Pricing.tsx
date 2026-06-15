"use client";

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "₹8,499",
    desc: "Perfect for local businesses wanting an online presence they can control.",
    popular: false,
    features: [
      "7-10 Pages Setup",
      "Custom Admin Dashboard (CMS)",
      "WhatsApp Chat Integration",
      "Lead Capture Forms",
      "Google Analytics Setup",
      "SEO Optimization",
      "90+ PageSpeed Guarantee",
      "Social Media Integration",
      "2 Months Free Bug Support",
    ],
  },
  {
    name: "Premium",
    price: "₹17,999",
    desc: "For established businesses looking to capture leads and collect payments.",
    popular: true,
    features: [
      "17-20 Pages Setup",
      "Online Payment Integration",
      "Automated Emails (100/day free)",
      "Free Domain Setup (.in/.com)",
      "Advanced Local SEO",
      "Professional Business Emails",
      "Google My Business Setup",
      "Premium Scroll Animations",
      "Instant Lead Notifications",
    ],
  },
  {
    name: "Enterprise",
    price: "₹25,000+",
    desc: "For startups and companies needing custom functionality and apps.",
    popular: false,
    features: [
      "Complex Custom Logic",
      "3rd Party API Integrations",
      "User Portals & Dashboards",
      "Advanced Booking Systems",
      "Secure Custom Architecture",
      "Priority Maintenance",
      "Custom CRM Dashboard",
      "Role-Based Access Control",
      "Advanced Security Setup",
    ],
  },
  {
    name: "Custom ERP",
    price: "Custom",
    desc: "For large factories and offices needing internal management software.",
    popular: false,
    features: [
      "Internal Company Software",
      "Payroll & HR Modules",
      "Inventory Management",
      "Automated Invoicing",
      "Dedicated Cloud Server",
      "Full-Stack Ownership",
      "Secure Employee Portals",
      "Custom Reporting Tools",
      "1 Year Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "5rem 0", background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)", position: "relative" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
              letterSpacing: "-0.5px",
            }}
          >
            Transparent, <span style={{ color: "#FF6A00" }}>ROI-Focused</span> Pricing
          </h2>
          <p style={{ color: "#CBD5E1", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Choose the perfect plan to scale your business. No hidden fees, just high-converting results.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              style={{
                background: plan.popular ? "rgba(15, 23, 42, 0.9)" : "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(16px)",
                border: plan.popular ? "2px solid #FF6A00" : "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "16px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: plan.popular ? "0 20px 40px rgba(0,0,0,0.4)" : "0 10px 30px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = plan.popular
                  ? "0 25px 50px rgba(255, 106, 0, 0.2)"
                  : "0 15px 35px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = plan.popular
                  ? "0 20px 40px rgba(0,0,0,0.4)"
                  : "0 10px 30px rgba(0,0,0,0.2)";
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #FF6A00, #FF8C3A)",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    padding: "4px 16px",
                    borderRadius: "999px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    boxShadow: "0 4px 10px rgba(255,106,0,0.3)",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  {plan.name}
                </h3>
                <div style={{ color: "#94A3B8", fontSize: "0.85rem", lineHeight: 1.5, minHeight: "40px" }}>
                  {plan.desc}
                </div>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                {plan.price !== "Custom" && (
                  <div style={{ color: "#94A3B8", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontWeight: 600 }}>
                    Starting from
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ color: plan.popular ? "#FF6A00" : "#fff", fontSize: "2.25rem", fontWeight: 800, lineHeight: 1 }}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <div style={{ flexGrow: 1, marginBottom: "2rem" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#CBD5E1", fontSize: "0.9rem" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                        <path d="M20 6L9 17L4 12" stroke={plan.popular ? "#FF6A00" : "#25D366"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ lineHeight: 1.4 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/917823082038?text=Hi!%20I'm%20interested%20in%20the%20website%20development%20plans."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  background: plan.popular ? "#FF6A00" : "rgba(255,255,255,0.05)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "12px",
                  borderRadius: "8px",
                  border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                  transition: "background 0.2s ease, transform 0.1s ease",
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = "#E55D00";
                  } else {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  }
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = "#FF6A00";
                  } else {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
