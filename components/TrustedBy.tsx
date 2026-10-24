"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, GraduationCap, Heart, ShoppingBag, Building, Laptop, Sparkles } from "lucide-react";

const industries = [
    { name: "EdTech & Learning", icon: GraduationCap },
    { name: "Real Estate & Co-Living", icon: Building },
    { name: "SaaS & Software", icon: Laptop },
    { name: "E-Commerce & D2C", icon: ShoppingBag },
    { name: "Healthcare & Wellness", icon: Heart },
    { name: "B2B Services", icon: Briefcase },
    { name: "Corporate Gifting", icon: Building2 },
    { name: "Modern Startups", icon: Sparkles },
];

export default function TrustedBy() {
    return (
        <section className="py-16 relative overflow-hidden bg-background border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-8">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3"
                    >
                        Engineering Digital Assets Across High-Growth Sectors
                    </motion.p>
                    <p className="text-xs text-gray-500 max-w-xl mx-auto">
                        Proven architecture delivering qualified leads, responsive design, and search visibility. Open to collaborate with innovative brands worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/20 transition-colors group"
                        >
                            <industry.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                            <span className="text-xs font-medium text-gray-300 text-center">{industry.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
