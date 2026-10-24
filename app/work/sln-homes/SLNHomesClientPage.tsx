"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowLeft,
    Sparkles,
    Layout,
    Target,
    Compass,
    MessageSquare,
    MapPin,
    Shield,
    ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormModal from "@/components/LeadFormModal";

const capabilities = [
    {
        icon: Layout,
        title: "1. Room Discovery & Layout Showcase",
        description: "Showcasing 2-sharing, 3-sharing, and independent 1 BHK units with high-res photo galleries, transparent pricing, and room specifications.",
        color: "text-emerald-400"
    },
    {
        icon: MapPin,
        title: "2. Hyperlocal Landmark Proximity",
        description: "Embedded transit proximity maps highlighting closeness to Silk Board Junction, Electronic City Expressway, and Bommanahalli Metro.",
        color: "text-blue-400"
    },
    {
        icon: MessageSquare,
        title: "3. Instant One-Tap WhatsApp Inquiry",
        description: "Pre-filled WhatsApp inquiries allowing prospects looking for PG accommodations in HSR Layout to chat with property managers directly.",
        color: "text-growth"
    },
    {
        icon: Shield,
        title: "4. Amenity Verification & Trust Badges",
        description: "Communicating essential modern living standards: high-speed Wi-Fi, daily housekeeping, 24/7 CCTV security, laundry, and power backup.",
        color: "text-cyan-400"
    },
    {
        icon: Target,
        title: "5. Mobile-First Booking Funnel",
        description: "Tailored for young IT professionals and students browsing on mobile devices with sub-second page loading speeds.",
        color: "text-purple-400"
    },
    {
        icon: Compass,
        title: "6. Local Search & SEO Architecture",
        description: "Structured technical SEO targeting primary keywords like 'PG in HSR Layout' and '1 BHK accommodation near Silk Board'.",
        color: "text-amber-400"
    }
];

export default function SLNHomesClientPage() {
    return (
        <main className="min-h-screen bg-[#070D1B] text-foreground selection:bg-emerald-500/30 selection:text-white relative">
            <Navbar />

            {/* Ambient Background Glows */}
            <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
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
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                                Case Study
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                                Co-Living & Accommodation Platform
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-growth/10 text-growth border border-growth/20 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-growth animate-pulse" />
                                Live Project
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
                            SLN HOMES — Engineering a High-Converting Rental Platform in Bengaluru
                        </h1>

                        <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">
                            Converting localized property searches into booked room tours and verified tenants.
                        </p>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl">
                            SLN Homes provides modern PG accommodations and 1 BHK residential living in HSR Layout, Sector 6, Bengaluru. Scalix Labs designed and engineered a streamlined, mobile-first web platform that connects working professionals with available units in seconds, eliminating friction in the rental discovery journey.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="https://www.slnhomes.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
                            >
                                Visit Live Website (slnhomes.in)
                                <ExternalLink className="w-4 h-4 ml-1" />
                            </a>

                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Case Study - SLN Homes" }))}
                                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2 hover:-translate-y-0.5"
                            >
                                Build a Similar Platform
                                <ArrowRight className="w-4 h-4 text-emerald-400" />
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
                            <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1">+240%</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Inbound Inquiries</div>
                        </div>
                        <div className="p-4 border-l border-white/5">
                            <div className="text-3xl md:text-4xl font-bold font-heading text-emerald-400 mb-1">99/100</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Mobile Performance</div>
                        </div>
                        <div className="p-4 border-l border-white/5">
                            <div className="text-3xl md:text-4xl font-bold font-heading text-cyan-400 mb-1">&lt; 1 Sec</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Load Time</div>
                        </div>
                        <div className="p-4 border-l border-white/5">
                            <div className="text-3xl md:text-4xl font-bold font-heading text-growth mb-1">100%</div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Responsive Design</div>
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
                            <h3 className="text-xl font-bold text-white mb-3">SLN Homes Bengaluru</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                A premier accommodation and residential provider located in Sector 6, HSR Layout, catering to Bangalore&apos;s flourishing IT workforce and university students.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">The Challenge</span>
                            <h3 className="text-xl font-bold text-white mb-3">High Drop-offs & Unfiltered Leads</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Most rental seekers make decisions quickly on mobile. The client needed clear room photos, pricing transparency, and instant booking contact channels without complex forms.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border-white/5">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">The Solution</span>
                            <h3 className="text-xl font-bold text-white mb-3">Conversion Engine with WhatsApp Integration</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We built a lightning-fast web experience with clean room cards, verified amenity tags, transit distance calculators, and direct WhatsApp tour scheduling.
                            </p>
                        </div>
                    </div>

                    {/* Features & Architecture Built */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
                                <Sparkles className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Engineered Architecture</span>
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
                                    className="glass-card p-8 rounded-2xl border-white/5 hover:border-emerald-500/30 transition-all group"
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
                    <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-emerald-500/30">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-primary/5 to-transparent pointer-events-none" />
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 relative z-10">
                            Ready to Turn Your Website Into a Lead Engine?
                        </h2>
                        <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base relative z-10">
                            Whether you operate in real estate, co-living, education, or tech services, we build platforms that attract, qualify, and convert visitors.
                        </p>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "SLN Homes Case Study CTA" }))}
                            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] relative z-10"
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
