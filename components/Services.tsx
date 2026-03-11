"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, Monitor, TrendingUp, Share2, Sparkles, X, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
    {
        id: "performance-marketing",
        title: "Performance Marketing",
        subtitle: "Full-Funnel Performance Advertising Built for Predictable Growth",
        shortDesc: "Data-driven ad campaigns across Google, Meta, and LinkedIn designed to lower acquisition costs and scale ROI.",
        description: "We don’t run random ads. We build structured acquisition systems across Google, Meta, and LinkedIn designed to generate measurable revenue impact.",
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
        id: "conversion-websites",
        title: "Conversion-Focused Websites",
        subtitle: "Web Infrastructure Engineered for Revenue",
        shortDesc: "High-performance web experiences engineered specifically to turn clicks into revenue and capture attention.",
        description: "Your website should convert — not just look good. We build performance-driven websites designed to capture attention instantly, guide visitors toward action, reduce drop-off, and improve conversion rates.",
        icon: Monitor,
        color: "from-purple-500 to-fuchsia-600",
        textColor: "text-purple-400",
        implementTitle: "What’s included:",
        implementItems: [
            "UX & Conversion Strategy",
            "Landing Page Optimization",
            "High-Speed Performance Architecture",
            "Lead Capture Integration",
            "Analytics & Event Tracking",
            "Funnel-Based Page Structure"
        ],
        focusTitle: "Result:",
        focusItems: [],
        closingLine: "Every page has a purpose. Every element supports growth."
    },
    {
        id: "seo-growth",
        title: "SEO & Organic Growth",
        subtitle: "Long-Term Authority & Sustainable Traffic",
        shortDesc: "Dominate search results with technical SEO and content architectures that build sustainable inbound traffic.",
        description: "Paid ads drive speed. SEO builds long-term dominance. We design search visibility systems that position your brand in front of high-intent audiences consistently.",
        icon: TrendingUp,
        color: "from-orange-400 to-red-500",
        textColor: "text-orange-400",
        implementTitle: "Our approach:",
        implementItems: [
            "Technical SEO Audits",
            "On-Page Optimization",
            "Keyword Mapping",
            "Content Architecture Strategy",
            "Authority Building Framework",
            "Performance Tracking"
        ],
        focusTitle: "Goal:",
        focusItems: [
            "Increase qualified organic traffic.",
            "Reduce long-term dependency on paid ads."
        ],
        closingLine: ""
    },
    {
        id: "social-growth",
        title: "Social Media Growth",
        subtitle: "Authority Systems, Not Random Posting",
        shortDesc: "Strategic content systems that build authority, engage your target market, and grow your brand equity.",
        description: "Social media should build trust and market positioning — not vanity metrics. We create structured content systems that position you as industry leader, engage your target audience, support paid campaigns, and drive inbound inquiries.",
        icon: Share2,
        color: "from-cyan-400 to-blue-500",
        textColor: "text-cyan-400",
        implementTitle: "Deliverables:",
        implementItems: [
            "Content Strategy Framework",
            "Visual Identity Alignment",
            "Engagement Optimization",
            "Growth Analysis",
            "Paid + Organic Integration"
        ],
        focusTitle: "Result:",
        focusItems: [],
        closingLine: "Brand authority compounds over time."
    },
    {
        id: "ai-creative",
        title: "AI-Powered Creative",
        subtitle: "High-Performance Creative Production Powered by AI",
        shortDesc: "Leverage cutting-edge AI to test hundreds of ad creatives and find winning variations faster than humanly possible.",
        description: "Creative is the biggest driver of ad performance. We use advanced AI tools to rapidly produce, test, and optimize:",
        icon: Sparkles,
        color: "from-yellow-400 to-orange-500",
        textColor: "text-yellow-400",
        implementTitle: "What we produce:",
        implementItems: [
            "AI-Generated Video Ads",
            "Short-Form Social Media Reels",
            "Static & Carousel Ad Creatives",
            "High-Converting Ad Copy Variations",
            "Hook & Angle Testing",
            "Social Media Content Designs"
        ],
        focusTitle: "🎯 What This Means for Your Business:",
        focusItems: [
            "Produce multiple variations fast",
            "Test different messaging angles",
            "Identify winning creatives quickly",
            "Reduce creative fatigue",
            "Improve CTR & conversion rates"
        ],
        closingLine: "Creative decisions are made based on data."
    }
];

export default function Services() {
    const [activeService, setActiveService] = useState<string | null>(null);

    // Prevent body scroll when panel is open
    useEffect(() => {
        if (activeService) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [activeService]);

    const activeData = activeService ? services.find(s => s.id === activeService) : null;

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-[#0A101C]">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Capabilities Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-growth">Scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        We deploy full-funnel marketing systems that act as an extension of your growth team.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group relative h-full cursor-pointer"
                            onClick={() => setActiveService(service.id)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl z-0" />
                            <div className="relative z-10 p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all h-full flex flex-col backdrop-blur-sm overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.05] before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">

                                <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                                    <service.icon className="w-7 h-7 text-white relative z-10" />
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{service.shortDesc}</p>

                                <div className="mt-auto pt-8">
                                    <div className="inline-flex items-center text-sm font-medium text-primary group-hover:text-white transition-colors gap-2">
                                        Learn more
                                        <motion.span
                                            className="group-hover:translate-x-1 transition-transform"
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Centered Modal Popup */}
            <AnimatePresence>
                {activeData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveService(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-[#0B1426] border border-white/10 rounded-2xl p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Header Gradient Decor */}
                            <div className={`absolute top-0 right-0 w-full h-48 bg-gradient-to-br ${activeData.color} opacity-10 pointer-events-none blur-3xl`} />

                            <button
                                onClick={() => setActiveService(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mt-2 mb-8 relative z-10">
                                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/10 relative overflow-hidden`}>
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
                                    Schedule Growth Consultation
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
