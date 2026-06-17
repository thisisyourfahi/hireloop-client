import React, { Suspense } from 'react';
import SignUpForm from './SignUpForm';

const page = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <SignUpForm />
        </Suspense>

    );
};

export default page;