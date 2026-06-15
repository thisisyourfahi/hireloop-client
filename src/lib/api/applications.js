'use server'

import { protectedFetch, serverFetch } from "../core/server"

export const getApplicationsByApplicant = async (applicantId) => {
    return protectedFetch(`/api/applications?applicantId=${applicantId}`);
}

export const getApplicationById = async (applicationId) => {
    return serverFetch(`/api/application/${applicationId}`)
}