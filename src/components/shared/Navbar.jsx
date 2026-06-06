"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1c1c1e] border-b border-white/5 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 4C8.03 4 4 8.03 4 13s4.03 9 9 9 9-4.03 9-9"
                                stroke="#F97316"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M22 13c0-2.21-.9-4.21-2.34-5.66"
                                stroke="#F97316"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            <circle cx="20" cy="7" r="2" fill="#F97316" />
                        </svg>
                        <span className="text-[1.1rem] font-bold tracking-tight">
                            <span className="text-white">hire</span>
                            <span className="text-orange-500">loop</span>
                        </span>
                    </Link>

                    {/* Center links — desktop */}
                    <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-white/75 hover:text-white transition-colors duration-150"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right actions — desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/sign-in"
                            className="text-sm text-white/75 hover:text-white transition-colors duration-150"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/get-started"
                            className="text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-full transition-colors duration-150"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Hamburger — mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`block w-5 h-0.5 bg-white transition-transform duration-200 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-white transition-transform duration-200 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-200 ${isOpen ? "max-h-64 border-t border-white/5" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col list-none m-0 px-4 py-4 gap-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm text-white/75 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/sign-in"
                            className="text-sm text-white/75 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/get-started"
                            className="inline-block text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-full transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}