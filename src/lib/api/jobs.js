'use server'

import { protectedFetch, serverFetch } from "../core/server"

const serverUrl = process.env.NEXT_PUBLIC_BASE_URL

export const getJobById = async(jobId) => {
    return serverFetch(`/api/jobs/${jobId}`);
}

export const getJobs = async (query = '') => {
    return protectedFetch(`/api/jobs?${query}`);
}

export const getCompanyJobs = async (companyId, status = 'active') => {
    return protectedFetch(`/api/jobs?companyId=${companyId}&status=${status}`)
    // return serverFetch(`/api/jobs?companyId=${companyId}&status=${status}`)
}
