import React from 'react';
import { Card, Button } from '@heroui/react';
import { TriangleExclamation } from '@gravity-ui/icons';

export const NoJobs = () => {
    return (
        <Card
            shadow="none"
            className="w-full bg-warning-50/50 dark:bg-warning-50/10"
        >
            <div className="flex items-start gap-3.5 text-center sm:text-left">
                <div className="p-2 bg-warning-100 dark:bg-warning-900/30 text-warning-600 dark:text-warning-400 rounded-full shrink-0 mx-auto sm:mx-0">
                    <TriangleExclamation width={22} height={22} />
                </div>
                <div className="space-y-1">
                    <h4 className="font-semibold text-foreground text-base">
                        No Jobs Found
                    </h4>
                    <p className="text-sm text-default-500">
                        You haven&apos;t posted any jobs under this company yet.
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default NoJobs;