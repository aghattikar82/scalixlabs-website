"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, TrendingUp, Users, DollarSign } from "lucide-react";

export default function Calculator() {
    const [budget, setBudget] = useState(50000);

    // Growth formulas (simplified for aesthetic purposes)
    const estimatedLeads = Math.floor(budget / 500); // Assuming ₹500 CPL
    const estCustomers = Math.floor(estimatedLeads * 0.15); // 15% conversion
    const avgOrderValue = 15000;
    const estimatedRevenue = estCustomers * avgOrderValue;
    const roi = Math.floor(((estimatedRevenue - budget) / budget) * 100);

    return (
        <section className="py-24 relative overflow-hidden bg-[#050A15]">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-16">

                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <CalcIcon className="w-4 h-4 text-growth" />
                        <span className="text-sm font-medium text-growth uppercase tracking-wider">Growth Simulator</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Calculate Your Revenue Potential
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10"
                    >
                        Stop guessing your returns. Our AI-driven model projects exactly what happens when you plug into the Scalix engine.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <label className="text-white font-medium text-lg">Monthly Ad Budget</label>
                            <span className="text-2xl font-bold text-primary font-heading">
                                ₹{budget.toLocaleString("en-IN")}
                            </span>
                        </div>

                        <input
                            type="range"
                            min="10000"
                            max="1000000"
                            step="10000"
                            value={budget}
                            onChange={(e) => setBudget(Number(e.target.value))}
                            className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-3">
                            <span>₹10K</span>
                            <span>₹10L+</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border-t border-t-white/10 bg-gradient-to-b from-white/5 to-transparent">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                            <Users className="w-5 h-5 text-blue-400" />
                        </div>
                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wide">Est. Monthly Leads</p>
                        <h3 className="text-4xl font-bold text-white font-heading">{estimatedLeads.toLocaleString()}</h3>
                    </div>

                    <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border-t border-t-white/10 bg-gradient-to-b from-white/5 to-transparent">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                            <DollarSign className="w-5 h-5 text-emerald-400" />
                        </div>
                        <p className="text-gray-400 text-sm mb-1 uppercase tracking-wide">Est. Revenue</p>
                        <h3 className="text-4xl font-bold text-white font-heading">₹{estimatedRevenue.toLocaleString("en-IN")}</h3>
                    </div>

                    <div className="glass-card p-6 rounded-2xl sm:col-span-2 flex flex-row items-center justify-between border-t border-t-white/10 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent border-primary/30">
                        <div>
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                <TrendingUp className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-primary text-sm font-semibold uppercase tracking-wide">Projected ROI</p>
                        </div>
                        <h3 className="text-6xl font-black text-white font-heading">{roi}%</h3>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
