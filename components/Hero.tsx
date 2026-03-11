"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-growth/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

                {/* Animated Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            initial={{
                                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                            }}
                            animate={{
                                y: [null, Math.random() * -500],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-primary/30"
                    >
                        <span className="w-2 h-2 rounded-full bg-growth animate-pulse" />
                        <span className="text-sm font-medium text-gray-300">The New Standard in Growth</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        style={{
                            transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`
                        }}
                        className="text-6xl md:text-8xl font-heading font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 drop-shadow-2xl"
                    >
                        Scalix Labs
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-gray-300 mb-8"
                    >
                        Performance. Growth. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Scale.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
                    >
                        We build scalable customer acquisition systems that turn attention into revenue. Stop guessing, start scaling.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Hero - Strategy Call" }))}
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] w-full sm:w-auto"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative flex items-center gap-2">
                                Book a Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Hero - Free Growth Audit" }))}
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold transition-all hover:bg-white/5 hover:border-white/40 w-full sm:w-auto"
                        >
                            <BarChart2 className="w-5 h-5 text-growth" />
                            Get Free Growth Audit
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
