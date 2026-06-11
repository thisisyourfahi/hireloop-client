"use client";

import { Button } from "@heroui/react";
import { Eye, TrashBin, ArrowUpRight } from "@gravity-ui/icons";
import Link from "next/link";

export function ApplicationRowCTA({ application, onView, onDelete }) {
    return (
        <div className="flex items-center justify-end gap-2">
            <Link href={`/dashboard/seeker/applications/view/${application._id}`}>
                <Button
                    size="sm"
                    className="text-orange-400 bg-orange-500/10"
                >
                    <Eye />
                    View
                </Button>
            </Link>

            <Button
                size="sm"
                variant="flat"
                className="text-zinc-300 bg-white/5 hover:bg-white/10 border-none"
                startContent={<ArrowUpRight width={14} height={14} />}
                onPress={() => window.open(`/jobs/${application.jobId}`, "_blank")}
            >
                Job Post
            </Button>

            <Button
                size="sm"
                variant="flat"
                className="text-red-400 bg-red-500/10 hover:bg-red-500/20 border-none"
                startContent={<TrashBin width={14} height={14} />}
                onPress={() => onDelete?.(application._id)}
            >
                Withdraw
            </Button>
        </div>
    );
}