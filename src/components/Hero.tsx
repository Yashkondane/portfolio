import ConsultationForm from "./ConsultationForm";

interface HeroProps {
  h1Title?: string;
  h1Highlight?: string;
  heroSubtitle?: string;
  seoMode?: boolean;
}

export default function Hero({ h1Title, h1Highlight, heroSubtitle, seoMode }: HeroProps) {
  const displayTitle = h1Title || "Grow Your Business ";
  const displayHighlight = h1Highlight || "with a Website";
  const displaySubtitle = heroSubtitle || (
    <>
      From high-converting <strong style={{ color: "#fff" }}>Lead Generation Websites</strong> to complex{" "}
      <strong style={{ color: "#fff" }}>ERP Systems</strong> and <strong style={{ color: "#fff" }}>CMS Platforms</strong>.{" "}
      We build blazing-fast, scalable solutions optimized to get you more leads.
    </>
  );

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,106,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,106,0,0.08) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        className={`container-custom ${seoMode ? "" : "hero-grid"}`}
        style={{
          position: "relative",
          zIndex: 1,
          display: seoMode ? "flex" : "grid",
          flexDirection: seoMode ? "column" : "row",
          gridTemplateColumns: seoMode ? "none" : "1fr",
          justifyContent: seoMode ? "center" : "flex-start",
          textAlign: seoMode ? "center" : "left",
          gap: "3rem",
          alignItems: "center",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Left — Content */}
        <div style={{ maxWidth: seoMode ? "800px" : "620px", width: "100%", display: "flex", flexDirection: "column", alignItems: seoMode ? "center" : "flex-start" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "999px",
              padding: "6px 14px",
              marginBottom: "1.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#FF6A00",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase" }}>
              Top Web Development Service
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              marginBottom: "1.25rem",
            }}
          >
            {displayTitle}
            {!h1Title && <br />}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #FF6A00, #FF8C3A)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {displayHighlight}
            </span>{" "}
            {!h1Title && <br />}
            {!h1Title && "That Works"}
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: seoMode ? "700px" : "560px",
            }}
          >
            We build high-converting <strong style={{ color: "#fff" }}>websites</strong> and <strong style={{ color: "#fff" }}>custom software</strong>{" "}
            that help businesses attract more customers, automate{" "}
            operations, and grow faster. Stop losing leads to outdated{" "}
            systems and give your business the online presence it deserves.
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns" style={{ marginBottom: "2.5rem", justifyContent: seoMode ? "center" : "flex-start" }}>
            <a
              href="tel:+917823082038"
              className="hero-btn-primary hover:bg-[#E55D00] hover:-translate-y-[2px]"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#FF6A00",
                color: "#fff",
                fontWeight: 800,
                fontSize: "1rem",
                padding: "14px 24px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.1s",
                boxShadow: "0 4px 20px rgba(255,106,0,0.4)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Now
            </a>

            <a
              href="https://wa.me/917823082038?text=Hi!%20I%20need%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary hover:bg-[#1ebe5d] hover:-translate-y-[2px]"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#25D366",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "14px 24px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.1s",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L0 24l6.267-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.647-.487-5.183-1.341l-.371-.22-3.722.895.928-3.633-.242-.384A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              WhatsApp
            </a>

            {!seoMode && (
              <a
                href="#pricing"
                className="hero-btn-secondary hover:border-[#FF6A00] hover:text-[#FF6A00]"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "14px 20px",
                  borderRadius: "8px",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                View Pricing →
              </a>
            )}
          </div>

          {!seoMode && (
            <div className="rating-box" style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap", background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(12px)", padding: "12px 20px", borderRadius: "14px", border: "1px solid rgba(255, 255, 255, 0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} style={{ color: "#FFB000", fontSize: "1.1rem" }}>★</span>
                  ))}
                </div>
                <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 700 }}>4.8/5 Rating</span>
              </div>
              <div className="rating-divider" style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.2rem" }}>|</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 600 }}>
                  <strong style={{ color: "#fff", fontWeight: 900, fontSize: "1.2rem" }}>50+</strong> Websites Delivered
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right — Consultation Form */}
        {!seoMode && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ConsultationForm />
          </div>
        )}
      </div>

      <style>{`
        .hero-btns {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0.875rem;
          width: 100%;
        }
        .hero-btns > .hero-btn-primary {
          flex: 1 1 calc(50% - 0.5rem);
          justify-content: center;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .hero-btns > .hero-btn-secondary {
          flex: 0 0 auto;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .rating-divider { display: none !important; }
          .rating-box {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
        }
        @media (min-width: 600px) {
          .hero-btns > .hero-btn-primary {
            flex: 0 0 auto;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
