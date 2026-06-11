import React from "react";
import Link from "next/link";
import { TriangleExclamationFill } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const UnauthorizedPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <TriangleExclamationFill
                    className="mx-auto mb-4 text-orange-500"
                    width={64}
                    height={64}
                />

                <h1 className="text-3xl font-bold mb-2">
                    Unauthorized Access
                </h1>

                <p className="text-default-500 mb-6">
                    You do not have permission to view this page.
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

export default UnauthorizedPage;