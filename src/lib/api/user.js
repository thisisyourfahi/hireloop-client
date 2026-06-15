'use server'

import { headers } from "next/headers"
import { serverFetch } from "../core/server"
import { auth } from "@/lib/auth";

export const getUserById = async (userId) => {
    return serverFetch(`/api/users?user_id=${userId}`)
}

export const getUserList = async () => {
    const users = await auth.api.listUsers({
        query: {
            sortBy: "createdAt",
            sortDirection: "desc",
        },
        // This endpoint requires session cookies.
        headers: await headers(),
    });
    return users?.users;
}