'use client';
import { authClient, useSession } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { router } from 'better-auth/api';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const NavbarTopRight = () => {
    const router = useRouter();

    const { data, isPending } = useSession();
    const user = data?.user;
    const handleLogout = async () => {
        const res = await authClient.signOut();
        if (res?.data?.success) {
            alert('Logged out successfully.');
            window.location.href = '/'
        }
    }
    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="">
                    <Avatar size="sm">
                        <Avatar.Image className='object-cover' src={user?.image} alt={user?.name} referrerPolicy="no-referrer" />
                        <Avatar.Fallback className='text-2xl'>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <Link href={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link href={`/dashboard/${user?.userRole}`}>Dashboard</Link>
                    </li>
                    <li>
                        <Button onClick={handleLogout} size="sm" variant="danger-soft" className={'rounded-sm w-full'}>Logout</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarTopRight;