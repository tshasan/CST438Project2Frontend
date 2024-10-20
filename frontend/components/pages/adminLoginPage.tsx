"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            setLoading(false);

            if (result?.error) {
                setErrorMessage(result.error);
            } else {
                setErrorMessage('');
                router.push('/items'); // Redirect on successful login
            }
        } catch {
            setLoading(false);
            setErrorMessage('An unexpected error occurred.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-muted">
            <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-2"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="mt-2"
                            required
                        />
                    </div>
                    {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
                <Button variant="outline" className="mt-4 w-full" onClick={() => signIn('google')}>
                    Sign in with Google
                </Button>
                <Button variant="outline" className="mt-2 w-full" onClick={() => signIn('github')}>
                    Sign in with GitHub
                </Button>
                <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">Dont have an account? <a href="/signup" className="underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
