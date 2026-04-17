"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Scalix Labs"
                        width={180}
                        height={45}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6 glass-card px-6 py-3 rounded-full">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-growth transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Navbar" }))}
                        className="px-6 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                        Book a Strategy Call
                    </button>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Navbar (Mobile)" }));
                        }}
                        className="px-6 py-3 bg-primary text-center hover:bg-primary/90 text-white font-semibold rounded-lg mt-2 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    >
                        Book a Strategy Call
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
