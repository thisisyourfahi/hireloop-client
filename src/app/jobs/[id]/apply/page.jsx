import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import AccessRestricted from './AccessRestricted';
import { getJobById } from '@/lib/api/jobs';
import { JobApplyForm } from './JobApplyForm';
import { getApplicationsByApplicant } from '@/lib/api/applications';
import { ShieldExclamation } from '@gravity-ui/icons';
import { ApplicationLimit } from './ApplicationLimit';

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

    // number of applications already made by the user
    const usersApplications = await getApplicationsByApplicant(user.id);
    if (usersApplications.length >= 3) {
        return <ApplicationLimit />
    }

    const job = await getJobById(id);
    return (
        <div className='space-y-4'>
            <JobApplyForm applicant={user} job={job}></JobApplyForm>
        </div>
    );
};

export default ApplyPage;