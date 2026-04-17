"use client";

import { motion } from "framer-motion";

const partners = [
    "Google Ads", "Meta Business", "LinkedIn Ads", "Shopify", "HubSpot", "Zapier", "Hotjar", "ActiveCampaign"
];

export default function TrustedBy() {
    return (
        <div className="py-12 border-y border-white/5 bg-background/50 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center uppercase tracking-[0.2em] text-[10px] font-bold text-gray-500">
                Powering Growth for Industry Leaders
            </div>
            
            <div className="flex overflow-hidden">
                <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-16 items-center"
                >
                    {[...partners, ...partners].map((partner, i) => (
                        <div key={i} className="text-2xl md:text-3xl font-heading font-black text-white/10 hover:text-primary/40 transition-colors cursor-default whitespace-nowrap uppercase tracking-tighter italic">
                            {partner}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Side gradients to fade the ticker */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
    );
}
