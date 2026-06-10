'use server'

import { serverFetch } from "../core/server"

export const getPlanByName = async (plan_name) => {
    return serverFetch(`/api/plans?plan_name=${plan_name}`)
}