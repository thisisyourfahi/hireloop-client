import { Button, Card } from "@heroui/react";
import { MapPin, Clock, CircleDollar,  Factory } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const jobTypeLabel = (type) => {
    const map = {
        "full-time": "Full-time",
        "part-time": "Part-time",
        "contract": "Contract",
        "internship": "Internship",
        "freelance": "Freelance",
    };
    return map[type] ?? type;
};

const formatSalary = (min, max, currency) => {
    const fmt = (n) =>
        Number(n) >= 1000
            ? `${currency === "USD" ? "$" : currency}${(Number(n) / 1000).toFixed(0)}k`
            : `${currency === "USD" ? "$" : currency}${n}`;
    return `${fmt(min)} – ${fmt(max)}`;
};

const daysUntil = (dateStr) => {
    const diff = new Date(dateStr) - new Date();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

export default function JobCard({ job }) {
    const {
        jobTitle,
        jobType,
        location,
        isRemote,
        minSalary,
        maxSalary,
        currency,
        deadline,
        companyName,
        companyLogo,
        jobCategory,
    } = job;

    const deadlineDays = daysUntil(deadline);
    const isUrgent = deadlineDays <= 7;

    return (
        <Card className="bg-[#1c1c1e] border border-white/6 rounded-2xl p-6 max-w-sm w-full hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-950/20 transition-all duration-200 cursor-pointer group">

            {/* Company header */}
            <Card.Header className="flex flex-row items-center gap-3 p-0 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 overflow-hidden flex items-center justify-center shrink-0">
                    {companyLogo ? (
                        <Image
                            width={100}
                            height={100}
                            src={companyLogo}
                            alt={companyName}
                            className="w-full h-full object-contain p-1.5"
                        />
                    ) : (
                        <Factory className="w-5 h-5 text-white/40" />
                    )}
                </div>
                <div className="flex flex-col">
                    <span className="text-white/50 text-xs font-medium tracking-wide uppercase">
                        {companyName}
                    </span>
                    <span className="text-white/30 text-[11px] capitalize">{jobCategory}</span>
                </div>
            </Card.Header>

            {/* Title & description placeholder */}
            <Card.Content className="p-0 mb-5">
                <h3 className="text-white text-[1.35rem] font-semibold leading-tight mb-2 group-hover:text-violet-200 transition-colors">
                    {jobTitle}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                    Join {companyName} and help shape the future of {jobCategory} — working
                    alongside a driven team on meaningful challenges.
                </p>
            </Card.Content>

            {/* Chips */}
            <Card.Footer className="p-0 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                    {/* Location */}
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/[0.07] border border-white/[0.07] rounded-full px-3 py-1.5">
                        <MapPin className="w-3.5 h-3.5 text-violet-400" />
                        {location}
                    </span>

                    {/* Work mode */}
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/[0.07] border border-white/[0.07] rounded-full px-3 py-1.5">
                        <Clock className="w-3.5 h-3.5 text-violet-400" />
                        {isRemote ? "Remote" : "On-site"}
                    </span>

                    {/* Salary */}
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/[0.07] border border-white/[0.07] rounded-full px-3 py-1.5">
                        <CircleDollar className="w-3.5 h-3.5 text-violet-400" />
                        {formatSalary(minSalary, maxSalary, currency)}
                    </span>
                </div>

                {/* CTA row */}
                <div className="w-full flex justify-between items-center">
                    <div>
                        <p className="text-xs text-white/30">Closes {new Date(deadline).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}</p>
                    </div>
                    <Link href={'#'}>
                        <Button size="sm" className={'text-xs rounded-md'}>
                            Apply Now <ChevronRight />
                        </Button>
                    </Link>
                </div>
                {/* <div className="flex items-center justify-between pt-1">
                    <div className={`text-xs ${isUrgent ? "text-orange-400" : "text-white/30"}`}>
                        {isUrgent
                            ? `⚡ ${deadlineDays}d left`
                            : `Closes ${new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                    </div>
                    <button className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors group/btn">
                        Apply Now
                        <span className="text-[#F97316] transition-transform group-hover/btn:translate-x-0.5">→</span>
                    </button>
                </div> */}
            </Card.Footer>
        </Card>
    );
}