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
    default: "Scalix Labs | Web Development & Custom Software Agency — Global",
    template: "%s | Scalix Labs",
  },
  description:
    "Scalix Labs is a global web development and custom software engineering agency. We build high-performance websites, SaaS platforms, and custom web applications using Next.js, React & modern tech. Serving clients in the US, UK, UAE, Europe & India.",
  keywords: [
    "web development company",
    "custom software development",
    "Next.js development agency",
    "React development company",
    "web application development",
    "SaaS development company",
    "hire web developers",
    "custom web application development",
    "software development agency",
    "website design and development",
    "performance marketing agency",
    "lead generation agency",
    "conversion-focused web development",
    "global web development agency",
    "full-stack development company",
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
      "We build high-performance websites, custom web applications, and scalable digital growth systems for businesses worldwide. Next.js, React, Node.js experts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scalix Labs — Global Web Development & Custom Software Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalix Labs — Web Development & Custom Software Agency",
    description:
      "We build high-performance websites, custom web applications, and scalable digital growth systems for businesses worldwide.",
    site: "@scalixlabs",
    creator: "@scalixlabs",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.scalixlabs.in",
    languages: {
      "en-US": "https://www.scalixlabs.in",
      "en-GB": "https://www.scalixlabs.in",
      "en-IN": "https://www.scalixlabs.in",
    },
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
    "Scalix Labs is a global web development and custom software engineering agency. We build high-performance, conversion-focused websites, custom web applications, SaaS platforms, and scalable digital growth systems using Next.js, React, Node.js, and AI-powered tools. Serving clients in the US, UK, UAE, Europe, and India.",
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
      areaServed: ["US", "GB", "AE", "IN", "CA", "AU", "DE", "SG"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Singapore" },
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
    "SaaS Development",
    "UI/UX Design",
    "Conversion Rate Optimization",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Scalix Labs",
  url: "https://www.scalixlabs.in",
  description: "Global web development and custom software engineering agency",
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
      areaServed: "Worldwide",
      serviceType: "Web Development",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Custom Software Development",
      description:
        "Bespoke web applications, SaaS platforms, CRM systems, and enterprise tools. Full-stack development with React, Node.js, PostgreSQL, and cloud infrastructure.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      areaServed: "Worldwide",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      position: 3,
      name: "Performance Marketing",
      description:
        "Full-funnel performance advertising across Google, Meta, and LinkedIn designed to lower acquisition costs and scale ROI predictably.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      areaServed: "Worldwide",
      serviceType: "Digital Marketing",
    },
    {
      "@type": "Service",
      position: 4,
      name: "Lead Generation Systems",
      description:
        "Automated marketing funnels that capture high-intent prospects and nurture them into qualified sales appointments with CRM integration.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      areaServed: "Worldwide",
      serviceType: "Lead Generation",
    },
    {
      "@type": "Service",
      position: 5,
      name: "SEO & Organic Growth",
      description:
        "Technical SEO audits, on-page optimization, keyword mapping, content architecture strategy, and long-term authority building for sustainable organic traffic.",
      provider: { "@type": "Organization", name: "Scalix Labs" },
      areaServed: "Worldwide",
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
        text: "Scalix Labs offers custom web development using Next.js and React, custom software development for SaaS and enterprise applications, performance marketing across Google and Meta, automated lead generation systems, SEO and organic growth strategies, and AI-powered creative content production. We serve clients globally including the US, UK, UAE, Europe, and India.",
      },
    },
    {
      "@type": "Question",
      name: "Does Scalix Labs work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Scalix Labs serves clients worldwide. We have worked with businesses across the United States, United Kingdom, United Arab Emirates, Europe, Australia, Singapore, and India. Our team operates across time zones to provide seamless collaboration for international projects.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Scalix Labs use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern web technologies including Next.js, React, TypeScript, Node.js, Tailwind CSS, Prisma ORM, PostgreSQL, and Vercel deployment. We also integrate AI/ML tools and automation platforms like n8n for workflow optimization.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to build a website with Scalix Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services start from $199/month (₹17,999/month) for basic growth campaigns. Pro plans start at $349/month (₹29,999/month) for full-scale marketing and development. Premium growth partner plans start at $449/month (₹39,999/month) with dedicated strategists. Custom software development projects are quoted based on scope and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can Scalix Labs build custom software and SaaS applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Scalix Labs specializes in building custom web applications, SaaS platforms, CRM systems, admin dashboards, and enterprise tools from scratch. We handle everything from UI/UX design to full-stack development, deployment, and ongoing maintenance using modern cloud-native architectures.",
      },
    },
    {
      "@type": "Question",
      name: "What results has Scalix Labs achieved for clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scalix Labs has generated over 4,500 leads for clients, managed 12+ growth campaigns, and achieved an average client growth rate of 150%. Our work includes building the Yukta Verse digital learning platform from scratch, which achieved high performance scores and integrated conversion-optimized architecture.",
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
