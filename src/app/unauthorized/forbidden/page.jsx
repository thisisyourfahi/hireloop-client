import { TriangleExclamationFill, LockFill } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const ForbiddenPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <LockFill
                    className="mx-auto mb-4 text-orange-500"
                    width={64}
                    height={64}
                />

                <h1 className="text-3xl font-bold mb-2">
                    Access Forbidden
                </h1>

                <p className="text-default-500 mb-6">
                    Hold on there! You do not have the required permissions to access this page. if you think this is a mistake please contact the administration team.
                </p>

                <Link
                    href="/"
                >
                    <Button className={'rounded-md bg-orange-500'}>
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ForbiddenPage;