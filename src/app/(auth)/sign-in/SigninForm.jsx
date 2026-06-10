"use client";

import { authClient } from "@/lib/auth-client";
import {
    Form,
    Input,
    Button,
    Label,
} from "@heroui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SigninForm() {
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl')

    const handleSignin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { email, password} = Object.fromEntries(formData.entries());

        setIsLoading(true)
        const {data, error} = await authClient.signIn.email({
            email, password,
            callbackURL: callbackUrl || '/'
        })
        setIsLoading(false)
        if (data) {
            alert('Signin Successfull');
            // router.push('/')
            // router.refresh()
            window.location.href = '/'
        } else {
            alert(error?.message)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-default-50 px-4">
            <div className="w-full max-w-md bg-background rounded-2xl shadow-lg p-8">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-semibold text-foreground tracking-tight">
                        Welcome back
                    </h1>
                    <p className="mt-1 text-sm text-default-500">
                        Sign in to your account to continue.
                    </p>
                </div>

                <Form onSubmit={handleSignin} className="flex flex-col gap-5">

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address <span className="text-danger">*</span>
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            autoComplete="email"
                            variant="bordered"
                            radius="sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="password" className="text-sm font-medium text-foreground">
                            Password <span className="text-danger">*</span>
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            variant="bordered"
                            radius="sm"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <Button
                            type="submit"
                            color="primary"
                            radius="sm"
                            className="flex-1 font-medium"
                            // isPending={isLoading}
                        >
                            {isLoading? "Signing in..." : "Sign In"}
                        </Button>
                        <Button
                            type="reset"
                            variant="flat"
                            color="default"
                            radius="sm"
                            className="flex-1 font-medium"
                            isDisabled={isLoading}
                        >
                            Reset
                        </Button>
                    </div>

                    {/* Sign-up link */}
                    <p className="text-center text-sm text-default-500 pt-1">
                        Don&apos;t have an account?{" "}
                        <Link href={`/sign-up?callbackUrl=${callbackUrl}`} className="text-primary font-medium hover:underline">
                            Create an account
                        </Link>
                    </p>

                </Form>
            </div>
        </div>
    );
}