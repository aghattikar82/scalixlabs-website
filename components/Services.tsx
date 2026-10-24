"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, Monitor, TrendingUp, Share2, Sparkles, X, CheckCircle2, ArrowRight, Code2 } from "lucide-react";

const services = [
    {
        id: "conversion-websites",
        title: "Web Development",
        subtitle: "High-Performance Websites Engineered for Revenue",
        shortDesc: "Conversion-focused websites built with Next.js, React, and modern frameworks. Designed to rank, load fast, and convert visitors into customers.",
        description: "Your website should convert — not just look good. We build performance-driven websites designed to capture attention instantly, guide visitors toward action, reduce drop-off, and improve conversion rates. Every site is built with SEO-ready architecture and blazing-fast performance.",
        icon: Monitor,
        color: "from-purple-500 to-fuchsia-600",
        textColor: "text-purple-400",
        implementTitle: "What's included:",
        implementItems: [
            "Custom UI/UX Design & Conversion Strategy",
            "Next.js / React Development",
            "Mobile-First Responsive Architecture",
            "High-Speed Performance Optimization",
            "SEO-Ready Structure & Schema Markup",
            "Lead Capture & CRM Integration",
            "Analytics & Event Tracking Setup",
            "Deployment on Global CDN (Vercel/AWS)"
        ],
        focusTitle: "Result:",
        focusItems: [],
        closingLine: "Every page has a purpose. Every element supports growth."
    },
    {
        id: "custom-software",
        title: "Custom Software Development",
        subtitle: "Bespoke Web Applications & SaaS Platforms",
        shortDesc: "Full-stack custom web applications, SaaS platforms, CRM systems, admin dashboards, and enterprise tools — built from scratch for your specific business needs.",
        description: "Off-the-shelf software doesn't fit every business. We design and develop custom web applications tailored to your exact requirements — from SaaS platforms and CRM systems to internal tools and complex dashboards. Built with modern, scalable architecture.",
        icon: Code2,
        color: "from-cyan-400 to-blue-600",
        textColor: "text-cyan-400",
        implementTitle: "What we build:",
        implementItems: [
            "SaaS Platforms & Multi-tenant Applications",
            "Custom CRM & ERP Systems",
            "Admin Dashboards & Internal Tools",
            "API Development & Third-party Integrations",
            "Real-time Applications (WebSockets)",
            "Database Architecture (PostgreSQL, MongoDB)",
            "Cloud Deployment (AWS, Vercel, GCP)",
            "Ongoing Maintenance & Support"
        ],
        focusTitle: "Tech Stack:",
        focusItems: [
            "React, Next.js, TypeScript",
            "Node.js, Express, tRPC",
            "PostgreSQL, Prisma, Redis",
            "Vercel, AWS, Docker"
        ],
        closingLine: "Your business logic, our engineering. Purpose-built software that scales."
    },
    {
        id: "performance-marketing",
        title: "Performance Marketing",
        subtitle: "Full-Funnel Advertising Built for Predictable Growth",
        shortDesc: "Data-driven ad campaigns across Google, Meta, and LinkedIn designed to lower acquisition costs and scale ROI.",
        description: "We don't run random ads. We build structured acquisition systems across Google, Meta, and LinkedIn designed to generate measurable revenue impact. Every campaign is optimized for maximum return.",
        icon: Target,
        color: "from-blue-500 to-indigo-600",
        textColor: "text-blue-400",
        implementTitle: "What we implement:",
        implementItems: [
            "Search, Display & YouTube Campaigns (Google)",
            "Meta Conversion & Retargeting Campaigns",
            "LinkedIn B2B Lead Generation Campaigns",
            "Audience Research & Segmentation",
            "Creative Testing Framework",
            "Conversion Tracking (GA4, Pixels, Events)",
            "Budget Scaling Strategy"
        ],
        focusTitle: "Our focus:",
        focusItems: [
            "Lower cost per acquisition.",
            "Higher conversion rate.",
            "Sustainable scaling."
        ],
        closingLine: "We operate on data, not guesswork."
    },
    {
        id: "lead-generation",
        title: "Lead Generation Systems",
        subtitle: "From Click to Qualified Sales Conversation",
        shortDesc: "Automated funnels that capture high-intent prospects and nurture them into qualified sales appointments.",
        description: "Generating leads is easy. Generating qualified leads is strategy. We design automated lead capture systems that filter low-quality prospects, capture high-intent inquiries, trigger structured follow-ups, and increase appointment booking rates.",
        icon: Users,
        color: "from-emerald-400 to-emerald-600",
        textColor: "text-emerald-400",
        implementTitle: "What we build:",
        implementItems: [
            "Funnel Architecture",
            "Landing Page Strategy",
            "Lead Scoring Framework",
            "WhatsApp & Email Sequences",
            "CRM Flow Design",
            "Retargeting Logic"
        ],
        focusTitle: "Result:",
        focusItems: [
            "More qualified conversations.",
            "Less wasted ad spend."
        ],
        closingLine: ""
    },
    {
        id: "seo-growth",
        title: "SEO & Organic Growth",
        subtitle: "Long-Term Authority & Sustainable Traffic",
        shortDesc: "Dominate search results with technical SEO and content architectures that build sustainable inbound traffic.",
        description: "Paid ads drive speed. SEO builds long-term dominance. We design search visibility systems that position your brand in front of high-intent audiences consistently — including optimization for AI search engines and LLM recommendations.",
        icon: TrendingUp,
        color: "from-orange-400 to-red-500",
        textColor: "text-orange-400",
        implementTitle: "Our approach:",
        implementItems: [
            "Technical SEO Audits",
            "On-Page Optimization",
            "Keyword Mapping & Content Strategy",
            "Schema Markup & Structured Data",
            "AI/LLM Search Optimization (GEO)",
            "Authority Building Framework",
            "Performance Tracking & Analytics"
        ],
        focusTitle: "Goal:",
        focusItems: [
            "Increase qualified organic traffic.",
            "Get recommended by AI search engines.",
            "Reduce long-term dependency on paid ads."
        ],
        closingLine: ""
    },
    {
        id: "social-media",
        title: "Social Media & Content",
        subtitle: "Strategic Brand Building Across Digital Platforms",
        shortDesc: "Build authority and engagement with data-driven social strategies, AI-powered content production, and consistent brand presence.",
        description: "Your social presence should work as a growth engine. We create strategic content systems that build authority, drive engagement, and generate inbound leads across LinkedIn, Instagram, YouTube, and more.",
        icon: Share2,
        color: "from-pink-500 to-rose-600",
        textColor: "text-pink-400",
        implementTitle: "What's included:",
        implementItems: [
            "Content Calendar & Strategy",
            "AI-Powered Creative Production",
            "LinkedIn Thought Leadership Content",
            "Instagram & YouTube Strategy",
            "Community Engagement Framework",
            "Performance Analytics & Optimization"
        ],
        focusTitle: "Outcome:",
        focusItems: [
            "Consistent brand presence.",
            "Authority in your niche.",
            "Inbound lead generation."
        ],
        closingLine: ""
    }
];

export default function Services() {
    const [activeService, setActiveService] = useState<string | null>(null);

    useEffect(() => {
        if (activeService) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [activeService]);

    const activeData = activeService ? services.find(s => s.id === activeService) : null;

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-growth/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Build & Scale</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        From custom websites and software to performance marketing and organic growth — we provide end-to-end digital solutions for businesses worldwide.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setActiveService(service.id)}
                            className="group relative glass-card rounded-2xl p-8 cursor-pointer hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.05] blur-[30px] rounded-full pointer-events-none group-hover:opacity-[0.1] transition-opacity`} />

                            <div className="relative z-10 flex-grow">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-20 flex items-center justify-center mb-6 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                                    <service.icon className="w-6 h-6 text-white relative z-10" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.shortDesc}</p>
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary relative z-10 group-hover:gap-3 transition-all">
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {activeData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveService(null)}
                        className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-20 md:pt-24 bg-background/80 backdrop-blur-sm overflow-y-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-[#0B1426] border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] mb-20"
                        >
                            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${activeData.color} opacity-10 blur-[60px] rounded-full pointer-events-none`} />

                            <button
                                onClick={() => setActiveService(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-8 relative z-10">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activeData.color} bg-opacity-20 flex items-center justify-center mb-6 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-20`} />
                                    <activeData.icon className="w-6 h-6 text-white relative z-10" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight">
                                    {activeData.title}
                                </h2>
                                <p className={`text-base font-semibold ${activeData.textColor} mb-4`}>
                                    {activeData.subtitle}
                                </p>
                                <p className="text-gray-300 text-base leading-relaxed mb-6">
                                    {activeData.description}
                                </p>
                            </div>

                            {/* Top CTA */}
                            <div className="mb-8 relative z-10">
                                <button
                                    onClick={() => {
                                        setActiveService(null);
                                        window.dispatchEvent(new CustomEvent("open-lead-form", { detail: activeData.title }));
                                    }}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 text-sm text-center"
                                >
                                    Get a Free Quote
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Dynamic Sections */}
                            <div className="space-y-6 relative z-10">
                                {activeData.implementItems.length > 0 && (
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                                            {activeData.implementTitle}
                                        </h4>
                                        <ul className="space-y-3">
                                            {activeData.implementItems.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${activeData.textColor}`} />
                                                    <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeData.focusItems.length > 0 && (
                                    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                                            {activeData.focusTitle}
                                        </h4>
                                        <ul className="space-y-2">
                                            {activeData.focusItems.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-current ${activeData.textColor}`} />
                                                    <span className="text-white text-sm font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeData.closingLine && (
                                    <div className="border-l-4 border-primary/50 pl-4 py-1">
                                        <p className="text-base text-white font-medium italic">
                                            &quot;{activeData.closingLine}&quot;
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
