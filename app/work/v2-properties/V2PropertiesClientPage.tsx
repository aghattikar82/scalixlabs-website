"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowLeft,
    Sparkles,
    Layout,
    Target,
    SlidersHorizontal,
    Shield,
    DollarSign,
    Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormModal from "@/components/LeadFormModal";

const capabilities = [
    {
        icon: Layout,
        title: "1. Premium Architectural UI/UX",
        description: "Designed a clean, luxury aesthetic reflecting high-ticket residences, villas, and commercial real estate properties across India.",
        color: "text-amber-400"
    },
    {
        icon: SlidersHorizontal,
        title: "2. Property Discovery & Category Filtering",
        description: "Built multi-dimensional filtering for luxury apartments, private villas, premium plots, and commercial development spaces.",
        color: "text-cyan-400"
    },
    {
        icon: Target,
        title: "3. Direct Developer Advisory Funnel",
        description: "Engineered transparent advisory touchpoints offering buyers direct developer pricing, verified floor plans, and expert consultation.",
        color: "text-growth"
    },
    {
        icon: Users,
        title: "4. High-Intent Investor Lead Capture",
        description: "Replaced generic web inquiries with qualified discovery steps that segment serious home buyers and commercial investors.",
        color: "text-purple-400"
    },
    {
        icon: DollarSign,
        title: "5. Pricing & Investment Transparency",
        description: "Clear investment bracket displays, payment milestones, and configuration breakdowns for top-tier residential communities.",
        color: "text-blue-400"
    },
    {
        icon: Shield,
        title: "6. Developer Trust & Verification",
        description: "Showcasing partnerships with India's leading real estate brands with clear compliance and approval information.",
        color: "text-emerald-400"
    }
];

export default function V2PropertiesClientPage() {
    return (
        <main className="min-h-screen bg-[#070D1B] text-foreground selection:bg-amber-500/30 selection:text-white relative">
            <Navbar />

            {/* Ambient Background Glows */}
            <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-96 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

            {/* Top Navigation Back link */}
            <div className="pt-28 pb-4 container mx-auto px-6 max-w-7xl relative z-10">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors glass-card px-4 py-2 rounded-full border border-white/5"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Selected Work
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pt-8 pb-20 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                                Case Study
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                                Luxury Real Estate Platform
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                Client Platform
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
                            V2 PROPERTIES — Luxury Real Estate Discovery & Investment Platform
                        </h1>

                        <p className="text-xl md:text-2xl text-amber-400 font-medium mb-6">
                            Positioning premium apartments, villas, and commercial real estate with bespoke buyer advisory funnels.
                        </p>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl">
                            V2 Properties provides premier luxury real estate advisory across key urban centres in India. Scalix Labs engineered an upscale web portal focused on high-ticket property presentation, clear architectural visualization, and seamless advisory appointment scheduling.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Case Study - V2 Properties" }))}
                                className="px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(217,119,6,0.3)] hover:shadow-[0_0_35px_rgba(217,119,6,0.5)] hover:-translate-y-0.5"
                            >
                                Build a Similar Real Estate Platform
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Metrics Bar */}
            <section className="py-12 border-y border-white/5 bg-white/[0.01] relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1">Luxury UI</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Aesthetic Standard</div>
                        </div>
                        <div className="p-4 border-l border-white/5">
                            <div className="text-3xl md:text-4xl font-bold font-heading text-amber-400 mb-1">High-Ticket</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Investor Lead Quality</div>
                        </div>
                        <div className="p-4 border-l border-white/5">
                            <div className="text-3xl md:text-4xl font-bold font-heading text-cyan-400 mb-1">&lt; 1.2s</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">High-Res Image Loads</div>
                        </div>
                        <div className="p-4 border-l border-white/5">
                            <div className="text-3xl md:text-4xl font-bold font-heading text-growth mb-1">Zero Clutter</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Conversion Architecture</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview / Scope Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">The Client</span>
                            <h3 className="text-xl font-bold text-white mb-3">V2 Properties</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                A high-end real estate consultancy specializing in curated villas, premium apartments, gated communities, and commercial property investments across India.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">The Challenge</span>
                            <h3 className="text-xl font-bold text-white mb-3">Elevating Brand Distinction</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Luxury buyers avoid crowded listings portals. The digital presence needed to feel exclusive, credible, and visually pristine while filtering out casual non-qualified inquiries.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">The Solution</span>
                            <h3 className="text-xl font-bold text-white mb-3">Curated Showcase & Consultation Flows</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We designed a bespoke platform highlighting master plans, lifestyle amenities, developer credibility, and confidential consultation booking.
                            </p>
                        </div>
                    </div>

                    {/* Features & Architecture Built */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
                                <Sparkles className="w-4 h-4 text-amber-400" />
                                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Engineered Architecture</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                                What Scalix Labs Built
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card p-8 rounded-2xl border-white/5 hover:border-amber-500/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <cap.icon className={`w-6 h-6 ${cap.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-amber-500/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-primary/5 to-transparent pointer-events-none" />
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 relative z-10">
                            Looking to Build a High-End Digital Real Estate Asset?
                        </h2>
                        <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base relative z-10">
                            From luxury property platforms to high-volume brokerage funnels, we engineer web platforms that match your standard.
                        </p>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "V2 Properties Case Study CTA" }))}
                            className="px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm transition-all shadow-[0_0_25px_rgba(217,119,6,0.4)] relative z-10"
                        >
                            Schedule a Strategy Consultation
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
            <LeadFormModal />
        </main>
    );
}
