'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminLoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setErrorMessage('');
            router.push('/items');
        } catch {
            setErrorMessage('Failed to log in');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-muted">
            <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-lg">
                <h2 className="mb-4 text-2xl font-bold text-center">Admin Login</h2>
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
                    <Button type="submit" className="w-full">Login</Button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
