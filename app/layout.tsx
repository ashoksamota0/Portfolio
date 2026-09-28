import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LayoutShell from "./components/LayoutShell";
import HireMePopup from "./components/Popup";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ashok-portfolio-dev.vercel.app"),

  title: {
    default: "Ashok Kumar - Full Stack Developer",
    template: "%s | Ashok Kumar - Full Stack Developer",
  },

  description:
    "Ashok Kumar is a Full Stack Developer focused on building scalable web applications and AI-powered digital products using React, Node.js, Express.js, PostgreSQL, MongoDB, and modern web technologies.",

  keywords: [
    "Ashok Kumar",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Full Stack Developer India",
    "PostgreSQL Developer",
    "AI Web Developer",
    "SaaS Developer",
    "Portfolio Website",
  ],

  authors: [
    {
      name: "Ashok Kumar",
      url: "https://github.com/ashoksamota0",
    },
  ],

  creator: "Ashok Kumar",
  publisher: "Ashok Kumar",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Ashok Kumar - Full Stack Developer",
    description:
      "Full Stack Developer focused on building scalable web applications, real-time platforms, and AI-powered digital products.",
    siteName: "Ashok Kumar Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashok Kumar - Full Stack Developer",
    description:
      "Full Stack Developer focused on building scalable web applications and AI-powered digital products.",
  },

  alternates: {
    canonical: "/",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashok Kumar",
    url: "https://ashok-portfolio-dev.vercel.app",
    jobTitle: "Full Stack Developer",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "India",
    },

    sameAs: [
      "https://www.linkedin.com/in/ashok~kumar/",
      "https://github.com/ashoksamota0",
      "https://leetcode.com/u/ashok19samota/",
    ],

    description:
      "Full Stack Developer focused on building scalable web applications, real-time platforms, and AI-powered digital products.",

    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="bg-dark text-white font-poppins antialiased">
        <LayoutShell>{children}</LayoutShell>

        <Analytics />

        <HireMePopup />

        <SpeedInsights />
      </body>
    </html>
  );
}
