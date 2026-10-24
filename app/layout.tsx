import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scalixlabs.in"),
  title: {
    default: "Scalix Labs | Web Development & Custom Software Engineering Agency",
    template: "%s | Scalix Labs",
  },
  description:
    "Scalix Labs is a web development and custom software engineering agency. We build high-performance websites, SaaS platforms, and custom digital systems across EdTech, Real Estate, Co-Living, and modern businesses.",
  keywords: [
    "web development company",
    "custom software development",
    "Next.js development agency",
    "React development company",
    "real estate website development",
    "edtech platform development",
    "web application development",
    "SaaS development company",
    "hire web developers",
    "website design and development",
    "performance marketing agency",
    "lead generation agency",
    "Scalix Labs",
  ],
  authors: [{ name: "Scalix Labs", url: "https://www.scalixlabs.in" }],
  creator: "Scalix Labs",
  publisher: "Scalix Labs",
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
    locale: "en_US",
    url: "https://www.scalixlabs.in",
    siteName: "Scalix Labs",
    title: "Scalix Labs — Web Development & Custom Software Agency",
    description:
      "We build high-performance websites, custom web applications, and scalable digital growth systems for modern businesses.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Scalix Labs — Web Development & Custom Software Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalix Labs — Web Development & Custom Software Agency",
    description:
      "We build high-performance websites, custom web applications, and scalable digital growth systems for modern businesses.",
    site: "@scalixlabs",
    creator: "@scalixlabs",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.scalixlabs.in",
  },
  category: "technology",
};

// Schema.org JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scalix Labs",
  legalName: "Scalix Labs",
  url: "https://www.scalixlabs.in",
  logo: "https://www.scalixlabs.in/logo.png",
  description:
    "Scalix Labs is a web development and custom software engineering agency. We build high-performance, conversion-focused websites, custom web applications, SaaS platforms, and scalable digital growth systems using Next.js, React, Node.js, and AI-powered tools.",
  foundingDate: "2024",
  sameAs: [
    "https://www.linkedin.com/company/scalixlabs/",
    "https://www.youtube.com/@Scalix_Labs",
    "https://x.com/scalixlabs",
    "https://www.instagram.com/scalix_labs/",
    "https://www.facebook.com/ScalixLabs",
    "https://www.threads.com/@scalix_labs",
    "https://medium.com/@a.scalixlabs",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://www.scalixlabs.in/#contact",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  knowsAbout: [
    "Web Development",
    "Custom Software Development",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Performance Marketing",
    "SEO",
    "Lead Generation",
    "Real Estate Platforms",
    "EdTech Platforms",
    "Conversion Rate Optimization",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Scalix Labs",
  url: "https://www.scalixlabs.in",
  description: "Web development and custom software engineering agency",
  publisher: {
    "@type": "Organization",
    name: "Scalix Labs",
    url: "https://www.scalixlabs.in",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Scalix Labs Services",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Custom Web Development",
      description:
        "High-performance, conversion-focused websites built with Next.js, React, and modern frameworks. Engineered for speed, SEO, and revenue generation.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      serviceType: "Web Development",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Custom Software Development",
      description:
        "Bespoke web applications, SaaS platforms, CRM systems, and business tools. Full-stack development with React, Node.js, PostgreSQL, and cloud infrastructure.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      position: 3,
      name: "Performance Marketing",
      description:
        "Full-funnel performance advertising across Google, Meta, and LinkedIn designed to lower acquisition costs and scale ROI predictably.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      serviceType: "Digital Marketing",
    },
    {
      "@type": "Service",
      position: 4,
      name: "Lead Generation Systems",
      description:
        "Automated marketing funnels that capture high-intent prospects and nurture them into qualified sales appointments with CRM integration.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      serviceType: "Lead Generation",
    },
    {
      "@type": "Service",
      position: 5,
      name: "SEO & Organic Growth",
      description:
        "Technical SEO audits, on-page optimization, keyword mapping, content architecture strategy, and long-term authority building for sustainable organic traffic.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      serviceType: "Search Engine Optimization",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Scalix Labs offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scalix Labs offers custom web development using Next.js and React, custom software development for web apps and business systems, performance marketing across Google and Meta, automated lead generation systems, SEO and organic growth strategies, and creative content production.",
      },
    },
    {
      "@type": "Question",
      name: "Does Scalix Labs collaborate with clients and projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Scalix Labs is open to collaborate and work with founders, startups, and growing enterprises across EdTech, Real Estate, SaaS, Co-Living, E-Commerce, and modern service sectors.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Scalix Labs use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern web technologies including Next.js, React, TypeScript, Node.js, Tailwind CSS, Prisma ORM, PostgreSQL, and Vercel deployment.",
      },
    },
    {
      "@type": "Question",
      name: "What case studies has Scalix Labs delivered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scalix Labs has delivered multiple notable platforms including YUKTA VERSE (an AI & Tech learning platform with 150% growth), SLN Homes (a high-converting co-living and 1 BHK rental platform in Bengaluru with +240% inquiries), and V2 Properties (a luxury real estate discovery and investment portal).",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9HD3FCTDP2`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9HD3FCTDP2');
            `,
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
