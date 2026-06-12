'use server'

import { serverMutation, serverUpdate } from "../core/server"

export const createCompany = async (newCompanyData) => {
    return serverMutation('/api/companies', newCompanyData)
}

export const updateCompany = async (companyId, newCompanyData) => {
    return serverUpdate(`/api/update/companies/${companyId}`, newCompanyData)
}