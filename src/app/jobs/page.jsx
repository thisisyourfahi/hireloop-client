import JobCard from '@/components/jobs/JobCard';
import JobListingContainer from '@/components/jobs/JobListingContainer';
import { getJobs } from '@/lib/api/jobs';
import React from 'react';

const JobsPage = async () => {
    const jobs = await getJobs();
    return (
        <div className='p-4 space-y-8'>
            <div>
                <h2 className='text-2xl font-bold text-white/50'>Browse All Jobs</h2>
                <p className='text-white/50'>Find the perfect role that fits your experience and expectations</p>
            </div>
            <JobListingContainer initialJobs={jobs || []}/>
        </div>
    );
};

export default JobsPage;