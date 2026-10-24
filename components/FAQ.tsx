"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What services does Scalix Labs offer?",
        answer: "Scalix Labs offers comprehensive digital services including custom web development (using Next.js, React, and modern frameworks), custom software development (SaaS platforms, CRM systems, enterprise tools), performance marketing (Google, Meta, LinkedIn Ads), automated lead generation systems, SEO & organic growth strategies, and social media content production. We serve clients globally across the US, UK, UAE, Europe, Australia, and India."
    },
    {
        question: "Does Scalix Labs work with international clients outside India?",
        answer: "Absolutely! Scalix Labs actively serves clients worldwide. We have experience working with businesses across the United States, United Kingdom, United Arab Emirates, Europe, Australia, Singapore, and Canada. Our team operates across time zones and uses modern collaboration tools to provide seamless communication and project management for international engagements."
    },
    {
        question: "What technologies do you use for web and software development?",
        answer: "We specialize in modern, production-grade technologies: Next.js and React for frontend development, TypeScript for type-safe code, Node.js and Express for backend APIs, Tailwind CSS for styling, Prisma ORM with PostgreSQL for databases, Vercel and AWS for deployment, and Docker for containerization. We also integrate AI/ML capabilities and workflow automation tools like n8n."
    },
    {
        question: "How much does it cost to build a website or custom software?",
        answer: "Our managed growth plans start from $199/month (₹17,999/month) for basic campaigns and landing pages. Pro plans with full marketing strategy start at $349/month (₹29,999/month). Premium growth partner packages start at $449/month (₹39,999/month) with dedicated strategists. Custom software development projects (SaaS, CRM, enterprise tools) are quoted based on scope and complexity — reach out for a free consultation and estimate."
    },
    {
        question: "Can you build a SaaS platform or custom web application from scratch?",
        answer: "Yes, that's one of our core strengths. We design and develop complete SaaS platforms, multi-tenant applications, CRM systems, admin dashboards, internal business tools, and complex web applications from the ground up. We handle everything from architecture planning and UI/UX design to full-stack development, API integrations, database design, cloud deployment, and ongoing maintenance."
    },
    {
        question: "What results have you achieved for clients?",
        answer: "Scalix Labs has generated over 4,500+ qualified leads for clients, managed 12+ growth campaigns, and achieved an average client growth rate of 150%. Notable projects include building the Yukta Verse digital learning platform from scratch — a complete web platform with custom-designed conversion architecture, SEO-optimized structure, and integrated lead capture systems that went live at yuktaverse.com."
    },
    {
        question: "How do you ensure website performance and SEO?",
        answer: "Every website we build follows performance-first principles: server-side rendering with Next.js for fast initial loads, optimized images and lazy loading, minimal JavaScript bundles, global CDN deployment via Vercel's edge network, comprehensive Schema.org structured data, semantic HTML, proper meta tags, XML sitemaps, and technical SEO best practices. Our sites consistently achieve 95+ Lighthouse performance scores."
    },
    {
        question: "What is your development process like?",
        answer: "Our process follows four phases: (1) ATTRACT — we research your market and plan the traffic strategy; (2) CAPTURE — we design and build conversion-optimized digital assets; (3) NURTURE — we implement follow-up systems and engagement automation; (4) SCALE — we analyze data, optimize performance, and scale what works. Every project includes regular check-ins, transparent reporting, and iterative improvements."
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
                        Everything you need to know about working with Scalix Labs.
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
