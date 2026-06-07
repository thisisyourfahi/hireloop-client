"use client";

import Image from "next/image";
import { Briefcase, ChartColumn, PersonMagnifier, Star } from "@gravity-ui/icons";
import bgImage from '@/assets/globe.png'

const stats = [
    {
        icon: <Briefcase width={20} height={20} />,
        value: "50K",
        label: "Active Jobs",
    },
    {
        icon: <ChartColumn width={20} height={20} />,
        value: "12K",
        label: "Companies",
    },
    {
        icon: <PersonMagnifier width={20} height={20} />,
        value: "2M",
        label: "Job Seekers",
    },
    {
        icon: <Star width={20} height={20} />,
        value: "97%",
        label: "Satisfication Rate",
    },
];

export default function StatsSection() {
    return (
        <section className="relative w-full bg-[#0a0a0f] overflow-hidden py-16 md:py-24">

            {/* Globe background */}
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none">
                <div className="relative w-full aspect-video">
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        className="object-cover object-center opacity-90"
                        priority
                    />
                    {/* Purple glow behind globe */}
                    <div className="absolute inset-0 rounded-full blur-3xl bg-violet-700/20 scale-75 translate-y-8" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">

                {/* Headline */}
                <p className="text-center text-white text-xl sm:text-2xl md:text-3xl font-light leading-snug max-w-xl">
                    Assisting over{" "}
                    <strong className="font-bold">15,000 job seekers</strong>
                    <br />
                    find their dream positions.
                </p>

                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-[#111114]/90 backdrop-blur-sm border border-white/8 rounded-2xl p-5 flex flex-col gap-4"
                        >
                            <span className="text-white/60">{stat.icon}</span>
                            <div>
                                <p className="text-white text-3xl md:text-4xl font-bold tracking-tight leading-none mb-1.5">
                                    {stat.value}
                                </p>
                                <p className="text-white/45 text-sm">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}