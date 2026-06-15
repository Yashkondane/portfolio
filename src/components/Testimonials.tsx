"use client";

const REVIEWS = [
  {
    name: "Rajesh Gupta",
    trip: "E-Commerce Website",
    rating: 5,
    text: "Hyperlink Tech Solutions built our online store from scratch. Sales went up 300% in the first month. The website loads super fast and looks premium. Best investment we made!",
    date: "2 weeks ago",
    avatar: "RG",
    avatarColor: "#e91e63",
  },
  {
    name: "Priya Sharma",
    trip: "Landing Page for Google Ads",
    rating: 5,
    text: "We were wasting money on Google Ads with a bad landing page. Yash rebuilt it and our cost-per-lead dropped by 60%. The WhatsApp integration is genius!",
    date: "1 month ago",
    avatar: "PS",
    avatarColor: "#1976d2",
  },
  {
    name: "Amit Patel",
    trip: "Business Website",
    rating: 5,
    text: "They delivered our website in just 5 days. Professional, mobile-friendly, and our clients constantly compliment the design. Highly recommend for any business in India.",
    date: "3 weeks ago",
    avatar: "AP",
    avatarColor: "#388e3c",
  },
  {
    name: "Sneha Reddy",
    trip: "Custom Web Application",
    rating: 5,
    text: "Built a complete CRM dashboard for our team. The attention to detail was incredible — every feature works flawlessly. They really understand business needs.",
    date: "1 week ago",
    avatar: "SR",
    avatarColor: "#f57c00",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#0A0A0A", padding: "5rem 0" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,106,0,0.15)",
              color: "#FF6A00",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "99px",
              marginBottom: "0.75rem",
              border: "1px solid rgba(255,106,0,0.3)",
            }}
          >
            Client Reviews
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.5px",
            }}
          >
            What Our Clients Say
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "0.75rem" }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} style={{ color: "#FF6A00", fontSize: "1.2rem" }}>★</span>
            ))}
            <span style={{ color: "#94A3B8", fontSize: "0.9rem", marginLeft: "6px" }}>5.0/5 avg · Trusted by 50+ businesses</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              style={{
                background: "rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "1.5rem",
                border: "1.5px solid rgba(255,255,255,0.1)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FF6A00";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", gap: "2px", marginBottom: "0.875rem" }}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#FF6A00", fontSize: "0.9rem" }}>★</span>
                ))}
              </div>

              <p style={{ color: "#CBD5E1", fontSize: "0.875rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.25rem" }}>
                &ldquo;{r.text}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: r.avatarColor,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {r.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem" }}>{r.name}</div>
                  <div style={{ color: "#FF6A00", fontSize: "0.75rem" }}>{r.trip}</div>
                </div>
                <div style={{ color: "#64748B", fontSize: "0.7rem", flexShrink: 0 }}>{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
