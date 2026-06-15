import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Hyperlink Tech Solutions",
  description: "Privacy Policy for Hyperlink Tech Solutions web development agency.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main style={{ padding: "8rem 1rem 4rem", maxWidth: "800px", margin: "0 auto", background: "#fff", minHeight: "100vh" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem" }}>Privacy Policy</h1>
        <p style={{ color: "#64748B", marginBottom: "3rem", fontSize: "0.9rem" }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div style={{ color: "#334155", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "2rem" }}>
          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>1. Information We Collect</h2>
            <p>
              When you use our website or contact us for a consultation, we may collect personal information such as your name, business name, phone number, email address, and project requirements. We use this information solely to communicate with you and deliver our web development services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>2. How We Use Your Information</h2>
            <p>
              The information we collect is used to:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Communicate with you for customer service, to provide you with updates, and for marketing and promotional purposes (with your consent).</li>
              <li>Process your transactions and manage your web development project.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>3. Data Sharing and Security</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our website and hold certain information. This includes analytics tools (like Google Analytics) to help us understand our web traffic and marketing performance (like Google Ads). You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us by phone or WhatsApp at +91 78230 82038 or via the contact forms provided on this website.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
