'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log("Login form submitted!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
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
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <Link 
                                href="/forgot-password" 
                                className="text-sm font-semibold text-[#4F39F6] hover:text-[#9514FA] transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                placeholder="Enter your password"
                                required
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
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-lg hover:shadow-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F39F6]"
                    >
                        Sign In
                    </button>
                </form>

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