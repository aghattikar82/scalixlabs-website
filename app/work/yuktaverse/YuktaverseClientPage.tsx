"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    ArrowLeft,
    Globe,
    Sparkles,
    CheckCircle2,
    Layout,
    Target,
    Compass,
    MessageSquare,
    Monitor,
    Briefcase,
    Award,
    ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormModal from "@/components/LeadFormModal";

const capabilities = [
    {
        icon: Layout,
        title: "1. Website Architecture",
        description: "Structured the website around the learner journey and client business requirements.",
        color: "text-blue-400"
    },
    {
        icon: Compass,
        title: "2. Program Discovery",
        description: "Created clear program sections allowing visitors to explore different learning opportunities.",
        color: "text-cyan-400"
    },
    {
        icon: Target,
        title: "3. Conversion-Focused CTAs",
        description: "Integrated clear actions such as Explore Programs, Book Free Consultation, Enroll Now, and WhatsApp.",
        color: "text-growth"
    },
    {
        icon: MessageSquare,
        title: "4. Lead Capture Pathways",
        description: "Created structured enquiry and consultation pathways so interested visitors can easily take the next step.",
        color: "text-purple-400"
    },
    {
        icon: Briefcase,
        title: "5. Career Support Experience",
        description: "Presented career-support offerings such as placement assistance, resume support, mock interviews and mentoring.",
        color: "text-amber-400"
    },
    {
        icon: Award,
        title: "6. Mentor & Trust Sections",
        description: "Created sections that communicate mentors, industry connections and trust-building information.",
        color: "text-emerald-400"
    },
    {
        icon: Monitor,
        title: "7. Responsive Design",
        description: "Designed the experience to work seamlessly across desktop, tablet, and mobile devices.",
        color: "text-indigo-400"
    }
];

const learnerJourney = [
    { step: "01", label: "DISCOVER", desc: "Instantly understand YUKTA VERSE's mission & AI learning focus" },
    { step: "02", label: "EXPLORE PROGRAMS", desc: "Browse curated tech & career-oriented learning tracks" },
    { step: "03", label: "UNDERSTAND THE OFFERING", desc: "Review curriculum breakdown, skills gained & project experience" },
    { step: "04", label: "BUILD TRUST", desc: "Explore mentor expertise, placement assistance & industry connections" },
    { step: "05", label: "BOOK A CONSULTATION", desc: "Select direct consultation pathways or submit custom queries" },
    { step: "06", label: "TAKE THE NEXT STEP", desc: "Connect via WhatsApp or enroll directly into target cohort" }
];

const highlights = [
    {
        number: "01",
        title: "Business-Focused",
        desc: "Built directly around the client's actual business requirements and target learner persona."
    },
    {
        number: "02",
        title: "Conversion-Ready",
        desc: "Equipped with clear, high-intent pathways for visitors to enquire and take action."
    },
    {
        number: "03",
        title: "Scalable Foundation",
        desc: "Architected to support future digital marketing, SEO content, and performance ad campaigns."
    },
    {
        number: "04",
        title: "Responsive Experience",
        desc: "Engineered for optimal speed and visual clarity across mobile, tablet, and desktop viewports."
    }
];

export default function YuktaverseClientPage() {
    const handleOpenContact = () => {
        window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Case Study - Yuktaverse" }));
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white relative">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-[#070E1E] border-b border-white/5">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />
                <div className="absolute top-1/3 right-10 w-96 h-96 bg-growth/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-4xl">
                        {/* Small label */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                                CASE STUDY / WEBSITE DEVELOPMENT
                            </span>
                        </motion.div>

                        {/* Main headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight"
                        >
                            Building a Digital Learning Platform From the Ground Up
                        </motion.h1>

                        {/* Supporting text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light"
                        >
                            Scalix Labs designed and developed a complete digital experience for YUKTA VERSE, an AI and technology-focused learning platform designed to help learners discover programs, explore career opportunities and connect with the organization.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="https://yuktaverse.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-base transition-all flex items-center gap-3 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-[1.02]"
                            >
                                View Live Website
                                <ArrowUpRight className="w-5 h-5" />
                            </a>

                            <Link
                                href="/#work"
                                className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold text-base transition-all flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Our Work
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROJECT OVERVIEW GRID */}
            <section className="py-12 bg-[#091122] border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Client</span>
                            <span className="text-sm font-bold text-white">YUKTA VERSE</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Industry</span>
                            <span className="text-sm font-bold text-white">EdTech / AI Learning</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Service</span>
                            <span className="text-sm font-bold text-white">Website Design & Dev</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Project Type</span>
                            <span className="text-sm font-bold text-white">Full Website Build</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Status</span>
                            <span className="text-sm font-bold text-growth flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-growth animate-pulse" />
                                Live
                            </span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Website URL</span>
                            <a
                                href="https://yuktaverse.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-cyan-400 hover:underline flex items-center gap-1"
                            >
                                yuktaverse.com
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE CHALLENGE SECTION */}
            <section className="py-20 relative bg-background border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5">
                            <div className="sticky top-28">
                                <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-3">
                                    01 / CONTEXT & NEED
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                    The Challenge
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    YUKTA VERSE needed a modern digital platform that could clearly communicate its technology and professional learning offerings while making it easy for prospective learners to discover programs, understand the available opportunities and take the next step.
                                </p>
                                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-gray-300 text-sm leading-relaxed italic">
                                    &quot;The website needed to go beyond simply presenting information—it needed to create a structured digital journey from initial discovery to active enquiry.&quot;
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Building a Structured Digital Journey
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-5 rounded-xl bg-[#091122] border border-white/5">
                                        <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary font-bold flex items-center justify-center mb-3 text-sm">
                                            1
                                        </div>
                                        <h4 className="text-white font-semibold mb-1">Discover</h4>
                                        <p className="text-xs text-gray-400">Capture visitor attention immediately with clear brand positioning in AI & Tech.</p>
                                    </div>

                                    <div className="p-5 rounded-xl bg-[#091122] border border-white/5">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center mb-3 text-sm">
                                            2
                                        </div>
                                        <h4 className="text-white font-semibold mb-1">Explore</h4>
                                        <p className="text-xs text-gray-400">Allow learners to seamlessly navigate courses, domains, and career tracks.</p>
                                    </div>

                                    <div className="p-5 rounded-xl bg-[#091122] border border-white/5">
                                        <div className="w-8 h-8 rounded-lg bg-growth/20 text-growth font-bold flex items-center justify-center mb-3 text-sm">
                                            3
                                        </div>
                                        <h4 className="text-white font-semibold mb-1">Understand</h4>
                                        <p className="text-xs text-gray-400">Present mentors, placement assistance, and curriculum highlights transparently.</p>
                                    </div>

                                    <div className="p-5 rounded-xl bg-[#091122] border border-white/5">
                                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center mb-3 text-sm">
                                            4
                                        </div>
                                        <h4 className="text-white font-semibold mb-1">Enquire</h4>
                                        <p className="text-xs text-gray-400">Direct learners toward consultation bookings, WhatsApp, and form submissions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE APPROACH SECTION */}
            <section className="py-20 relative bg-[#070D1B] border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs font-semibold text-growth uppercase tracking-widest block mb-3">
                            02 / STRATEGY & EXECUTION
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                            Our Approach
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Scalix Labs approached the project by understanding the client&apos;s business structure, audience and program offerings before translating those requirements into a complete digital experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Clear program discovery",
                            "Strong visual hierarchy",
                            "Easy navigation",
                            "Trust-building sections",
                            "Clear calls to action",
                            "Consultation & enquiry pathways",
                            "Responsive across devices",
                            "Foundation for future marketing"
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-4 hover:border-growth/40 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-growth shrink-0 mt-0.5" />
                                <span className="text-gray-200 font-medium text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT WE BUILT SECTION */}
            <section className="py-24 relative bg-background border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-3">
                            03 / CAPABILITIES DELIVERED
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            What We Built
                        </h2>
                        <p className="text-gray-400 text-lg">
                            A comprehensive overview of the key components and features engineered for the YUKTA VERSE digital platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((cap, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <cap.icon className={`w-6 h-6 ${cap.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY WEBSITE EXPERIENCE (LEARNER JOURNEY FLOW) */}
            <section className="py-24 relative bg-[#070E1E] border-b border-white/5 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest block mb-3">
                            04 / USER ARCHITECTURE
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Designed Around the Learner Journey
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Every section of the website was deliberately structured to guide visitors from passive curiosity to active engagement.
                        </p>
                    </div>

                    {/* Flow Diagram */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                        {learnerJourney.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-extrabold font-heading text-primary">
                                        {step.step}
                                    </span>
                                    {idx < learnerJourney.length - 1 && (
                                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors hidden lg:block" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">
                                        {step.label}
                                    </h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VISUAL SHOWCASE */}
            <section className="py-24 relative bg-background border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-semibold text-growth uppercase tracking-widest block mb-3">
                            05 / VISUAL SHOWCASE
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Platform Showcase
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Explore key views and functional sections designed for the YUKTA VERSE digital experience.
                        </p>
                    </div>

                    {/* Browser Mockups Grid */}
                    <div className="space-y-12">
                        {/* Showcase Item 1: Desktop Homepage */}
                        <div className="rounded-3xl bg-[#070D1B] border border-white/10 p-4 md:p-6 overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl mb-4 border border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="px-4 py-1 bg-black/50 rounded-lg text-xs font-mono text-gray-300 flex items-center gap-2">
                                    <Globe className="w-3.5 h-3.5 text-growth" />
                                    https://yuktaverse.com/ (Desktop Homepage)
                                </div>
                                <div className="text-xs text-gray-500 font-mono">LIVE EXPERIENCE</div>
                            </div>

                            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#0B1426] to-[#060B14] border border-white/5">
                                <div className="max-w-2xl mb-8">
                                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">Hero View</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                        Homepage & Brand Positioning
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Communicating YUKTA VERSE&apos;s value proposition immediately to visiting learners, featuring high-contrast messaging, clear CTAs, and modern visual hierarchy.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <span className="text-xs text-gray-400 block mb-1">Headline Focus</span>
                                        <span className="text-sm font-semibold text-white">AI & Tech Learning Programs</span>
                                    </div>
                                    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <span className="text-xs text-gray-400 block mb-1">Primary Action</span>
                                        <span className="text-sm font-semibold text-primary">Explore Programs & Consultation</span>
                                    </div>
                                    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                                        <span className="text-xs text-gray-400 block mb-1">Layout Type</span>
                                        <span className="text-sm font-semibold text-growth">Fully Responsive Web App</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Showcase Grid (Item 2 & 3 & 4) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Showcase 2: Program Discovery */}
                            <div className="rounded-3xl bg-[#070D1B] border border-white/10 p-6">
                                <div className="flex items-center gap-2 mb-4 px-2">
                                    <Compass className="w-5 h-5 text-cyan-400" />
                                    <span className="text-sm font-bold text-white">Program & Curriculum Discovery</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-[#091122] border border-white/5 space-y-3">
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        Structured domain catalog allowing learners to filter through Artificial Intelligence, Machine Learning, Data Science, and Software Engineering tracks effortlessly.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300">Curriculum Breakdown</span>
                                        <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300">Skill Outcomes</span>
                                        <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300">Enrollment Triggers</span>
                                    </div>
                                </div>
                            </div>

                            {/* Showcase 3: Career Support */}
                            <div className="rounded-3xl bg-[#070D1B] border border-white/10 p-6">
                                <div className="flex items-center gap-2 mb-4 px-2">
                                    <Briefcase className="w-5 h-5 text-amber-400" />
                                    <span className="text-sm font-bold text-white">Career Support & Placement Assistance</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-[#091122] border border-white/5 space-y-3">
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        Dedicated sections spotlighting resume building, 1-on-1 mock interviews, career mentorship, and industry partner connections for prospective students.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300">Placement Support</span>
                                        <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300">Mock Interviews</span>
                                        <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300">Mentorship</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECT HIGHLIGHTS */}
            <section className="py-24 relative bg-[#070E1E] border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl mb-16">
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-3">
                            06 / CORE VALUE
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Built as a Digital Foundation for Growth
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            The website was designed not only as a digital presence, but as a foundation that can support future marketing, lead generation, content and customer acquisition initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((card, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-3xl font-extrabold font-heading text-primary block mb-6">
                                        {card.number}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESULT SECTION */}
            <section className="py-20 relative bg-background border-b border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-r from-primary/10 via-white/[0.02] to-growth/10 border border-white/10">
                        <div className="max-w-3xl">
                            <span className="text-xs font-semibold text-growth uppercase tracking-widest block mb-3">
                                07 / SUMMARY
                            </span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                The Result
                            </h2>
                            <p className="text-xl text-gray-200 leading-relaxed font-light mb-6">
                                A complete, professional and conversion-ready digital platform built from the ground up for YUKTA VERSE.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                The website brings together program discovery, career-support information, trust-building content and enquiry pathways into one structured digital experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-24 relative bg-[#070D1B] overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Have a Digital Project in Mind?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Whether you need a new website, a stronger digital experience or a foundation for future growth, let&apos;s build something that works for your business.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                            onClick={handleOpenContact}
                            className="px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-base transition-all flex items-center gap-3 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:scale-[1.02]"
                        >
                            Start a Conversation
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <Link
                            href="/#services"
                            className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold text-base transition-all"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
            <LeadFormModal />
        </main>
    );
}
