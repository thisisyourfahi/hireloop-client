import { getApplicationById } from "@/lib/api/applications";

function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

function Field({ label, value }) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-zinc-500 text-xs uppercase tracking-wide">{label}</span>
            <span className="text-zinc-200 text-sm">{value || <span className="text-zinc-600 italic">Not provided</span>}</span>
        </div>
    );
}

const ViewApplicationDetails = async ({ params }) => {
    const { id } = await params;
    const app = await getApplicationById(id);

    return (
        <div className="min-h-screen bg-[#161d22] px-6 py-10">
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-zinc-500 text-sm mb-1">Application Details</p>
                    <h1 className="text-2xl font-semibold text-white">{app.jobTitle}</h1>
                    <p className="text-zinc-400 text-sm mt-1">{app.companyName} · Applied on {formatDate(app.createdAt)}</p>
                </div>

                {/* Applicant Info */}
                <div className="bg-[#1c1c1e] rounded-xl border border-white/5 p-6 flex flex-col gap-5">
                    <p className="text-white font-medium text-sm">Applicant Info</p>
                    <div className="grid grid-cols-2 gap-5">
                        <Field label="Full Name" value={app.applicantName} />
                        <Field label="Email" value={app.applicantEmail} />
                        <Field label="Phone" value={app.phone} />
                        <Field label="Portfolio" value={app.portfolio} />
                        <Field label="LinkedIn" value={app.linkedin} />
                        <Field label="Resume Link" value={app.resumeLink} />
                    </div>
                </div>

                {/* Cover Letter */}
                <div className="bg-[#1c1c1e] rounded-xl border border-white/5 p-6 mt-4">
                    <p className="text-white font-medium text-sm mb-3">Cover Letter</p>
                    {app.coverLetter
                        ? <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">{app.coverLetter}</p>
                        : <p className="text-zinc-600 italic text-sm">Not provided</p>
                    }
                </div>

            </div>
        </div>
    );
};

export default ViewApplicationDetails;