import { serverDelete, serverFetch, serverMutation } from "../core/server"

export const submitApplication = async (applicationData) => {
    return serverMutation('/api/applications', applicationData);
}

export const deleteApplication = async (applicationId) => {
    return serverDelete(`/api/applications/delete/${applicationId}`);
}