"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const stats = [
    { label: "Ad Spend Managed", value: "₹5Cr+", icon: Zap, color: "text-yellow-400" },
    { label: "Leads Generated", value: "50k+", icon: Users, color: "text-primary" },
    { label: "Avg. ROAS", value: "4.8x", icon: TrendingUp, color: "text-growth" },
    { label: "Industries Served", value: "12+", icon: Target, color: "text-purple-400" },
];

export default function Stats() {
    return (
        <section className="py-20 relative bg-[#020617]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-primary/30 transition-colors">
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-2 tracking-tighter">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest leading-tight">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
