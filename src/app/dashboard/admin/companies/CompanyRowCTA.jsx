'use client'
import { updateCompany } from '@/lib/actions/companies';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CompanyRowCTA = ({ company }) => {
    console.log(company)
    const [status, setStatus] = useState(company.status);
    const [loading, setLoading] = useState(null);
    const router = useRouter();

    const isApproved = status === 'Approved';
    const isSuspended = status === 'Suspended';
    const isTerminated = status === 'Terminated';

    const handleAction = async (newStat) => {
        setLoading(newStat);
        const res = await updateCompany(company._id, { ...company, status: newStat });
        if (res) {
            setStatus(newStat);
        }
        alert(`Company has been ${newStat}`);
        setLoading(null);
    };

    return (
        <div className='flex justify-end gap-4'>
            <Button
                onClick={() => handleAction('Approved')}
                isDisabled={isApproved || loading !== null}
                isLoading={loading === 'Approved'}
                className='rounded-md bg-green-500/20'
            >
                Approve
            </Button>
            <Button
                onClick={() => handleAction('Suspended')}
                isDisabled={isSuspended || loading !== null}
                isLoading={loading === 'Suspended'}
                className='rounded-md bg-yellow-500/20'
            >
                Suspend
            </Button>
            <Button
                onClick={() => handleAction('Terminated')}
                isDisabled={isTerminated || loading !== null}
                isLoading={loading === 'Terminated'}
                className='rounded-md bg-red-500/20'
            >
                Terminate
            </Button>
        </div>
    );
};

export default CompanyRowCTA;