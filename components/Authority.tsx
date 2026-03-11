"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000; // ms
            const increment = value / (duration / 16); // 60fps

            const timer = setTimeout(() => {
                const counter = setInterval(() => {
                    start += increment;
                    if (start >= value) {
                        setCount(value);
                        clearInterval(counter);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, 16);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [isInView, value, delay]);

    return (
        <div ref={ref} className="text-4xl md:text-6xl font-heading font-bold text-white mb-2 tracking-tighter">
            {count.toLocaleString()}{suffix}
        </div>
    );
};

export default function Authority() {
    const metrics = [
        { label: "Leads Generated", value: 4500, suffix: "+" },
        { label: "Campaigns Managed", value: 12, suffix: "+" },
        { label: "Client Growth", value: 150, suffix: "%" },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0"
                        >
                            <Counter value={metric.value} suffix={metric.suffix} delay={index * 200} />
                            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
