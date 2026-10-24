"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Sparkles, ShieldCheck, ArrowUpRight, Building2, Home } from "lucide-react";

export default function WorkSection() {
    return (
        <section id="work" className="py-24 relative overflow-hidden bg-[#070D1B] border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-growth/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-growth" />
                        <span className="text-sm font-medium text-growth uppercase tracking-wider">Selected Client Work</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Proven Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-growth">Case Studies</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Explore how we design and engineer custom digital platforms from the ground up across EdTech, Real Estate, and Co-Living.
                    </motion.p>
                </div>

                <div className="space-y-16">
                    {/* CASE STUDY 1: YUKTA VERSE */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 md:p-12 overflow-hidden group hover:border-primary/40 transition-all duration-500 shadow-2xl"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Content Side (7 cols) */}
                            <div className="lg:col-span-7 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
                                            EdTech & Career
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                                            Full Stack Platform
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-growth/10 text-growth border border-growth/20 flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-growth animate-pulse" />
                                            Live Project
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                        YUKTA VERSE
                                    </h3>

                                    <p className="text-lg text-cyan-400 font-medium mb-4">
                                        Building an AI & Tech Learning Platform From the Ground Up
                                    </p>

                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        Scalix Labs designed and developed the entire digital ecosystem for YUKTA VERSE, an AI and technology learning platform. Engineered with intuitive program discovery, mentor trust showcases, interactive curriculum views, and streamlined consultation funnels that drive course enrollments.
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Industry</span>
                                            <span className="text-sm font-semibold text-white">EdTech / AI Learning</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Outcome</span>
                                            <span className="text-sm font-semibold text-growth">150% Inbound Surge</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Architecture</span>
                                            <span className="text-sm font-semibold text-white">Next.js + SEO Funnel</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                                    <Link
                                        href="/work/yuktaverse"
                                        className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                                    >
                                        Read Case Study
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>

                                    <a
                                        href="https://yuktaverse.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
                                    >
                                        Visit yuktaverse.com
                                        <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                                    </a>
                                </div>
                            </div>

                            {/* Mockup Preview Side (5 cols) */}
                            <div className="lg:col-span-5">
                                <div className="relative rounded-2xl bg-[#0B1426] border border-white/10 p-3 shadow-2xl overflow-hidden group-hover:border-primary/50 transition-colors">
                                    <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 rounded-xl mb-3 border border-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 rounded-md text-[11px] text-gray-400 font-mono">
                                            <Globe className="w-3 h-3 text-growth" />
                                            yuktaverse.com
                                        </div>
                                        <div className="w-4" />
                                    </div>

                                    <div className="relative rounded-lg bg-[#070E1E] p-6 border border-white/5 space-y-4 overflow-hidden min-h-[300px] flex flex-col justify-between">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-400 mb-3">
                                                AI & TECH LEARNING PLATFORM
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                                                Empowering Next-Gen Innovators & Tech Leaders
                                            </h4>
                                            <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                                                Industry-aligned tech programs, mentorship pathways, hands-on capstone projects, and placement acceleration.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 pt-2">
                                            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                                                <span className="text-[10px] text-gray-400 font-medium block">Tech Stack</span>
                                                <span className="text-xs font-semibold text-white">Next.js & React</span>
                                            </div>
                                            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                                                <span className="text-[10px] text-gray-400 font-medium block">Enrollment Rate</span>
                                                <span className="text-xs font-semibold text-growth">High Conversion</span>
                                            </div>
                                        </div>

                                        <div className="pt-2 flex items-center justify-between border-t border-white/5">
                                            <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Verified Case Study
                                            </span>
                                            <span className="text-[11px] text-cyan-400 font-medium">Live Showcase →</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CASE STUDY 2: SLN HOMES */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 md:p-12 overflow-hidden group hover:border-emerald-500/40 transition-all duration-500 shadow-2xl"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Content Side (7 cols) */}
                            <div className="lg:col-span-7 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                                            Real Estate & Co-Living
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                                            Local SEO & Booking Engine
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-growth/10 text-growth border border-growth/20 flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-growth animate-pulse" />
                                            Live Project
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-emerald-400 transition-colors">
                                        SLN HOMES
                                    </h3>

                                    <p className="text-lg text-emerald-400 font-medium mb-4">
                                        High-Converting Co-Living & 1 BHK Rental Platform in Bengaluru
                                    </p>

                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        Built a modern, mobile-first accommodation platform for SLN Homes in HSR Layout, Bengaluru. Developed to simplify property discovery for tech professionals and students with instant room tour bookings, clear 2/3 sharing configurations, amenity breakdowns, Google Maps transit proximity, and one-tap WhatsApp inquiry triggers.
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Industry</span>
                                            <span className="text-sm font-semibold text-white">Co-Living / Real Estate</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Impact</span>
                                            <span className="text-sm font-semibold text-growth">+240% Inquiries</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Feature</span>
                                            <span className="text-sm font-semibold text-white">Instant WhatsApp CTAs</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                                    <Link
                                        href="/work/sln-homes"
                                        className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                                    >
                                        Read Case Study
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>

                                    <a
                                        href="https://www.slnhomes.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
                                    >
                                        Visit slnhomes.in
                                        <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                                    </a>
                                </div>
                            </div>

                            {/* Mockup Preview Side (5 cols) */}
                            <div className="lg:col-span-5">
                                <div className="relative rounded-2xl bg-[#0B1426] border border-white/10 p-3 shadow-2xl overflow-hidden group-hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 rounded-xl mb-3 border border-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 rounded-md text-[11px] text-gray-400 font-mono">
                                            <Home className="w-3 h-3 text-emerald-400" />
                                            slnhomes.in
                                        </div>
                                        <div className="w-4" />
                                    </div>

                                    <div className="relative rounded-lg bg-[#070E1E] p-6 border border-white/5 space-y-4 overflow-hidden min-h-[300px] flex flex-col justify-between">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400 mb-3">
                                                PREMIUM CO-LIVING & 1 BHK
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                                                Modern Living Spaces in HSR Layout Sector 6
                                            </h4>
                                            <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                                                Dedicated beds, high-speed Wi-Fi, daily housekeeping, 24/7 CCTV, and quick access to Silk Board and Electronic City.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 pt-2">
                                            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                                                <span className="text-[10px] text-gray-400 font-medium block">Room Configs</span>
                                                <span className="text-xs font-semibold text-white">2 & 3 Sharing + 1 BHK</span>
                                            </div>
                                            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                                                <span className="text-[10px] text-gray-400 font-medium block">Lead Capture</span>
                                                <span className="text-xs font-semibold text-emerald-400">Direct WhatsApp</span>
                                            </div>
                                        </div>

                                        <div className="pt-2 flex items-center justify-between border-t border-white/5">
                                            <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Case Study
                                            </span>
                                            <span className="text-[11px] text-emerald-400 font-medium">Explore Details →</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CASE STUDY 3: V2 PROPERTIES */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 md:p-12 overflow-hidden group hover:border-amber-500/40 transition-all duration-500 shadow-2xl"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Content Side (7 cols) */}
                            <div className="lg:col-span-7 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                                            Luxury Real Estate
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                                            Web Application & Showcase
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                            Client Platform
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                                        V2 PROPERTIES
                                    </h3>

                                    <p className="text-lg text-amber-400 font-medium mb-4">
                                        Premium Luxury Real Estate Discovery & Developer Advisory Platform
                                    </p>

                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        Architected an upscale real estate portal for V2 Properties showcasing premium luxury apartments, villas, plots, and commercial developments across India. Features high-intent lead qualification filters, developer comparison, project gallery showcases, and direct consultation appointment scheduling.
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Industry</span>
                                            <span className="text-sm font-semibold text-white">Luxury Real Estate</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Inventory</span>
                                            <span className="text-sm font-semibold text-amber-400">Villas, Apts, Plots</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Deliverable</span>
                                            <span className="text-sm font-semibold text-white">Custom Web Platform</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                                    <Link
                                        href="/work/v2-properties"
                                        className="px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]"
                                    >
                                        Read Case Study
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>

                                    <span className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-xs font-mono">
                                        V2 Properties Consultancy
                                    </span>
                                </div>
                            </div>

                            {/* Mockup Preview Side (5 cols) */}
                            <div className="lg:col-span-5">
                                <div className="relative rounded-2xl bg-[#0B1426] border border-white/10 p-3 shadow-2xl overflow-hidden group-hover:border-amber-500/50 transition-colors">
                                    <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 rounded-xl mb-3 border border-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 rounded-md text-[11px] text-gray-400 font-mono">
                                            <Building2 className="w-3 h-3 text-amber-400" />
                                            V2 Properties Portal
                                        </div>
                                        <div className="w-4" />
                                    </div>

                                    <div className="relative rounded-lg bg-[#070E1E] p-6 border border-white/5 space-y-4 overflow-hidden min-h-[300px] flex flex-col justify-between">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-400 mb-3">
                                                PREMIUM REAL ESTATE CONSULTANCY
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                                                Exclusive Luxury Apartments & Villas
                                            </h4>
                                            <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                                                Direct developer pricing, curated floor plans, verified architectural standards, and transparent buyer advisory.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 pt-2">
                                            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                                                <span className="text-[10px] text-gray-400 font-medium block">Advisory Scope</span>
                                                <span className="text-xs font-semibold text-white">Residential & Commercial</span>
                                            </div>
                                            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                                                <span className="text-[10px] text-gray-400 font-medium block">Lead Type</span>
                                                <span className="text-xs font-semibold text-amber-400">High-Ticket Investors</span>
                                            </div>
                                        </div>

                                        <div className="pt-2 flex items-center justify-between border-t border-white/5">
                                            <span className="text-[11px] text-gray-400 flex items-center gap-1">
                                                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Verified Case Study
                                            </span>
                                            <span className="text-[11px] text-amber-400 font-medium">Explore Details →</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
