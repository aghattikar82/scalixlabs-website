"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Target, Zap, ShieldCheck, Globe } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/leads', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Source: "Contact Form Audit Request",
                    Name: `${data.FirstName} ${data.LastName}`,
                    Email: data.Email,
                    Phone: data.Phone,
                    Company: data.Company,
                    Industry: data.Industry,
                    Budget: data.Budget,
                    Country: data.Country
                })
            });

            if (!res.ok) throw new Error("Submission failed");

            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();

            setTimeout(() => {
                setIsSuccess(false);
            }, 8000);
        } catch (err) {
            console.error("Failed to submit contact form lead", err);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-growth/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Build & Scale?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Whether you need a stunning website, custom software, or a complete growth system — let&apos;s talk. We work with businesses worldwide.
                        </p>

                        <div className="glass-card p-8 rounded-3xl border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />

                            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">What you get in the Free Consultation:</h3>

                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4 hover:translate-x-1 transition-transform">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-1">Growth Roadmap</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">A custom step-by-step plan to rapidly scale your revenue using our proven performance systems.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:translate-x-1 transition-transform">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Target className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-1">Technical Assessment</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">We review your current digital infrastructure and identify high-impact improvement opportunities.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:translate-x-1 transition-transform">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                                        <Zap className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-1">Project Scope & Estimate</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Get a clear breakdown of timelines, costs, and deliverables for your web development or software project.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 hover:translate-x-1 transition-transform">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                                        <ShieldCheck className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg mb-1">No Strings Attached</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Zero commitment. Get actionable insights whether you work with us or not.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {isSuccess ? (
                            <div className="glass-card rounded-3xl p-12 text-center">
                                <div className="w-20 h-20 rounded-full bg-growth/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                    <CheckCircle2 className="w-10 h-10 text-growth" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">We&apos;ll be in touch soon!</h3>
                                <p className="text-gray-400">Our team will review your request and reach out within 24 hours. Thank you for choosing Scalix Labs.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-cyan-400 to-growth" />

                                <div className="flex items-center gap-2 mb-2">
                                    <Globe className="w-5 h-5 text-primary" />
                                    <h3 className="text-xl font-bold text-white">Get Your Free Consultation</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">First Name</label>
                                        <input name="FirstName" type="text" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Last Name</label>
                                        <input name="LastName" type="text" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Work Email</label>
                                        <input name="Email" type="email" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@company.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Phone (with country code)</label>
                                        <input name="Phone" type="tel" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="+1 555 123 4567" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Company Name</label>
                                        <input name="Company" type="text" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your Company" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Country</label>
                                        <select name="Country" defaultValue="" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none" required>
                                            <option value="" disabled className="bg-[#0B1426] text-gray-400">Select Country</option>
                                            <option value="United States" className="bg-[#0B1426] text-white">United States</option>
                                            <option value="United Kingdom" className="bg-[#0B1426] text-white">United Kingdom</option>
                                            <option value="UAE" className="bg-[#0B1426] text-white">United Arab Emirates</option>
                                            <option value="Canada" className="bg-[#0B1426] text-white">Canada</option>
                                            <option value="Australia" className="bg-[#0B1426] text-white">Australia</option>
                                            <option value="Germany" className="bg-[#0B1426] text-white">Germany</option>
                                            <option value="Singapore" className="bg-[#0B1426] text-white">Singapore</option>
                                            <option value="India" className="bg-[#0B1426] text-white">India</option>
                                            <option value="Other" className="bg-[#0B1426] text-white">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Industry</label>
                                        <select name="Industry" defaultValue="" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none" required>
                                            <option value="" disabled className="bg-[#0B1426] text-gray-400">Select Industry</option>
                                            <option value="SaaS / Software" className="bg-[#0B1426] text-white">SaaS / Software</option>
                                            <option value="E-Commerce" className="bg-[#0B1426] text-white">E-Commerce</option>
                                            <option value="Real Estate" className="bg-[#0B1426] text-white">Real Estate</option>
                                            <option value="EdTech" className="bg-[#0B1426] text-white">EdTech</option>
                                            <option value="Healthcare" className="bg-[#0B1426] text-white">Healthcare</option>
                                            <option value="B2B Services" className="bg-[#0B1426] text-white">B2B Services</option>
                                            <option value="Startup" className="bg-[#0B1426] text-white">Startup</option>
                                            <option value="Other" className="bg-[#0B1426] text-white">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">What do you need?</label>
                                        <select name="Budget" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                                            <option className="bg-[#0B1426] text-white">Website Development</option>
                                            <option className="bg-[#0B1426] text-white">Custom Software / SaaS</option>
                                            <option className="bg-[#0B1426] text-white">Performance Marketing</option>
                                            <option className="bg-[#0B1426] text-white">SEO & Organic Growth</option>
                                            <option className="bg-[#0B1426] text-white">Complete Growth Package</option>
                                            <option className="bg-[#0B1426] text-white">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" disabled={isSubmitting} className="w-full py-4 mt-4 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                                    {isSubmitting ? "Processing..." : "Get Free Consultation"}
                                </button>

                                <p className="text-center text-xs text-gray-600">We respond within 24 hours. No spam, ever.</p>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
