import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import AccessRestricted from './AccessRestricted';
import { getJobById } from '@/lib/api/jobs';
import { JobApplyForm } from './JobApplyForm';
import { getApplicationsByApplicant } from '@/lib/api/applications';
import { ShieldExclamation } from '@gravity-ui/icons';
import { ApplicationLimit } from './ApplicationLimit';
import { getPlanByName } from '@/lib/api/plans';

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

    console.log(user);
    // number of applications already made by the user
    const plan = await getPlanByName(user?.plan);
    console.log('refactor:',plan);
    const usersApplications = await getApplicationsByApplicant(user.id);
    if (usersApplications.length >= plan.maximumApplicationLimit) {
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