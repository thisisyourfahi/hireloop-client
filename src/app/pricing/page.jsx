"use client";

import { useState } from "react";
import { Button, Chip } from "@heroui/react";
import { CircleCheck, Person, Briefcase } from "@gravity-ui/icons";
import React from 'react';


const seekerPlans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        tagline: "Get started, no strings attached.",
        features: [
            "Browse & save up to 10 jobs",
            "Apply to up to 3 jobs per month",
            "Basic profile",
            "Email alerts",
        ],
        cta: "Get started",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$19",
        period: "per month",
        tagline: "For active job seekers who mean business.",
        features: [
            "Apply to up to 30 jobs per month",
            "Unlimited saved jobs",
            "Application tracking",
            "Salary insights",
        ],
        cta: "Go Pro",
        highlight: true,
    },
    {
        name: "Premium",
        price: "$39",
        period: "per month",
        tagline: "Every edge, all at once.",
        features: [
            "Everything in Pro",
            "Unlimited applications",
            "Profile boost to recruiters",
            "Early access to new jobs",
            "Priority support",
        ],
        cta: "Go Premium",
        highlight: false,
    },
];

const recruiterPlans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        tagline: "Perfect for a company's first year of hiring.",
        features: [
            "Up to 3 active job posts",
            "Basic applicant management",
            "Standard listing visibility",
        ],
        cta: "Get started",
        highlight: false,
    },
    {
        name: "Growth",
        price: "$49",
        period: "per month",
        tagline: "Scale your hiring without the overhead.",
        features: [
            "Up to 10 active job posts",
            "Applicant tracking",
            "Basic analytics",
            "Email support",
        ],
        cta: "Start hiring",
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "$149",
        period: "per month",
        tagline: "Built for teams that hire at scale.",
        features: [
            "Up to 50 active job posts",
            "Advanced analytics dashboard",
            "Featured job listings",
            "Team collaboration",
            "Custom branding",
            "Priority support",
        ],
        cta: "Contact sales",
        highlight: false,
    },
];

function PlanCard({ plan }) {
    return (
        <div
            className={`relative flex flex-col rounded-2xl p-6 border transition-all duration-200 ${plan.highlight
                    ? "bg-[#1c1c1e] border-[#F97316]/40 shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)]"
                    : "bg-[#1c1c1e] border-white/[0.06] hover:border-white/[0.12]"
                }`}
        >
            {plan.highlight && (
                <Chip
                    size="sm"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-[10px] font-semibold tracking-widest uppercase"
                >
                    Most Popular
                </Chip>
            )}

            <div className="mb-5">
                <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-2">
                    {plan.name}
                </p>
                <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-4xl font-bold text-white tracking-tight">
                        {plan.price}
                    </span>
                    <span className="text-sm text-white/40 mb-1.5">{plan.period}</span>
                </div>
                <p className="text-sm text-white/50">{plan.tagline}</p>
            </div>

            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                        <CircleCheck className="text-[#F97316] shrink-0 w-4 h-4" />
                        <span className="text-sm text-white/70">{f}</span>
                    </li>
                ))}
            </ul>

            <Button
                className={`w-full rounded-xl text-sm font-medium ${plan.highlight
                        ? "bg-[#F97316] hover:bg-orange-500 text-white"
                        : "bg-white/[0.06] hover:bg-white/[0.10] text-white/80"
                    }`}
            >
                {plan.cta}
            </Button>
        </div>
    );
}

export default function PricingPage() {
    const [tab, setTab] = useState("seeker");

    const plans = tab === "seeker" ? seekerPlans : recruiterPlans;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white px-4 py-16">
            <div className="max-w-5xl mx-auto flex flex-col items-center">

                {/* Header */}
                <p className="text-xs text-[#F97316] uppercase tracking-widest font-semibold mb-4">
                    Pricing
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white text-center tracking-tight mb-3">
                    Simple, honest pricing.
                </h1>
                <p className="text-white/45 text-center text-base max-w-md mb-10">
                    No hidden fees. Pick a plan that fits where you are — upgrade or downgrade anytime.
                </p>

                {/* Toggle */}
                <div className="flex items-center bg-[#1c1c1e] border border-white/[0.07] rounded-xl p-1 mb-14">
                    <Button
                        onPress={() => setTab("seeker")}
                        startContent={<Person />}
                        className={`rounded-lg text-sm font-medium transition-all duration-200 ${tab === "seeker"
                                ? "bg-[#F97316] text-white shadow-sm"
                                : "bg-transparent text-white/45 hover:text-white/70"
                            }`}
                    >
                        For Job Seekers
                    </Button>
                    <Button
                        onPress={() => setTab("recruiter")}
                        startContent={<Briefcase />}
                        className={`rounded-lg text-sm font-medium transition-all duration-200 ${tab === "recruiter"
                                ? "bg-[#F97316] text-white shadow-sm"
                                : "bg-transparent text-white/45 hover:text-white/70"
                            }`}
                    >
                        For Recruiters
                    </Button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
                    {plans.map((plan) => (
                        <PlanCard key={plan.name} plan={plan} />
                    ))}
                </div>

                {/* Footer note */}
                <p className="text-white/25 text-xs mt-12 text-center">
                    All plans include a 14-day free trial. No credit card required to start.
                </p>
            </div>
        </div>
    );
}