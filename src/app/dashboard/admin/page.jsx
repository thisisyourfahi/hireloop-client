import React from 'react';
import { Ban, Factory, Files, Persons, PersonWorker } from '@gravity-ui/icons';
import DashboardStats from '@/components/dashboard/DashboardStats';

const AdminDashboard = () => {
    const adminStats = [
        { title: 'Total Users', value: 124792, icon: Persons },
        { title: 'Total Recruiters', value: 12405, icon: PersonWorker },
        { title: 'Total Company', value: 4281, icon: Factory },
        { title: 'Job Posted', value: 8920, icon: Files },
    ]
    return (
        <div className='p-4'>
            <p className='text-2xl'>Welcom Admin</p>
            <DashboardStats statsData={adminStats} />
        </div>
    );
};

export default AdminDashboard;