"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "CEO, TechFlow Solutions",
        content: "Scalix Labs transformed our customer acquisition. We saw a 3x increase in leads within the first 60 days.",
        avatar: "RS"
    },
    {
        name: "Priya Patel",
        role: "Founder, LuxeLife eCommerce",
        content: "The ROI we've seen on our Meta ads is phenomenal. Their AI-powered creative production is a game changer.",
        avatar: "PP"
    },
    {
        name: "Amit Kumar",
        role: "Marketing Director, EduPro",
        content: "Predictable, scalable, and professional. They aren't just an agency; they are strategic partners.",
        avatar: "AK"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Success Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Entrepreneurs</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                            
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 italic text-lg leading-relaxed relative z-10">
                                &quot;{t.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
