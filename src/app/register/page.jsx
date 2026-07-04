

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Eye, EyeOff, Image as ImageIcon } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner'; // You can also use 'react-hot-toast'
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
    const router = useRouter();
    
    // Form States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    
    // UI & Validation States
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Cleanup image preview URL to avoid memory leaks
    useEffect(() => {
        return () => {
            if (imagePreview) URL.revokeObjectURL(imagePreview);
        };
    }, [imagePreview]);

    // Handle Image Selection and Preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit check
                toast.error("Image size must be less than 5MB");
                return;
            }
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Validate Password requirements
    const validatePassword = (pass) => {
        if (pass.length < 8) return "Password must be at least 8 characters.";
        if (!/[A-Z]/.test(pass)) return "Password must contain at least one uppercase letter.";
        if (!/[0-9]/.test(pass)) return "Password must contain at least one number.";
        return "";
    };

    // Function to handle ImgBB upload
    const uploadImageToImgBB = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        
        const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        
        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            
            if (data.success) {
                return data.data.url;
            } else {
                throw new Error("Failed to upload image to ImgBB");
            }
        } catch (error) {
            console.error("ImgBB Upload Error:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset errors
        const currentErrors = { name: '', email: '', password: '', confirmPassword: '' };
        let hasError = false;

        // Perform validations
        const passwordError = validatePassword(password);
        if (passwordError) {
            currentErrors.password = passwordError;
            hasError = true;
        }

        if (password !== confirmPassword) {
            currentErrors.confirmPassword = "Passwords do not match.";
            hasError = true;
        }

        if (hasError) {
            setErrors(currentErrors);
            toast.error("Please fix the validation errors below.");
            return;
        }

        setIsLoading(true);
        setErrors({ name: '', email: '', password: '', confirmPassword: '' });

        try {
            let imageUrl = "";

            // 1. Upload image to ImgBB if selected
            if (imageFile) {
                imageUrl = await uploadImageToImgBB(imageFile);
            }

            // 2. Sign up with Better Auth
            await authClient.signUp.email({
                email,
                password,
                name,
                image: imageUrl || undefined,
                callbackURL: "/"
            }, {
                onRequest: () => {},
                onSuccess: () => {
                    toast.success("Account created successfully!");
                    router.push('/'); 
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Registration failed.");
                    setIsLoading(false);
                }
            });

        } catch (error) {
            toast.error(error.message || "An error occurred during registration.");
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
                        Create Account
                    </h2>
                    <p className="text-gray-500">
                        Get started with DigiTools today for free.
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'}`}
                                placeholder="Enter your full name"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        {errors.name && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.name}</p>}
                    </div>

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
                                required
                                disabled={isLoading}
                            />
                        </div>
                        {errors.email && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.email}</p>}
                    </div>

                    {/* Profile Image Input & Avatar Preview */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Profile Picture (Optional)
                        </label>
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 relative group shadow-inner">
                                {imagePreview ? (
                                    <Image src={imagePreview} alt="Avatar preview" className="h-full w-full object-cover" width={64} height={64} />
                                ) : (
                                    <User className="h-8 w-8 text-gray-400" />
                                )}
                            </div>
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <ImageIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#4F39F6]/10 file:text-[#4F39F6] hover:file:bg-[#4F39F6]/20 cursor-pointer"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white ${errors.password ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'}`}
                                placeholder="Create a password"
                                required
                                disabled={isLoading}
                            />
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

                    {/* Confirm Password Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-transparent transition-all bg-gray-50 focus:bg-white ${errors.confirmPassword ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'}`}
                                placeholder="Confirm your password"
                                required
                                disabled={isLoading}
                            />
                            <div 
                                className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#4F39F6] transition-colors" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400 hover:text-[#4F39F6] transition-colors" />
                                )}
                            </div>
                        </div>
                        {errors.confirmPassword && <p className="text-xs text-red-500 mt-1.5 ml-1">{errors.confirmPassword}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-lg hover:shadow-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F39F6] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Creating Account..." : "Sign Up"}
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
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link 
                            href="/login" 
                            className="font-semibold text-[#4F39F6] hover:text-[#9514FA] transition-colors"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;