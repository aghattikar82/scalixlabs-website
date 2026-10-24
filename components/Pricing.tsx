"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Rocket, Star } from "lucide-react";
import { useState } from "react";
import PricingPopup from "./PricingPopup";

const plans = [
    {
        name: "Basic",
        subtitle: "Growth Starter",
        description: "For Businesses Starting Digital Growth",
        priceUSD: "$199",
        priceINR: "₹17,999",
        period: "/ month",
        features: [
            "Meta Ads Campaign Management",
            "Google Ads (Search Campaign Setup & Optimization)",
            "1 Conversion-Focused Landing Page",
            "WhatsApp & Lead Form Integration",
            "Email Marketing Campaign Setup (Basic Automation)",
            "2–3 High-Converting Ad Creatives / month",
            "Monthly Performance Report",
            "Basic Conversion Tracking Setup"
        ],
        goal: "Launch campaigns, generate qualified leads, and validate acquisition channels.",
        cta: "Get Started",
        icon: Zap,
        color: "text-blue-400",
        bgAccent: "bg-blue-500/10",
        border: "border-white/10 hover:border-blue-500/30",
        popular: false,
        headerGlow: ""
    },
    {
        name: "Pro",
        subtitle: "Performance Scale",
        description: "For Businesses Ready to Scale",
        priceUSD: "$349",
        priceINR: "₹29,999",
        period: "/ month",
        features: [
            "Full Meta Ads Strategy & Optimization",
            "Google Ads (Search + Display + Retargeting)",
            "Retargeting Campaign Setup",
            "Conversion-Optimized Landing Pages",
            "Lead Funnel Setup & Optimization",
            "Email Marketing Campaigns & Sequences",
            "WhatsApp Campaign Automation",
            "6–8 Premium Ad Creatives / month",
            "Basic SEO Optimization",
            "Daily Social Media Content (Design + Captions)"
        ],
        goal: "Increase lead volume, improve cost efficiency, and build scalable acquisition systems.",
        cta: "Start Scaling",
        icon: Star,
        color: "text-primary",
        bgAccent: "bg-primary/20",
        border: "border-primary/50 shadow-[0_0_30px_rgba(37,99,235,0.2)] md:scale-105 z-10",
        popular: true,
        headerGlow: "shadow-[0_0_20px_rgba(37,99,235,0.4)]"
    },
    {
        name: "Premium",
        subtitle: "Growth Partner",
        description: "For Brands Seeking Predictable Growth Systems",
        priceUSD: "$449",
        priceINR: "₹39,999",
        period: "/ month",
        features: [
            "Complete Performance Mktg. (Meta + Google + YouTube)",
            "Full Funnel Strategy & Implementation",
            "Website Optimization & CRO",
            "SEO Growth Strategy (On-page + Planning)",
            "AI-Powered Creative Asset Production",
            "Automation Strategy Planning (n8n & AI Agents)",
            "Dedicated Growth Strategist",
            "Weekly Performance Review & Optimization",
            "Advanced Email Marketing Campaigns",
            "WhatsApp Campaign Automation",
            "Daily Social Media Content Creation"
        ],
        goal: "Build predictable, scalable lead acquisition and revenue growth systems.",
        cta: "Book Growth Strategy Call",
        icon: Rocket,
        color: "text-growth",
        bgAccent: "bg-growth/10",
        border: "border-white/10 hover:border-growth/40",
        popular: false,
        headerGlow: ""
    }
];

export default function Pricing() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");

    const handleOpenPopup = (planName: string) => {
        setSelectedPlan(planName);
        setIsPopupOpen(true);
    };

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">Transparent Pricing</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Simple, Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Pricing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Growth plans designed for businesses at every stage. No hidden fees. Custom software projects quoted separately.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative rounded-3xl p-8 bg-white/[0.02] backdrop-blur-md border ${plan.border} transition-all duration-300 flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-3 rounded-lg ${plan.bgAccent}`}>
                                        <plan.icon className={`w-6 h-6 ${plan.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                                        <p className={`text-sm font-medium ${plan.color}`}>{plan.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>

                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-heading font-extrabold text-white">{plan.priceUSD}</span>
                                    <span className="text-gray-500 font-medium">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{plan.priceINR} / month for India</p>
                            </div>

                            <div className="flex-grow">
                                <p className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">What&apos;s Included:</p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? "text-primary" : "text-gray-500"}`} />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-8">
                                    <p className="text-xs font-semibold text-white/70 uppercase mb-2">Goal:</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">{plan.goal}</p>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <button
                                    onClick={() => handleOpenPopup(plan.name)}
                                    className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center transition-all ${plan.popular
                                        ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-[1.02]"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                                        }`}
                                >
                                    {plan.cta} {plan.popular && <Star className="w-4 h-4 ml-2 fill-current" />}
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Custom Software CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 glass-card rounded-2xl p-8 text-center"
                >
                    <h3 className="text-xl font-bold text-white mb-2">Need Custom Software or a SaaS Platform?</h3>
                    <p className="text-gray-400 mb-6">Custom web applications, SaaS platforms, CRM systems, and enterprise tools are quoted based on scope and complexity.</p>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Custom Software Inquiry" }))}
                        className="px-8 py-3 bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all"
                    >
                        Request a Custom Quote →
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-center"
                >
                    <p className="text-gray-500 text-sm px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] inline-block">
                        <strong className="text-gray-400">Note:</strong> Ad spend is separate from management fees. Prices may vary based on project scope. All prices in USD; INR pricing available for India-based clients.
                    </p>
                </motion.div>

            </div>

            <PricingPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                selectedPlan={selectedPlan}
            />
        </section>
    );
}
