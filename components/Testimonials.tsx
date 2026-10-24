"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Scalix Labs built our entire platform from scratch. The performance and conversion rates exceeded our expectations by 150%. Their technical expertise in Next.js is outstanding.",
        name: "Yukta Verse",
        role: "EdTech Platform",
        metric: "150% Growth",
        rating: 5,
    },
    {
        quote: "The team at Scalix Labs understands both technology and business. They didn't just build us a website — they built a revenue engine that consistently generates qualified leads.",
        name: "B2B Client",
        role: "SaaS Company",
        metric: "3x Lead Volume",
        rating: 5,
    },
    {
        quote: "Working with an international team was seamless. The communication, code quality, and delivery timelines were all exceptional. Highly recommend for any web development project.",
        name: "Corporate Client",
        role: "Enterprise Services",
        metric: "On-time Delivery",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#070D1B] border-t border-white/5">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-growth/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Client Success Stories</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Say</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-primary/20 transition-colors flex flex-col"
                        >
                            <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Quote className="w-20 h-20 text-white" />
                            </div>

                            <div className="flex items-center gap-1 mb-6">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-8 flex-grow relative z-10">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10">
                                <div>
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-growth/10 text-growth text-xs font-bold border border-growth/20">
                                    {testimonial.metric}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
