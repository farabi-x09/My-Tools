

'use client';

import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "My Cart", href: "/my-cart" },
    ];

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

             
                <div className='flex space-x-6 items-center'>
                 
                    <Link href="/my-cart" className={`relative cursor-pointer transition-colors ${pathname === '/my-cart' ? 'text-[#4F39F6]' : 'text-gray-700 hover:text-[#4F39F6]'}`}>
                        <ShoppingCart size={22} />
                    </Link>
                    
                    <div className='hidden lg:flex space-x-5 items-center'>
                        <Link href="/login">
                            <p className='font-semibold text-sm text-gray-600 hover:text-[#4F39F6] transition-colors cursor-pointer'>Login</p>
                        </Link>
                        <Link href="/register">
                            <button className='px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition-all shadow-md shadow-purple-500/20'>
                                Get Started
                            </button>
                        </Link>
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
                    <div className='flex flex-col space-y-3'>
                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                            <p className='font-semibold text-sm text-center text-gray-600 hover:text-[#4F39F6] py-1'>Login</p>
                        </Link>
                        <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                            <button className='w-full py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;