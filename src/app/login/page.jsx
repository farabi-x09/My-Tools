

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner'; 
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const router = useRouter();

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // UI & Validation States
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error("Please check the missing fields below.");
            return;
        }

        setIsLoading(true);
        setErrors({ email: '', password: '' });

        try {
            await authClient.signIn.email({
                email,
                password,
            }, {
                onRequest: () => {
                    // Loading state is already set to true above
                },
                onSuccess: () => {
                    toast.success("Welcome back!");
                    router.push('/'); 
                },
                onError: (ctx) => {
                    // This handles the wrong email/password toast
                    const errorMessage = ctx.error?.message || "Invalid email or password. Please try again.";
                    toast.error(errorMessage);
                    
                    // Clear the password field for better UX so they can try again quickly
                    setPassword('');
                    setIsLoading(false);
                }
            });
        } catch (error) {
            toast.error(error.message || "An unexpected error occurred.");
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
    try {
        setIsLoading(true);
        // Better Auth er client instance theke direct social login trigger hobe
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/" // Login er por jekhane redirect korte chao
        });
    } catch (error) {
        toast.error("Google login failed. Please try again.");
    } finally {
        setIsLoading(false);
    }
};

    return (
        <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#101727] mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500">
                        Please enter your details to sign in to DigiTools.
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'}`}
                                placeholder="Enter your email"
                                disabled={isLoading}
                            />
                        </div>
                        {errors.email && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.email}</p>}
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                           
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white ${errors.password ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'}`}
                                placeholder="Enter your password"
                                disabled={isLoading}
                            />
                            
                            {/* Password Toggle Eye Icon */}
                            <div 
                                className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#4F39F6] transition-colors" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400 hover:text-[#4F39F6] transition-colors" />
                                )}
                            </div>
                        </div>
                        {errors.password && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.password}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-lg hover:shadow-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F39F6] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                </form>


                {/* Divider */}
<div className="relative my-8">
    <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
    </div>
    <div className="relative flex justify-center text-sm">
        <span className="px-3 bg-white text-gray-500 font-medium">Or continue with</span>
    </div>
</div>

{/* Google Login Button */}
<button
    type="button"
    onClick={handleGoogleLogin}
    disabled={isLoading}
    className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-gray-200 bg-white text-[#101727] font-semibold text-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
>
   <FcGoogle className="text-2xl" />
    Sign up with Google
</button>

                {/* Footer Section */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link 
                            href="/register" 
                            className="font-semibold text-[#4F39F6] hover:text-[#9514FA] transition-colors"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;