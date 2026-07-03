

'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, Menu, X, LogOut, User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Fetch the current user session from Better Auth
    const { data: session, isPending } = authClient.useSession();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "My Cart", href: "/my-cart" },
    ];

    const handleLogout = async () => {
        try {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Logged out successfully");
                        router.push('/login');
                        setIsMenuOpen(false); // Close mobile menu if open
                    }
                }
            });
        } catch (error) {
            toast.error("Failed to log out");
        }
    };

    return (
        <div className='py-5 sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm'>
            <div className='flex items-center justify-between mx-auto w-11/12'>
                
                {/* Logo */}
                <div>
                    <Link href="/">
                        <h3 className='font-bold text-3xl text-[#4F39F6] tracking-tight cursor-pointer'>
                            DigiTools
                        </h3>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className='hidden lg:flex items-center'>
                    <ul className='flex space-x-8 font-semibold text-[#101727]'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`transition-colors duration-200 text-sm tracking-wide ${
                                        pathname === link.href
                                            ? "text-[#4F39F6]" 
                                            : "hover:text-[#4F39F6] text-gray-600"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side Actions */}
                <div className='flex space-x-6 items-center'>
                 
                    <Link href="/my-cart" className={`relative cursor-pointer transition-colors ${pathname === '/my-cart' ? 'text-[#4F39F6]' : 'text-gray-700 hover:text-[#4F39F6]'}`}>
                        <ShoppingCart size={22} />
                    </Link>
                    
                    {/* Desktop Auth Section */}
                    <div className='hidden lg:flex space-x-5 items-center'>
                        {isPending ? (
                            // Loading state placeholder to prevent layout shift
                            <div className="h-9 w-24 bg-gray-100 animate-pulse rounded-full"></div>
                        ) : session?.user ? (
                            // Logged In State
                            <div className="flex items-center gap-4">
                                <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                                    <div className="h-9 w-9 rounded-full bg-gray-100 border-2 border-transparent group-hover:border-[#4F39F6] transition-all overflow-hidden flex items-center justify-center">
                                        {session.user.image ? (
                                            <Image src={session.user.image} alt={session.user.name} className="h-full w-full object-cover" width={36} height={36} />
                                        ) : (
                                            <User className="h-5 w-5 text-gray-400" />
                                        )}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#4F39F6] transition-colors">
                                        {session.user.name}
                                    </span>
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                                    title="Log out"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            // Logged Out State
                            <>
                                <Link href="/login">
                                    <p className='font-semibold text-sm text-gray-600 hover:text-[#4F39F6] transition-colors cursor-pointer'>Login</p>
                                </Link>
                                <Link href="/register">
                                    <button className='px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition-all shadow-md shadow-purple-500/20'>
                                        Get Started
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div 
                        className='lg:hidden cursor-pointer text-gray-700 hover:text-[#4F39F6]' 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className='lg:hidden w-11/12 mx-auto mt-4 bg-gray-50 p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5 duration-200'>
                    <ul className='flex flex-col space-y-3 font-semibold text-[#101727]'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-1 text-sm ${
                                        pathname === link.href
                                            ? "text-[#4F39F6]" 
                                            : "text-gray-600 hover:text-[#4F39F6]"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <hr className="border-gray-200" />
                    
                    {/* Mobile Auth Section */}
                    <div className='flex flex-col space-y-3'>
                        {session?.user ? (
                            // Mobile Logged In State
                            <>
                                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2">
                                    <div className="h-10 w-10 rounded-full bg-white shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center">
                                        {session.user.image ? (
                                            <Image src={session.user.image} alt={session.user.name} className="h-full w-full object-cover" width={36} height={36} />
                                        ) : (
                                            <User className="h-6 w-6 text-gray-400" />
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-800">{session.user.name}</span>
                                       
                                    </div>
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                >
                                    <LogOut size={16} />
                                    Log Out
                                </button>
                            </>
                        ) : (
                            // Mobile Logged Out State
                            <>
                                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                    <p className='font-semibold text-sm text-center text-gray-600 hover:text-[#4F39F6] py-1'>Login</p>
                                </Link>
                                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                                    <button className='w-full py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                                        Get Started
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;