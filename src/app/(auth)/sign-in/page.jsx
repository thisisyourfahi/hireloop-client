import React, { Suspense } from 'react';
import SigninForm from './SigninForm';

const page = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>

            <SigninForm />
        </Suspense>
    );
};

export default page;