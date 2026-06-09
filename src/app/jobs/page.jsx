import JobCard from '@/components/jobs/JobCard';
import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';

const JobsPage = async () => {
    const jobs = await getCompanyJobs('')
    console.log('jobs from jobspage:', jobs)
    return (
        <div className='p-4 space-y-8'>
            <div>
                <h2 className='text-2xl font-bold text-white/50'>Browse All Jobs</h2>
                <p className='text-white/50'>Find the perfect role that fits your experience and expectations</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default JobsPage;