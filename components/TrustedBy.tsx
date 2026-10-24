"use client";

import { motion } from "framer-motion";
import { Globe, Building2, Briefcase, GraduationCap, Heart, ShoppingBag, Building, Laptop } from "lucide-react";

const industries = [
    { name: "SaaS & Software", icon: Laptop },
    { name: "E-Commerce", icon: ShoppingBag },
    { name: "EdTech", icon: GraduationCap },
    { name: "Healthcare", icon: Heart },
    { name: "Real Estate", icon: Building },
    { name: "B2B Services", icon: Briefcase },
    { name: "Corporate Gifting", icon: Building2 },
    { name: "Startups", icon: Globe },
];

const regions = [
    "🇺🇸 United States",
    "🇬🇧 United Kingdom",
    "🇦🇪 UAE",
    "🇮🇳 India",
    "🇪🇺 Europe",
    "🇦🇺 Australia",
    "🇸🇬 Singapore",
    "🇨🇦 Canada",
];

export default function TrustedBy() {
    return (
        <section className="py-16 relative overflow-hidden bg-background border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Industries */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8"
                    >
                        Trusted by businesses across industries & geographies
                    </motion.p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/20 transition-colors group"
                            >
                                <industry.icon className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                                <span className="text-xs font-medium text-gray-400 text-center">{industry.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Global Regions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {regions.map((region, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-sm text-gray-400 font-medium"
                            >
                                {region}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
