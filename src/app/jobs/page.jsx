import JobCard from '@/components/jobs/JobCard';
import JobListingContainer from '@/components/jobs/JobListingContainer';
import { getJobs } from '@/lib/api/jobs';
import React from 'react';

const JobsPage = async ({ searchParams }) => {
    const filters = await searchParams;
    const filterObj = {
        ...filters,
        isRemote: filters.isRemote === 'true' ? true : false
    }
    const searchQuery = new URLSearchParams(filters);
    const queryString = searchQuery.toString();
    const jobs = await getJobs(queryString);
    return (
        <div className='max-w-7xl mx-auto p-4 space-y-8'>
            <div>
                <h2 className='text-2xl font-bold text-white/50'>Browse All Jobs</h2>
                <p className='text-white/50'>Find the perfect role that fits your experience and expectations</p>
            </div>
            <JobListingContainer filters={filterObj} initialJobs={jobs || []} />
        </div>
    );
};

export default JobsPage;