"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ArrowRight } from "lucide-react";

export default function LeadFormModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [source, setSource] = useState("Website Trigger");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        goal: ""
    });

    // Listen for custom event to open the form
    useEffect(() => {
        const handleOpen = (e: CustomEvent) => {
            if (e.detail) setSource(e.detail);
            setIsOpen(true);
            setIsSuccess(false);
        };
        window.addEventListener("open-lead-form", handleOpen as EventListener);
        return () => window.removeEventListener("open-lead-form", handleOpen as EventListener);
    }, []);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/leads', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Source: source,
                    Name: formData.name,
                    Email: formData.email,
                    Phone: formData.phone,
                    Company: formData.company,
                    goal: formData.goal
                })
            });

            if (!res.ok) throw new Error("Submission failed");

            setIsSuccess(true);
            setTimeout(() => {
                setIsOpen(false);
                setFormData({ name: "", email: "", phone: "", company: "", goal: "" });
            }, 8000);
        } catch (error) {
            console.error("Failed to submit lead", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => !isSubmitting && setIsOpen(false)}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg bg-[#0B1426] border border-white/10 rounded-2xl p-6 md:p-8 relative shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden"
                    >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                        <button
                            onClick={() => !isSubmitting && setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-6 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Book Your Strategy Call</h3>
                            <p className="text-gray-400 text-sm">
                                Interested in: <span className="text-primary font-medium">{source}</span>
                            </p>
                        </div>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 text-center relative z-10"
                            >
                                <div className="w-16 h-16 rounded-full bg-growth/20 text-growth flex items-center justify-center mx-auto mb-4 border border-growth/50">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Request Sent!</h4>
                                <p className="text-gray-400">
                                    Check your inbox to continue the conversation. Our team has been notified.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name *</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="Company Inc."
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email *</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone (WhatsApp) *</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="+91..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Main Goal / Problem *</label>
                                    <textarea
                                        required
                                        name="goal"
                                        value={formData.goal}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                        placeholder="What are you trying to achieve?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-4 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                                >
                                    {isSubmitting ? "Processing..." : "Submit Application"}
                                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-2">
                                    Your details are secure. We respect your privacy.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
