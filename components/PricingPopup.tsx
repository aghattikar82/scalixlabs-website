"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Star } from "lucide-react";

interface PricingPopupProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPlan: string;
}

export default function PricingPopup({ isOpen, onClose, selectedPlan }: PricingPopupProps) {
    const [step, setStep] = useState(1);
    const isPremium = selectedPlan === "Premium";
    const totalSteps = 3;

    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        website: "",
        industry: "",
        revenue: "",
        runningAds: "",
        adBudget: "",
        goal: "",
        timeline: "",
        description: "",
        // Premium specific fields
        marketingSpend: "",
        expectedRevenueGoal: "",
        teamSize: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            setIsSubmitted(true);

            try {
                const res = await fetch('/api/leads', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        Source: `Pricing Form - ${selectedPlan} Plan`,
                        Name: formData.fullName,
                        Email: formData.email,
                        Phone: formData.phone,
                        Company: formData.companyName,
                        website: formData.website,
                        industry: formData.industry,
                        revenue: formData.revenue,
                        runningAds: formData.runningAds,
                        adBudget: formData.adBudget,
                        goal: formData.goal,
                        timeline: formData.timeline,
                        description: formData.description,
                        marketingSpend: formData.marketingSpend,
                        expectedRevenueGoal: formData.expectedRevenueGoal,
                        teamSize: formData.teamSize
                    })
                });

                if (!res.ok) throw new Error("Submission failed");
            } catch (err) {
                console.error("Failed to submit pricing form lead", err);
            }

            setTimeout(() => {
                onClose();
                setTimeout(() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData({
                        fullName: "", companyName: "", email: "", phone: "", website: "", industry: "", revenue: "",
                        runningAds: "", adBudget: "", goal: "", timeline: "", description: "",
                        marketingSpend: "", expectedRevenueGoal: "", teamSize: ""
                    });
                }, 500);
            }, 8000);
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                    >
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white mb-4">Basic Details</h3>
                        </div>
                        <div className="space-y-2 relative">
                            <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full peer glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-transparent" placeholder="Full Name" />
                            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background px-1 peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-background peer-valid:px-1 pointer-events-none">Full Name</label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 relative">
                                <input required name="companyName" value={formData.companyName} onChange={handleChange} type="text" className="w-full peer glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-transparent" placeholder="Company Name" />
                                <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background px-1 peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-background peer-valid:px-1 pointer-events-none">Company Name</label>
                            </div>
                            <div className="space-y-2 relative">
                                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full peer glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-transparent" placeholder="Phone Number" />
                                <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background px-1 peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-background peer-valid:px-1 pointer-events-none">Phone Number</label>
                            </div>
                        </div>
                        <div className="space-y-2 relative">
                            <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full peer glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-transparent" placeholder="Email" />
                            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background px-1 peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-background peer-valid:px-1 pointer-events-none">Work Email</label>
                        </div>
                        <div className="space-y-2 relative">
                            <input name="website" value={formData.website} onChange={handleChange} type="url" className="w-full peer glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-transparent" placeholder="Website URL (Optional)" />
                            <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background px-1 peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-background peer-valid:px-1 pointer-events-none">Website URL (Optional)</label>
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Business Information</h3>
                        <div className="space-y-2">
                            <select required name="industry" value={formData.industry} onChange={handleChange} className={`w-full glass-input bg-white/5 p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none ${formData.industry ? 'text-white border-primary/30' : 'text-gray-400'}`}>
                                <option value="" disabled className="bg-background text-gray-400">What industry are you in?</option>
                                <option value="SaaS" className="bg-background text-white">Software / SaaS</option>
                                <option value="EdTech" className="bg-background text-white">EdTech</option>
                                <option value="Real Estate" className="bg-background text-white">Real Estate</option>
                                <option value="Healthcare" className="bg-background text-white">Healthcare</option>
                                <option value="E-commerce" className="bg-background text-white">E-commerce</option>
                                <option value="Other" className="bg-background text-white">Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <select required name="revenue" value={formData.revenue} onChange={handleChange} className={`w-full glass-input bg-white/5 p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none ${formData.revenue ? 'text-white border-primary/30' : 'text-gray-400'}`}>
                                <option value="" disabled className="bg-background text-gray-400">Monthly Revenue Range</option>
                                <option value="Below ₹5L" className="bg-background text-white">Below ₹5L</option>
                                <option value="₹5L–₹20L" className="bg-background text-white">₹5L–₹20L</option>
                                <option value="₹20L+" className="bg-background text-white">₹20L+</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <select required name="runningAds" value={formData.runningAds} onChange={handleChange} className={`w-full glass-input bg-white/5 p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none ${formData.runningAds ? 'text-white border-primary/30' : 'text-gray-400'}`}>
                                <option value="" disabled className="bg-background text-gray-400">Are you currently running ads?</option>
                                <option value="Yes" className="bg-background text-white">Yes, we are running ads</option>
                                <option value="No" className="bg-background text-white">No, not yet</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <select required name="adBudget" value={formData.adBudget} onChange={handleChange} className={`w-full glass-input bg-white/5 p-4 rounded-xl focus:outline-none focus:border-primary/50 transition-colors appearance-none ${formData.adBudget ? 'text-white border-primary/30' : 'text-gray-400'}`}>
                                <option value="" disabled className="bg-background text-gray-400">Estimated Monthly Ad Budget?</option>
                                <option value="< ₹20k" className="bg-background text-white">&lt; ₹20k</option>
                                <option value="₹20k–₹50k" className="bg-background text-white">₹20k–₹50k</option>
                                <option value="₹50k–₹1L" className="bg-background text-white">₹50k–₹1L</option>
                                <option value="₹1L+" className="bg-background text-white">₹1L+</option>
                            </select>
                        </div>
                        {isPremium && (
                            <div className="space-y-2 pt-4 border-t border-white/5">
                                <p className="text-sm font-medium text-growth mb-3 flex items-center gap-2"><Star className="w-4 h-4" /> Premium Qualification</p>
                                <input required name="marketingSpend" value={formData.marketingSpend} onChange={handleChange} type="text" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-growth/50 focus:ring-1 focus:ring-growth/50 transition-all mb-4" placeholder="Total Monthly Marketing Spend" />
                                <input required name="teamSize" value={formData.teamSize} onChange={handleChange} type="text" className="w-full glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-growth/50 focus:ring-1 focus:ring-growth/50 transition-all" placeholder="Current Marketing Team Size" />
                            </div>
                        )}
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Goals & Commitment</h3>
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-300">What is your main goal?</label>
                            <div className="grid grid-cols-2 gap-3">
                                {["More leads", "Reduce cost per lead", "Scale revenue", "Brand growth"].map((goal) => (
                                    <div
                                        key={goal}
                                        onClick={() => setFormData({ ...formData, goal })}
                                        className={`p-3 rounded-xl border cursor-pointer transition-all text-sm text-center ${formData.goal === goal ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"}`}
                                    >
                                        {goal}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-300">When are you planning to start?</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {["Immediately", "Within 30 days", "Just exploring"].map((timeline) => (
                                    <div
                                        key={timeline}
                                        onClick={() => setFormData({ ...formData, timeline })}
                                        className={`p-3 rounded-xl border cursor-pointer transition-all text-sm text-center ${formData.timeline === timeline ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"}`}
                                    >
                                        {timeline}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {isPremium && (
                            <div className="space-y-2 relative pt-2">
                                <input required name="expectedRevenueGoal" value={formData.expectedRevenueGoal} onChange={handleChange} type="text" className="w-full peer glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-growth/50 focus:ring-1 focus:ring-growth/50 transition-all placeholder-transparent" placeholder="Expected Revenue Goal (12mo)" />
                                <label className="absolute left-4 top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:-top-0.5 peer-focus:text-xs peer-focus:text-growth peer-focus:bg-background px-1 peer-valid:-top-0.5 peer-valid:text-xs peer-valid:bg-background peer-valid:px-1 pointer-events-none">Expected Revenue Goal (12mo)</label>
                            </div>
                        )}

                        <div className="space-y-2 relative pt-2">
                            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full peer glass-input bg-white/5 text-white p-4 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all min-h-[100px] resize-none placeholder-transparent" placeholder="Tell us about your growth goals" />
                            <label className="absolute left-4 top-6 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:-top-0.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background px-1 peer-valid:-top-0.5 peer-valid:text-xs peer-valid:bg-background peer-valid:px-1 pointer-events-none">Tell us about your growth goals</label>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-6">
                            Our team will review your details and schedule a strategy session if we believe we’re a strong fit.
                        </p>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-xl bg-[#0B1426] border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${isPremium ? 'border-growth/30 shadow-[0_0_50px_rgba(16,185,129,0.15)]' : 'border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]'}`}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0">
                            <div>
                                <h2 className="text-2xl font-bold text-white font-heading">
                                    {isPremium ? 'Partner Application' : 'Growth Qualification'}
                                </h2>
                                <p className="text-sm text-gray-400">
                                    {selectedPlan} Plan • Step {step} of {totalSteps}
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-white/5">
                            <motion.div
                                className={`h-full ${isPremium ? 'bg-growth shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]'}`}
                                initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
                                animate={{ width: `${(step / totalSteps) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Form Body */}
                        <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4 font-heading">Application Received</h3>
                                    <p className="text-gray-400 text-lg max-w-sm mx-auto">
                                        Thank you. Our growth team will review your application and contact you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col min-h-[350px]">
                                    <AnimatePresence mode="wait">
                                        {renderStepContent()}
                                    </AnimatePresence>

                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between shrink-0">
                                        {step > 1 ? (
                                            <button
                                                type="button"
                                                onClick={() => setStep(step - 1)}
                                                className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                            >
                                                Back
                                            </button>
                                        ) : (
                                            <div /> // Spacer
                                        )}

                                        <button
                                            type="submit"
                                            className={`group flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:scale-[1.02] ${isPremium
                                                ? 'bg-growth hover:bg-growth/90 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                                                : 'bg-primary hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]'
                                                }`}
                                        >
                                            {step === totalSteps ? "Request Strategy Call" : "Next Step"}
                                            {step !== totalSteps && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
