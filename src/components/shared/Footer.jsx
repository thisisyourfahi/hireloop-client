"use client";

import Link from "next/link";

const footerLinks = [
    {
        heading: "Product",
        links: [
            { label: "Job discovery", href: "/job-discovery" },
            { label: "Worker AI", href: "/worker-ai" },
            { label: "Companies", href: "/companies" },
            { label: "Salary data", href: "/salary-data" },
        ],
    },
    {
        heading: "Navigations",
        links: [
            { label: "Help center", href: "/help" },
            { label: "Career library", href: "/career-library" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        heading: "Resources",
        links: [
            { label: "Brand Guideline", href: "/brand-guideline" },
            { label: "Newsroom", href: "/newsroom" },
        ],
    },
];

function FacebookIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function PinterestIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.140-.828 3.330-.236.995.499 1.806 1.476 1.806 1.770 0 3.133-1.865 3.133-4.561 0-2.386-1.715-4.054-4.163-4.054-2.837 0-4.502 2.128-4.502 4.330 0 .857.330 1.776.742 2.279a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.030-2.407-2.030-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.220-5.190 6.220-1.015 0-1.970-.528-2.297-1.148l-.624 2.328c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#1c1c1e] border-t border-white/5 w-full mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Top section */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-8">

                    {/* Brand column */}
                    <div className="md:w-64 shrink-0">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 4C8.03 4 4 8.03 4 13s4.03 9 9 9 9-4.03 9-9" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M22 13c0-2.21-.9-4.21-2.34-5.66" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                                <circle cx="20" cy="7" r="2" fill="#F97316" />
                            </svg>
                            <span className="text-[1.1rem] font-bold tracking-tight">
                                <span className="text-white">hire</span>
                                <span className="text-orange-500">loop</span>
                            </span>
                        </Link>
                        <p className="text-sm text-white/50 leading-relaxed max-w-50">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Link columns */}
                    <div className="flex flex-1 flex-wrap gap-8 md:justify-end">
                        {footerLinks.map((col) => (
                            <div key={col.heading} className="min-w-30">
                                <h3 className="text-sm font-semibold text-violet-400 mb-4">
                                    {col.heading}
                                </h3>
                                <ul className="flex flex-col gap-3 list-none m-0 p-0">
                                    {col.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-white/10 my-8" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Social icons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-md text-white/60 hover:text-white transition-colors duration-150"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://pinterest.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-md bg-violet-600 text-white hover:bg-violet-500 transition-colors duration-150"
                            aria-label="Pinterest"
                        >
                            <PinterestIcon />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-md text-white/60 hover:text-white transition-colors duration-150"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>

                    {/* Copyright + legal */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-white/40">
                        <span>Copyright 2024 – Programming Hero</span>
                        <div className="flex items-center gap-2">
                            <Link href="/terms" className="hover:text-white transition-colors duration-150">
                                Terms &amp; Policy
                            </Link>
                            <span>–</span>
                            <Link href="/privacy" className="hover:text-white transition-colors duration-150">
                                Privacy Guideline
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}