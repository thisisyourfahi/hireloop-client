import React from "react";
import { Chip, Avatar, Separator } from "@heroui/react";
import {
    Briefcase,
    LocationArrowFill,
    Calendar,
    CircleDollar,
    Persons,
    CircleCheckFill,
    Star,
    BranchesDown,
    Signal,
    Factory,
    ChevronLeft,
} from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

function parseStarList(text) {
    if (!text) return [];
    return text
        .split("*")
        .map((s) => s.trim())
        .filter(Boolean);
}

function formatSalary(min, max, currency) {
    const fmt = (n) =>
        Number(n) >= 1000
            ? `${currency}${(Number(n) / 1000).toFixed(0)}k`
            : `${currency}${n}`;
    return `${fmt(min)} – ${fmt(max)}`;
}

function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
}

function daysUntilDeadline(dateStr) {
    const diff = new Date(dateStr).getTime() - Date.now();
    const days = Math.ceil(diff / 86400000);
    if (days < 0) return { label: "Expired", urgent: true };
    if (days === 0) return { label: "Closes today", urgent: true };
    if (days <= 7) return { label: `${days}d left`, urgent: true };
    return { label: `${days}d left`, urgent: false };
}

function Section({ icon: Icon, title, children }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-violet-400" />
                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest">
                    {title}
                </h3>
            </div>
            {children}
        </div>
    );
}

function BulletList({ items, accentClass = "bg-violet-500" }) {
    return (
        <ul className="flex flex-col gap-2.5">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className={`mt-4 w-1.5 h-1.5 rounded-full shrink-0 ${accentClass}`} />
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default function JobDetails({ job }) {
    if (!job) return null;

    const responsibilities = parseStarList(job.responsibilities);
    const requirements = parseStarList(job.requirements);
    const benefits = parseStarList(job.benefits);
    const deadline = daysUntilDeadline(job.deadline);
    const salary = formatSalary(job.minSalary, job.maxSalary, job.currency === "USD" ? "$" : job.currency);
    const posted = timeAgo(job.createdAt);

    const typeLabel = job.jobType.replace("-", " ");

    return (
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-[24px] overflow-hidden max-w-4xl w-full mx-auto mt-4 mb-4">

            {/* Header */}
            <div className="p-7 pb-6">
                <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 overflow-hidden flex items-center justify-center shrink-0">
                        {job.companyLogo ? (
                            <Image
                                width={100}
                                height={100}
                                src={job.companyLogo}
                                alt={job.companyName}
                                className="w-full h-full object-contain p-1.5"
                            />
                        ) : (
                            <Factory className="w-5 h-5 text-white/40" />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-medium text-zinc-400">{job.companyName}</span>
                                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                                <span className="text-xs text-zinc-500">{posted}</span>
                            </div>
                            <Link className="flex items-center gap-1" href={'/jobs'}>
                                <ChevronLeft /> Back
                            </Link>
                        </div>
                        <h1 className="text-xl font-bold text-white leading-snug mb-3">
                            {job.jobTitle}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            <Chip
                                size="sm"
                                className="bg-violet-500/15 text-violet-300 border border-violet-500/25 rounded-lg capitalize text-xs font-medium"
                            >
                                {typeLabel}
                            </Chip>
                            <Chip
                                size="sm"
                                className="bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-lg capitalize text-xs font-medium"
                            >
                                {job.jobCategory}
                            </Chip>
                            {job.isRemote && (
                                <Chip
                                    size="sm"
                                    className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 rounded-lg text-xs font-medium"
                                >
                                    Remote
                                </Chip>
                            )}
                            {job.status === "active" && (
                                <Chip
                                    size="sm"
                                    className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-medium"
                                >
                                    Active
                                </Chip>
                            )}
                        </div>
                    </div>
                </div>

                {/* Meta row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                    {[
                        { icon: CircleDollar, label: "Salary", value: salary },
                        { icon: LocationArrowFill, label: "Location", value: job.location },
                        { icon: Briefcase, label: "Type", value: typeLabel, capitalize: true },
                        {
                            icon: Calendar,
                            label: "Deadline",
                            value: deadline.label,
                            urgent: deadline.urgent,
                        },
                    ].map(({ icon: Icon, label, value, capitalize, urgent }) => (
                        <div
                            key={label}
                            className="flex flex-col gap-1 bg-zinc-800/60 border border-zinc-700/60 rounded-xl px-3.5 py-3"
                        >
                            <div className="flex items-center gap-1.5">
                                <Icon className="w-3.5 h-3.5 text-zinc-500" />
                                <span className="text-xs text-zinc-500 font-medium">{label}</span>
                            </div>
                            <span
                                className={`text-sm font-semibold leading-tight ${urgent
                                    ? "text-orange-400"
                                    : "text-zinc-100"
                                    } ${capitalize ? "capitalize" : ""}`}
                            >
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <Separator className="bg-zinc-800/80" />

            {/* Body */}
            <div className="p-7 flex flex-col gap-8">

                <Section icon={BranchesDown} title="Responsibilities">
                    <BulletList items={responsibilities} accentClass="bg-violet-500" />
                </Section>

                <Separator className="bg-zinc-800/60" />

                <Section icon={Persons} title="Requirements">
                    <BulletList items={requirements} accentClass="bg-orange-400" />
                </Section>

                <Separator className="bg-zinc-800/60" />

                <Section icon={Star} title="Benefits">
                    <BulletList items={benefits} accentClass="bg-emerald-400" />
                </Section>

            </div>

            {/* Footer CTA */}
            <div className="px-7 pb-7">
                <div className="flex items-center gap-3 bg-zinc-800/40 border border-zinc-700/60 rounded-2xl p-4">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-zinc-200">Interested in this role?</p>
                        <p className="text-xs text-zinc-500 mt-0.5">
                            Apply before{" "}
                            {new Date(job.deadline).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-150">
                        Apply Now
                    </button>
                </div>
            </div>

        </div>
    );
}