"use client";

import React from "react";
import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogUrl?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Ashok Kumar - Full Stack Developer | SaaS Builder",
  description = "Ashok Kumar is a Full Stack Developer and SaaS Builder from India, focused on building scalable web applications, real-time platforms, and AI-powered digital products.",
  keywords = [
    "Ashok Kumar",
    "Full Stack Developer",
    "Web Developer India",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "SaaS Developer",
    "JavaScript Developer",
    "Next.js Developer",
  ],
  ogUrl = "https://ashoksamota0.github.io",
  canonical = "https://ashoksamota0.github.io",
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords.join(", ")} />

      <meta name="robots" content="index, follow" />

      <meta name="googlebot" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={ogUrl} />

      <meta property="og:type" content="website" />

      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:creator" content="@ashoksamota0" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Additional SEO */}
      <meta name="author" content="Ashok Kumar" />

      <meta name="publisher" content="Ashok Kumar" />

      <meta name="application-name" content="Ashok Kumar Portfolio" />

      <meta name="theme-color" content="#0a0a0a" />
    </Head>
  );
};

export default SEO;
