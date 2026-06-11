import { requiredRole } from '@/lib/core/session';
import React from 'react';

const SeekerDashboard = async ({children}) => {
    await requiredRole('seeker');
    return children;
};

export default SeekerDashboard;