import { getJobById } from '@/lib/api/jobs';
import React from 'react';
import JobDetails from './JobDetails';

const JobDetailsPage = async ({params}) => {
    const {id} = await params;
    const job = await getJobById(id);
    return (
        <div>
            <JobDetails job={job}/>
        </div>
    );
};

export default JobDetailsPage;