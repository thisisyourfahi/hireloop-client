'use server'

import { serverFetch } from "../core/server"

export const getUserById = async (userId) => {
    return serverFetch(`/api/users?user_id=${userId}`)
}