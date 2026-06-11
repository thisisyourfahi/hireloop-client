'use server'

import { serverFetch } from "../core/server"

export const getApplicationsByApplicant = async (applicantId) => {
    return serverFetch(`/api/applications?applicantId=${applicantId}`);
}

export const getApplicationById = async (applicationId) => {
    return serverFetch(`/api/application/${applicationId}`)
}