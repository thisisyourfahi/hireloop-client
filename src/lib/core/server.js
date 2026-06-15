'use server'

import { redirect } from "next/navigation";
import { getUserToken } from "./session"

const serverUrl = process.env.NEXT_PUBLIC_BASE_URL

export const authHeader = async () => {
    const token = await getUserToken();
    const header = token ? {
        authorization: `Bearer ${token}`
    } : {}
    return header;
}

export const serverFetch = async (path) => {
    const res = await fetch(`${serverUrl}${path}`);
    return res.json();
}

export const protectedFetch = async (path) => {
    const res = await fetch(`${serverUrl}${path}`, {
        headers: await authHeader()
    })
    return handleStatusCode(res);
}

export const serverMutation = async (path, data) => {
    const res = await fetch(`${serverUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return res.json()
}

export const serverDelete = async (path) => {
    const res = await fetch(`${serverUrl}${path}`, {
        method: 'DELETE', 
        headers: await authHeader(),
    });
    return res.json();
}

export const serverUpdate = async (path, data) => {
    const res = await fetch(`${serverUrl}${path}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            ... await authHeader()
        },
        body: JSON.stringify(data)
    })
    return handleStatusCode(res);
}

const handleStatusCode = res => {
    if (res.status === 401) {
        redirect('/sign-in')
    } 
    else if (res.status === 403) {
        redirect('/unauthorized/forbidden')
    }
    return res.json()
}