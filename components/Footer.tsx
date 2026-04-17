"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Youtube, Facebook, BookOpen, Hash } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#080d1a] pt-20 pb-10 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center mb-6">
                            <Image
                                src="/logo.png"
                                alt="Scalix Labs"
                                width={200}
                                height={50}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            We build scalable customer acquisition systems that turn attention into revenue for modern SaaS and Tech companies.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            {/* 1. LinkedIn */}
                            <Link href="https://www.linkedin.com/company/scalixlabs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:bg-white/5 hover:border-[#0A66C2]/50 transition-all hover:scale-110" title="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            {/* 2. YouTube */}
                            <Link href="https://www.youtube.com/@Scalix_Labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-[#FF0000] hover:bg-white/5 hover:border-[#FF0000]/50 transition-all hover:scale-110" title="YouTube">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            {/* 3. X (Twitter) */}
                            <Link href="https://x.com/scalixlabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 hover:border-gray-500/50 transition-all hover:scale-110" title="X (Twitter)">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            {/* 4. Medium */}
                            <Link href="https://medium.com/@a.scalixlabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/50 transition-all hover:scale-110" title="Medium">
                                <BookOpen className="w-5 h-5" />
                            </Link>
                            {/* 5. Instagram */}
                            <Link href="https://www.instagram.com/scalix_labs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-[#E1306C] hover:bg-white/5 hover:border-[#E1306C]/50 transition-all hover:scale-110" title="Instagram">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            {/* 6. Facebook */}
                            <Link href="https://www.facebook.com/ScalixLabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:bg-white/5 hover:border-[#1877F2]/50 transition-all hover:scale-110" title="Facebook">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            {/* 7. Threads */}
                            <Link href="https://www.threads.com/@scalix_labs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 hover:border-gray-500/50 transition-all hover:scale-110" title="Threads">
                                <Hash className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Connect With Us</h4>
                        <ul className="space-y-4">
                            <li>
                                <button
                                    onClick={() => window.dispatchEvent(new CustomEvent("open-lead-form", { detail: "Footer" }))}
                                    className="text-gray-400 hover:text-white transition-colors text-left"
                                >
                                    Book a Strategy Call
                                </button>
                            </li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Request Free Audit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Scalix Labs. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-gray-500">
                        <span>Designed for Scale</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-growth animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
