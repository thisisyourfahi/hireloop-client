import { CircleInfoFill, Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import Link from "next/link";

export function ApplicationLimit() {
    return (
        <div className="max-w-2xl w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl mx-auto space-y-2">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto">
                <CircleInfoFill className="w-6 h-6" />
            </div>
            <h2 className="text-zinc-400 text-lg font-bold">Application Limit Reached</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                So far you&apos;ve applied in 3 jobs. Purchase our premium plans in order to apply to more jobs!
            </p>
            <div className="flex items-start gap-3 bg-blue-950/30 border border-blue-900/50 rounded-xl p-4 text-sm text-blue-300/90">
                <Rocket className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex-1 sm:flex sm:items-center sm:justify-between gap-4">
                    <p>Need to apply for more positions? Upgrade your account to unlock unlimited job submissions.</p>
                    <Link href={`/pricing`}>
                        <Button className={'rounded-xl bg-orange-500 hover:bg-orange-600'}>
                            View Plans
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

{/* <div className="max-w-sm w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl mx-auto">
    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <ShieldExclamation className="w-6 h-6" />
    </div>
    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        So far you&apos;ve applied in {usersApplications.length} jobs. Out of 3 this month.
    </p>
</div> */}