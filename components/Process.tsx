"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnet, Crosshair, HeartHandshake, TrendingUp, X, CheckCircle2 } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "ATTRACT",
        subtitle: "(Traffic Layer)",
        description: "We attract high-intent audiences using performance-driven traffic systems.",
        icon: Magnet,
        color: "bg-blue-500",
        shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        goal: "Bring the right audience.",
        weUse: ["Meta Ads", "Google Ads", "YouTube Ads", "SEO", "Social Media"],
        outcome: "Qualified traffic, not random clicks.",
        positioningLine: "We attract high-intent audiences using performance-driven traffic systems."
    },
    {
        id: 2,
        title: "CAPTURE",
        subtitle: "(Conversion Layer)",
        description: "We convert attention into measurable leads using optimized conversion infrastructure.",
        icon: Crosshair,
        color: "bg-indigo-500",
        shadow: "shadow-[0_0_30px_rgba(99,102,241,0.3)]",
        goal: "Convert traffic into leads.",
        weUse: ["Conversion-focused landing pages", "Website optimization", "Lead forms", "WhatsApp integration", "Lead magnets"],
        outcome: "More leads per visitor.",
        positioningLine: "We convert attention into measurable leads using optimized conversion infrastructure."
    },
    {
        id: 3,
        title: "NURTURE",
        subtitle: "(Engagement Layer)",
        description: "We build follow-up systems that move prospects closer to purchase.",
        icon: HeartHandshake,
        color: "bg-emerald-500",
        shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
        goal: "Turn leads into serious prospects.",
        weUse: ["Email campaigns", "WhatsApp campaigns", "Retargeting ads", "Content sequences", "Follow-up automation"],
        outcome: "Higher conversion rate.",
        positioningLine: "We build follow-up systems that move prospects closer to purchase."
    },
    {
        id: 4,
        title: "SCALE",
        subtitle: "(Optimization Layer)",
        description: "We optimize and scale campaigns to create predictable revenue growth.",
        icon: TrendingUp,
        color: "bg-purple-500",
        shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
        goal: "Reduce cost and increase ROI.",
        weUse: ["Data analysis", "A/B testing", "Creative optimization", "Budget scaling", "Funnel improvements"],
        outcome: "Lower cost per lead. Higher return.",
        positioningLine: "We optimize and scale campaigns to create predictable revenue growth."
    },
];

export default function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const activeData = activeStep ? steps.find(s => s.id === activeStep) : null;

    return (
        <section id="process" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-growth/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-primary/20 bg-primary/5"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Proprietary Framework</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
                    >
                        The Scalix Growth Engine™
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400"
                    >
                        A proven 4-step framework designed to turn attention into predictable revenue.
                    </motion.p>
                </div>

                <div className="relative mb-16">
                    {/* Connecting Line Desktop */}
                    <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[2px] bg-white/5 z-0" />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ transformOrigin: "left" }}
                        className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 via-emerald-500 to-purple-500 z-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    />

                    {/* Connecting Line Mobile */}
                    <div className="md:hidden absolute top-0 left-[40px] w-[2px] h-full bg-white/5 z-0" />
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{ transformOrigin: "top" }}
                        className="md:hidden absolute top-0 left-[40px] w-[2px] h-full bg-gradient-to-b from-blue-500 via-indigo-500 via-emerald-500 to-purple-500 z-0"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.button
                                onClick={() => setActiveStep(step.id)}
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className={`flex md:flex-col items-center md:text-center text-left relative group w-full outline-none focus:outline-none`}
                            >
                                {/* Animated Number */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-black text-white/[0.02] z-0 select-none pointer-events-none transition-all duration-500 group-hover:-translate-y-4 group-hover:text-white/[0.04] hidden md:block">
                                    0{index + 1}
                                </div>

                                {/* Icon Circle */}
                                <div className={`w-20 h-20 shrink-0 md:mb-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center relative transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 z-10 ${step.shadow} group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]`}>
                                    <div className={`absolute inset-0 ${step.color} opacity-10 rounded-2xl blur-md group-hover:opacity-30 transition-opacity duration-500`} />
                                    <step.icon className={`w-8 h-8 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-500 group-hover:rotate-12`} />
                                </div>

                                {/* Content */}
                                <div className="ml-6 md:ml-0 z-10">
                                    <h3 className="text-2xl font-black text-white tracking-widest uppercase mb-1 drop-shadow-md">
                                        {step.title}
                                    </h3>
                                    <p className={`text-sm font-semibold mb-3 ${step.color.replace('bg-', 'text-')}`}>
                                        {step.subtitle}
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] mx-auto hidden md:block group-hover:text-gray-300 transition-colors">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Interactive Popup Modal */}
            <AnimatePresence>
                {activeData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveStep(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-[#0B1426] border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Modal Background Glow */}
                            <div className={`absolute top-0 right-0 w-64 h-64 ${activeData.color} opacity-[0.15] blur-[80px] rounded-full pointer-events-none`} />

                            <button
                                onClick={() => setActiveStep(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 ${activeData.shadow}`}>
                                    <activeData.icon className={`w-8 h-8 ${activeData.color.replace('bg-', 'text-')}`} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-white uppercase tracking-widest">{activeData.title}</h3>
                                    <span className={`text-sm font-bold uppercase ${activeData.color.replace('bg-', 'text-')}`}>
                                        {activeData.subtitle}
                                    </span>
                                </div>
                            </div>

                            <p className="text-lg text-white font-medium mb-8 leading-relaxed border-l-2 border-primary/50 pl-4 py-1">
                                &quot;{activeData.positioningLine}&quot;
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Goal</p>
                                    <p className="text-gray-300 font-medium bg-white/[0.03] p-4 rounded-xl border border-white/5">
                                        {activeData.goal}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Key Outcome</p>
                                    <p className="text-white font-bold bg-white/[0.03] p-4 rounded-xl border border-white/5 flex items-center gap-2">
                                        <CheckCircle2 className={`w-5 h-5 ${activeData.color.replace('bg-', 'text-')}`} />
                                        {activeData.outcome}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What we use</p>
                                <div className="flex flex-wrap gap-2">
                                    {activeData.weUse.map((item, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
