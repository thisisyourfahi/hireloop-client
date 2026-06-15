'use server'

import { revalidatePath } from "next/cache"
import { serverMutation, serverUpdate } from "../core/server"

export const createCompany = async (newCompanyData) => {
    return serverMutation('/api/companies', newCompanyData)
}

export const updateCompany = async (companyId, newCompanyData) => {
    const result = await serverUpdate(`/api/update/companies/${companyId}`, newCompanyData)
    revalidatePath('/dashboard/admin/companies');
    return result;
}