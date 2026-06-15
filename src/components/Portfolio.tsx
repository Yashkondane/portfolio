"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Soulhome Membership Platform",
    desc: "A premium, UK-based subscription membership platform that offers exclusive educational courses, digital resources, and services. It features secure payments, automated subscriptions, and a personalized user dashboard for a seamless member experience.",
    image: "/image.png",
    color: "#FF6A00",
    link: "https://soulhomelove.com/",
  },
  {
    title: "SACG NGO Platform",
    desc: "A US-based all-in-one community portal for NGOs to seamlessly manage events, highlight sponsors, connect with non-profits, and engage their audience through a simple admin dashboard.",
    image: "/image copy.png",
    color: "#1A1A1A",
    link: "https://www.sacgnh.org/",
  },
  {
    title: "Ojas Clinics",
    desc: "A modern medical clinic website featuring online appointments, specialized treatment details, and a calming, professional design.",
    image: "/image copy 3.png",
    color: "#FF6A00",
    link: "https://ojasclinic.com/",
  },
  {
    title: "XMF Martial Arts",
    desc: "A martial arts website with 300+ registered students where they can view their complete performance statistics and analytics in a custom dashboard.",
    image: "/image copy 4.png",
    color: "#1A1A1A",
    link: "https://xmf.co.in/",
  },
  {
    title: "NBR Group Real Estate",
    desc: "A premium real estate website showcasing luxury resort-style properties, featuring interactive galleries, property details, and a seamless inquiry process.",
    image: "/image copy 5.png",
    color: "#1A1A1A",
    link: "https://www.nbrgroup.in/",
  },
  {
    title: "Springs Unlimited India",
    desc: "A professional website for a spring manufacturing company, showcasing their product range and capabilities. Built with a clean industrial design that communicates reliability and precision engineering.",
    image: "/image copy 6.png",
    color: "#FF6A00",
    link: "https://springsunlimitedindia.com/",
  },
  {
    title: "Mumbai Cabs Services",
    desc: "A high-performing cab services platform operating across Maharashtra. Built and optimized for Google Ads to drive high-quality traffic and maximize lead generation.",
    image: "/image copy 7.png",
    color: "#1A1A1A",
    link: "https://www.mumbaicabsservice.com/",
  },
];

const WA = "917823082038";

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Initial check for bounds on mount
  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    const atStart = scrollLeft <= 10;
    const atEnd = scrollLeft >= scrollWidth - clientWidth - 10;
    
    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
    
    if (atEnd) {
      setActiveIndex(PROJECTS.length - 1);
      return;
    }

    const item = scrollContainerRef.current.firstElementChild as HTMLElement;
    const itemWidth = item ? item.offsetWidth + 24 : (scrollWidth / PROJECTS.length);
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  const scrollPrev = () => {
    if (!scrollContainerRef.current) return;
    const item = scrollContainerRef.current.firstElementChild as HTMLElement;
    const itemWidth = item ? item.offsetWidth + 24 : 350;
    scrollContainerRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!scrollContainerRef.current) return;
    const item = scrollContainerRef.current.firstElementChild as HTMLElement;
    const itemWidth = item ? item.offsetWidth + 24 : 350;
    scrollContainerRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const item = container.children[index] as HTMLElement;
    if (item) {
      const scrollPos = item.offsetLeft - container.offsetLeft - 16;
      container.scrollTo({
        left: scrollPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="portfolio" style={{ background: "#f5f5f5", padding: "5rem 0" }}>
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
            Our Portfolio
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-0.5px",
            }}
          >
            Projects That Deliver Results
          </h2>
          <p style={{ color: "#666", marginTop: "0.75rem", maxWidth: "440px", margin: "0.75rem auto 0" }}>
            Real websites, real results. Every project is built to drive measurable business growth.
          </p>
        </div>

        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          {/* Left Navigation Arrow */}
          <button
            aria-label="Previous slide"
            onClick={scrollPrev}
            disabled={isAtStart}
            className="portfolio-nav-button"
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "50%",
              width: "52px",
              height: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: isAtStart ? "not-allowed" : "pointer",
              opacity: isAtStart ? 0 : 1,
              pointerEvents: isAtStart ? "none" : "auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)"
            }}
            onMouseEnter={(e) => {
              if (!isAtStart) {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isAtStart) {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="portfolio-scroll hide-scrollbar"
            style={{
              display: "flex",
              gap: "2rem",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              maxWidth: "800px",
              margin: "0 auto",
              padding: "1rem 0",
            }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                style={{
                  flex: "0 0 100%",
                  minWidth: "100%",
                  scrollSnapAlign: "center",
                  background: "#fff",
                  borderRadius: "16px",
                  border: "1.5px solid #e8e8e8",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 12px 36px ${p.color}22`;
                  e.currentTarget.style.borderColor = p.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderColor = "#e8e8e8";
                }}
              >
                {/* Image Section */}
                <div
                  style={{
                    width: "100%",
                    height: "clamp(260px, 45vw, 420px)",
                    background: "#f0f0f0",
                    position: "relative",
                    borderBottom: "1px solid #e8e8e8",
                  }}
                >
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    style={{ objectFit: "cover", objectPosition: "center" }} 
                    sizes="(max-width: 768px) 100vw, 800px" 
                    quality={75}
                  />
                </div>

                {/* Content Section */}
                <div style={{ padding: "clamp(1.5rem, 4vw, 3rem)", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }} onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")} onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#666", lineHeight: 1.6, marginBottom: "1.5rem", flexGrow: 1 }}>
                    {p.desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "auto" }}>
                    <a
                      href={`https://wa.me/${WA}?text=Hi!%20I%20want%20a%20website%20similar%20to%20${encodeURIComponent(p.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        background: "#FF6A00",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        padding: "16px 0",
                        borderRadius: "8px",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      I Want This →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            aria-label="Next slide"
            onClick={scrollNext}
            disabled={isAtEnd}
            className="portfolio-nav-button"
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "50%",
              width: "52px",
              height: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: isAtEnd ? "not-allowed" : "pointer",
              opacity: isAtEnd ? 0 : 1,
              pointerEvents: isAtEnd ? "none" : "auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)"
            }}
            onMouseEnter={(e) => {
              if (!isAtEnd) {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isAtEnd) {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "1.5rem" }}>
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              style={{
                width: activeIndex === index ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: activeIndex === index ? "#FF6A00" : "#CBD5E1",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease"
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "2rem", color: "#666", fontSize: "0.85rem" }}>
          Have a unique project in mind?{" "}
          <a
            href={`https://wa.me/${WA}?text=Hi!%20I%20have%20a%20custom%20project%20idea.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1A1A1A", fontWeight: 700, textDecoration: "underline" }}
          >
            Let&apos;s discuss on WhatsApp →
          </a>
        </p>
      </div>

      <style>{`
        .portfolio-scroll {
          padding: 1rem 0.5rem;
        }
        @media (max-width: 768px) {
          .portfolio-scroll {
            padding: 1rem calc(50% - min(160px, 42.5vw));
          }
          .portfolio-nav-button {
            display: none !important;
          }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
