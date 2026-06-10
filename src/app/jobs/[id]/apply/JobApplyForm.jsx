"use client";

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import {
    Paperclip,
    Briefcase,
    CircleCheck,
    MapPin,
    FileDollar,
    Calendar,
} from "@gravity-ui/icons";
import Image from "next/image";
import { submitApplication } from "@/lib/actions/applications";
import { useRouter } from "next/navigation";

export function JobApplyForm({ applicant, job, onSubmit }) {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // keep untouched — wire up yourself
        const formData = new FormData(e.currentTarget);
        const formInfo = Object.fromEntries(formData.entries());
        const submissionData = {
            ...formInfo,
            jobId: job?._id,
            jobTitle: job?.jobTitle,
            companyName: job?.companyName,
            applicantId: applicant.id,
            applicantName: applicant?.name,
            applicantEmail: applicant?.email
        }
        console.log('submission data:', submissionData);
        const res = await submitApplication(submissionData)
        if (res.insertedId) {
            alert("Your application has been submitted!");
            router.push('/jobs')
        }
    };

    const formatSalary = (min, max, currency) =>
        `${currency} ${Number(min).toLocaleString()} – ${Number(max).toLocaleString()}`;

    const formatDeadline = (dateStr) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white flex items-start justify-center px-4 py-10">
            <div className="w-full max-w-2xl flex flex-col gap-6">

                {/* Job Info Card */}
                <div className="bg-[#1c1c1e] rounded-2xl p-6 border border-white/6">
                    <div className="flex items-center gap-4 mb-5">
                        <Image
                            src={job.companyLogo}
                            alt={job.companyName}
                            width={100} height={100}
                            className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1.5"
                        />
                        <div>
                            <h2 className="text-lg font-semibold text-white leading-tight">
                                {job.jobTitle}
                            </h2>
                            <p className="text-sm text-white/50">{job.companyName}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <InfoChip icon={<MapPin />} label={job.location} />
                        <InfoChip
                            icon={<Briefcase />}
                            label={job.jobType.replace("-", " ")}
                        />
                        <InfoChip
                            icon={<FileDollar />}
                            label={formatSalary(job.minSalary, job.maxSalary, job.currency)}
                        />
                        <InfoChip
                            icon={<Calendar />}
                            label={`Due ${formatDeadline(job.deadline)}`}
                        />
                    </div>
                </div>

                {/* Application Form */}
                <div className="bg-[#1c1c1e] rounded-2xl p-6 border border-white/6">
                    <h3 className="text-base font-semibold text-white mb-1">
                        Your Application
                    </h3>
                    <p className="text-sm text-white/40 mb-6">
                        Applying as{" "}
                        <span className="text-white/70">{applicant.name}</span>
                    </p>

                    <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                        {/* Name + Email row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <TextField isRequired name="fullName" defaultValue={applicant.name}>
                                <Label className="text-xs text-white/50 mb-1.5 block">
                                    Full Name
                                </Label>
                                <Input
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="Your full name"
                                />
                                <FieldError className="text-xs text-red-400 mt-1" />
                            </TextField>

                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                defaultValue={applicant.email}
                                validate={(v) =>
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                                        ? null
                                        : "Enter a valid email"
                                }
                            >
                                <Label className="text-xs text-white/50 mb-1.5 block">
                                    Email
                                </Label>
                                <Input
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                                <FieldError className="text-xs text-red-400 mt-1" />
                            </TextField>
                        </div>

                        {/* Phone */}
                        <TextField name="phone" type="tel">
                            <Label className="text-xs text-white/50 mb-1.5 block">
                                Phone <span className="text-white/25">(optional)</span>
                            </Label>
                            <Input
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500 transition-colors"
                                placeholder="+1 555 000 0000"
                            />
                        </TextField>

                        {/* Portfolio / LinkedIn */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <TextField name="portfolio" type="url">
                                <Label className="text-xs text-white/50 mb-1.5 block">
                                    Portfolio URL{" "}
                                    <span className="text-white/25">(optional)</span>
                                </Label>
                                <Input
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="https://yoursite.com"
                                />
                            </TextField>

                            <TextField name="linkedin" type="url">
                                <Label className="text-xs text-white/50 mb-1.5 block">
                                    LinkedIn{" "}
                                    <span className="text-white/25">(optional)</span>
                                </Label>
                                <Input
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500 transition-colors"
                                    placeholder="https://linkedin.com/in/you"
                                />
                            </TextField>
                        </div>

                        {/* Cover Letter */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/50">
                                Cover Letter{" "}
                                <span className="text-white/25">(optional)</span>
                            </label>
                            <textarea
                                name="coverLetter"
                                rows={4}
                                placeholder={`Why are you a good fit for the ${job.jobTitle} role?`}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                            />
                        </div>

                        {/* Resume Link */}
                        <TextField name="resumeLink" type="url">
                            <Label className="text-xs flex items-center gap-1 text-white/50 mb-1.5">
                                <Paperclip />
                                Resume / CV{" "}
                                <span className="text-white/25">(Google Drive or Dropbox link)</span>
                            </Label>
                            <Input
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-violet-500 transition-colors"
                                placeholder="https://drive.google.com/..."
                            />
                            <FieldError className="text-xs text-red-400 mt-1" />
                        </TextField>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-1">
                            <Button
                                type="submit"
                                className="flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors"
                            >
                                <CircleCheck className="w-4 h-4" />
                                Submit Application
                            </Button>
                            <Button
                                type="reset"
                                className="text-sm text-white/40 hover:text-white/70 px-4 py-2.5 rounded-xl transition-colors bg-transparent"
                            >
                                Reset
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

function InfoChip({ icon, label }) {
    return (
        <div className="flex items-center gap-1.5 bg-white/4 rounded-lg px-3 py-2">
            <span className="text-white/35 w-3.5 h-3.5 shrink-0">{icon}</span>
            <span className="text-xs text-white/60 capitalize truncate">{label}</span>
        </div>
    );
}