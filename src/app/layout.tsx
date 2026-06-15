import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const PHONE = "+917823082038";
const PHONE_DISPLAY = "+91 78230 82038";
const BUSINESS_NAME = "Hyperlink Tech Solutions";
const SITE_URL = "https://www.hyperlinktechsolutions.com";

export const metadata: Metadata = {
  title: "Hyperlink Tech Solutions | High-Converting Websites & Web Development in India",
  description:
    "We build fast, premium websites that generate leads & sales. Custom web development, UI/UX design, and Google Ads landing pages. Call now: " +
    PHONE_DISPLAY,
  keywords: [
    "web development India",
    "website developer",
    "custom website design",
    "landing page developer",
    "Next.js developer",
    "web development agency India",
    "affordable website development",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    title: "Hyperlink Tech Solutions | High-Converting Websites & Web Development",
    description:
      "Custom web development, landing pages & UI/UX design. Premium websites built with Next.js, React & modern tech. Fast delivery, guaranteed results.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperlink Tech Solutions | Web Development Agency",
    description: "We build websites that generate leads. Custom web development, UI/UX design & Google Ads landing pages.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "WebDesign"],
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: PHONE,
      priceRange: "₹₹",
      description:
        "Premium web development agency in India. We build fast, high-converting websites using Next.js, React & modern technologies. Custom web apps, landing pages & e-commerce solutions.",
      areaServed: [
        "India",
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Pune",
        "Hyderabad",
        "Chennai",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [`https://wa.me/${PHONE.replace("+", "")}`],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
