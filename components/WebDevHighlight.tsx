"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Gauge, Shield, Layout, Sparkles } from "lucide-react";

const features = [
    {
        icon: Layout,
        title: "Modern UI/UX",
        desc: "High-end designs that capture attention instantly."
    },
    {
        icon: Gauge,
        title: "Ultra Fast",
        desc: "Optimized for speed to reduce bounce rates."
    },
    {
        icon: Cpu,
        title: "Next.js Tech Stack",
        desc: "Built with the same tech as the world's leading apps."
    },
    {
        icon: Shield,
        title: "Secure & Scalable",
        desc: "Infrastructure that grows with your business."
    }
];

export default function WebDevHighlight() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#020617]">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">New Capability</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Websites Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">High Conversion</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            We don&apos;t just build websites. We build <strong className="text-white">revenue engines</strong>. Most agencies focus on how it looks—we focus on how it sells.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-colors group"
                                >
                                    <f.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white font-semibold mb-1">{f.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Website Development" }))}
                                className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            >
                                Build My Revenue Engine
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Mockup decoration */}
                        <div className="relative z-10 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                           <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#0A101C] relative border border-white/5">
                                {/* Simulated code/design editor feel */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    <div className="ml-4 h-4 w-48 bg-white/10 rounded flex items-center justify-center text-[8px] text-gray-500">scalixlabs.in/your-project</div>
                                </div>
                                
                                <div className="p-8 mt-8 space-y-4">
                                    <div className="h-6 w-3/4 bg-primary/20 rounded animate-pulse" />
                                    <div className="h-32 w-full bg-white/5 rounded" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-20 bg-white/5 rounded" />
                                        <div className="h-20 bg-white/5 rounded" />
                                    </div>
                                    <div className="h-10 w-40 bg-primary/50 rounded" />
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Monitor className="w-32 h-32 text-white/5" />
                                </div>
                           </div>
                        </div>

                        {/* Floating labels */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 p-4 rounded-xl bg-primary/90 text-white font-bold shadow-xl z-20"
                        >
                            99.9% Performance
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-growth/90 text-white font-bold shadow-xl z-20"
                        >
                            SEO Ready
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
