import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import AccessRestricted from './AccessRestricted';
import { getJobById } from '@/lib/api/jobs';
import { JobApplyForm } from './JobApplyForm';

const ApplyPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserSession();
    const from = `/jobs/${id}/apply`;

    // If user is not logged in 
    if (!user) {
        redirect(`/auth-required?from=${from}`)
    }

    // Auth Role Guard Screen
    if (user.role !== 'seeker') {
        return (
            <AccessRestricted from={from} />
        );
    }

    const job = await getJobById(id);
    return (
        <div>
            <JobApplyForm applicant={user} job={job}></JobApplyForm>
        </div>
    );
};

export default ApplyPage;