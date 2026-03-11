"use client";

import { motion } from "framer-motion";
import { Zap, Layers, BarChart } from "lucide-react";

const pillars = [
    {
        title: "Performance-Driven",
        description: "Every campaign is engineered for ROAS. We eliminate vanity metrics and focus purely on revenue-generating actions.",
        icon: Zap,
    },
    {
        title: "System-Focused",
        description: "We don't just run ads. We build automated, scalable acquisition systems that work predictably month over month.",
        icon: Layers,
    },
    {
        title: "Built to Scale",
        description: "Our strategies are designed to absorb budget increases efficiently without sacrificing your unit economics.",
        icon: BarChart,
    },
];

export default function WhyUs() {
    return (
        <section id="about" className="py-24 relative bg-background border-y border-white/5 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                >
                    <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Why Scalix Labs</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-heading font-bold text-white mb-16"
                >
                    We don&apos;t guess. We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Engineer.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-10 rounded-3xl text-left relative overflow-hidden group hover:border-primary/30 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <pillar.icon className="w-32 h-32 text-white" />
                            </div>

                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-8 relative z-10">
                                <pillar.icon className="w-6 h-6 text-primary" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{pillar.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light relative z-10">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
