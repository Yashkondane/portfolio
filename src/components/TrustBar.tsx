
const TRUST_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6A00">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    label: "50+ Projects",
    sub: "Successfully delivered",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6A00">
        <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 1.45-.39 2.81-1.07 3.98l1.73 1A9.96 9.96 0 0022 12c0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V3.03c-4.45.5-8 4.31-8 8.97 0 4.97 4.03 9 9 9 3.45 0 6.46-1.95 7.97-4.8l-1.73-1A6.98 6.98 0 0112 19z"/>
      </svg>
    ),
    label: "Fast Delivery",
    sub: "Projects delivered on time",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6A00">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
    label: "100% Secure",
    sub: "Modern & secure code",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6A00">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    ),
    label: "Conversion Focused",
    sub: "Optimized for lead generation",
  },
];

export default function TrustBar() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "2.5rem 0",
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="hover:bg-[rgba(255,106,0,0.1)] hover:border-[rgba(255,106,0,0.3)] hover:-translate-y-[5px]"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "1.5rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(255,106,0,0.15)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {item.icon}
              </span>
              <div>
                <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                  {item.label}
                </div>
                <div style={{ color: "#94A3B8", fontSize: "0.85rem", fontWeight: 500 }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
