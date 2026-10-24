"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What services does Scalix Labs offer?",
        answer: "Scalix Labs offers comprehensive digital engineering and growth services including custom web development (using Next.js, React, and modern full-stack frameworks), custom software development (SaaS platforms, CRM systems, web applications), performance marketing (Google & Meta Ads), automated lead generation systems, and SEO & organic search growth. We collaborate with founders, startups, and established enterprises."
    },
    {
        question: "What industries do you have experience in?",
        answer: "We have proven case studies and technical expertise across EdTech (e.g., YUKTA VERSE), Real Estate & Co-Living (e.g., SLN Homes Bengaluru, V2 Properties luxury residences), SaaS & tech platforms, E-Commerce, and B2B services."
    },
    {
        question: "What technologies do you use for web and software development?",
        answer: "We specialize in modern, production-grade technologies: Next.js and React for frontend architecture, TypeScript for rock-solid codebases, Node.js for backend APIs, Tailwind CSS for styling, Prisma ORM with PostgreSQL for databases, and Vercel/AWS for global CDN deployment. We also integrate automation tools and AI workflows."
    },
    {
        question: "Can you build custom platforms, portals, or real estate websites?",
        answer: "Yes, absolutely. We design and develop custom portals, listing showcases, co-living booking engines, SaaS platforms, and internal business tools from scratch. We handle UI/UX design, mobile responsiveness, fast database queries, and direct lead capture integrations like WhatsApp and CRM webhooks."
    },
    {
        question: "What results have your platforms achieved for clients?",
        answer: "Our platforms are engineered for tangible business outcomes: YUKTA VERSE achieved an initial 150% growth surge in learner engagement, SLN Homes generated a +240% increase in inbound room inquiries and tour bookings with sub-second page speeds, and V2 Properties established an elite luxury real estate portal that captures high-intent investor prospects."
    },
    {
        question: "How do we get started with Scalix Labs?",
        answer: "You can book a free strategy call or fill out the contact form. We will review your goals, examine your current setup, and provide an actionable growth roadmap along with transparent scope and milestones."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <HelpCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQs</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Questions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Everything you need to know about partnering and engineering with Scalix Labs.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-2xl overflow-hidden hover:border-primary/20 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <h3 className="text-base md:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180 text-primary" : ""
                                    }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
