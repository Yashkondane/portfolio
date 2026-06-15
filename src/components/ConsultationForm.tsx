"use client";
import { useState } from "react";

const PHONE = "+917823082038";
const WA_NUMBER = "917823082038";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    service: "website",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! I need a website for my business.\nName: ${form.name}\nBusiness: ${form.businessName}\nService: ${form.service}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1.5px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    color: "#111827",
    background: "#fafafa",
    transition: "border-color 0.2s",
    outline: "none",
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "1.75rem",
        boxShadow: "0 20px 60px rgba(26,26,26,0.2)",
        width: "100%",
        maxWidth: "460px",
      }}
    >
      <div style={{ marginBottom: "1.25rem" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "4px" }}>
          Get a Free Consultation
        </h3>
        <p style={{ fontSize: "0.8rem", color: "#666" }}>Fill in your details — we&apos;ll call you back in 5 minutes!</p>
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#1A1A1A")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="text"
            name="businessName"
            aria-label="Your Business Name"
            placeholder="Your Business Name"
            required
            value={form.businessName}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#1A1A1A")}
            onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
          />
        </div>

        <select
          name="service"
          aria-label="Service Required"
          value={form.service}
          onChange={handleChange}
          style={{
            ...inputStyle,
            cursor: "pointer",
            appearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
          }}
        >
          <option value="website">New Website</option>
          <option value="landing-page">Landing Page</option>
          <option value="ecommerce">E-Commerce Store</option>
          <option value="other">Other Requirement</option>
        </select>
        <button
          type="submit"
          style={{
            background: "#FF6A00",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1rem",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "background 0.2s, transform 0.1s",
            marginTop: "0.25rem",
            boxShadow: "0 4px 16px rgba(255,106,0,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#E55D00";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#FF6A00";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.847L0 24l6.267-1.507A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.647-.487-5.183-1.341l-.371-.22-3.722.895.928-3.633-.242-.384A9.973 9.973 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          Get Free Proposal on WhatsApp
        </button>
        <a
          href={`tel:${PHONE}`}
          style={{ textAlign: "center", color: "#555", fontSize: "0.8rem", display: "block" }}
        >
          Or call directly: <strong style={{ color: "#0A0A0A" }}>+91 78230 82038</strong>
        </a>
      </form>
    </div>
  );
}
