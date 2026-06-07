"use client";

import { authClient } from "@/lib/auth-client";
import {
    Form,
    Input,
    Button,
    Label,
    RadioGroup,
    Radio,
} from "@heroui/react";
import { useState } from "react";

export default function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState('seeker')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { name, email, imageUrl, password } = Object.fromEntries(formData.entries());

        setIsLoading(true);
        const { data, error } = await authClient.signUp.email({
            email, password, name, role,
            image: imageUrl
        })
        setIsLoading(false);
        if (data) {
            alert('Signup Successfull');
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
                        Create your account
                    </h1>
                    <p className="mt-1 text-sm text-default-500">
                        Fill in the details below to get started.
                    </p>
                </div>

                <Form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            autoComplete="name"
                            variant="bordered"
                            radius="sm"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="imageUrl" className="text-sm font-medium text-foreground">
                            Profile Image URL
                            <span className="ml-1 text-xs text-default-400">(optional)</span>
                        </Label>
                        <Input
                            id="imageUrl"
                            name="imageUrl"
                            type="url"
                            placeholder="https://example.com/avatar.jpg"
                            variant="bordered"
                            radius="sm"
                        />
                    </div>

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
                            placeholder="Min. 8 characters"
                            autoComplete="new-password"
                            variant="bordered"
                            radius="sm"
                        />
                    </div>

                    {/* Role Selection */}
                    <div className="flex flex-col gap-4">
                        <Label>Who Are You?</Label>
                        <RadioGroup onChange={value => setRole(value)} defaultValue="seeker" name="role" orientation="horizontal">
                            <Radio value="seeker">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Job Seeker</Label>
                                </Radio.Content>
                            </Radio>
                            <Radio value="recruiter">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Recruiter</Label>
                                </Radio.Content>
                            </Radio>
                        </RadioGroup>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <Button
                            type="submit"
                            color="primary"
                            radius="sm"
                            className="flex-1 font-medium"
                        >
                            {isLoading ? "Signin up..." : 'Sign Up'}
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

                    {/* Sign-in link */}
                    <p className="text-center text-sm text-default-500 pt-1">
                        Already have an account?{" "}
                        <a href="/sign-in" className="text-primary font-medium hover:underline">
                            Sign in
                        </a>
                    </p>

                </Form>
            </div>
        </div>
    );
}