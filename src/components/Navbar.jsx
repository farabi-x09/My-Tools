// import { ShoppingCart } from "lucide-react";
// import Link from "next/link";


// const Navbar = () => {
//     return (
//       <div>
//  <div className='mx-10 py-5 sticky top-0 z-50 bg-white '>

//             <div className='main flex flex-wrap space-y-3 space-x-5 justify-center md:justify-between container mx-auto mt-5  '>
//                 <div>
//                     <h3 className='font-semibold text-3xl text-[#4F39F6]'>
//                         DigiTools
//                     </h3>
//                 </div>
//                 <div className='items-center flex'>
//                     <ul className='hidden lg:flex space-x-5 font-semibold text-[#101727] cursor-pointer'>
//                          <Link href="/"> 
//                         <li>
//                             Home
//                         </li>
//                          </Link>

//                         <Link href="/features"> 
//                         <li>
//                             Features
//                         </li>
//                          </Link>
//                           <Link href="/my-cart"> 
//                         <li>
//                             My Cart
//                         </li>
//                         </Link>
//                     </ul>
//                 </div>
//                 <div className='flex space-x-5 items-center'>
//                     <div className='relative'>
//                         <ShoppingCart></ShoppingCart>
//                     </div>
//                     <div>
//                         <Link href="/login">

//                         <p className='font-semibold'>Login </p>
//                         </Link>
//                     </div>
//                     <div>
//                         <Link href="/register">
                        
//                         <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
//                         </Link>
//                     </div>
//                 </div>

//             </div>

//         </div>
//       </div>
//     );
// };

// export default Navbar;


'use client';

import { ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // মেনু আইটেমগুলোর লিস্ট
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
        { name: "My Cart", href: "/my-cart" },
    ];

    return (
        <div className='mx-10 py-5 sticky top-0 z-50 bg-white'>
            <div className='main flex flex-wrap items-center justify-between container mx-auto mt-5'>
                
                {/* Logo */}
                <div>
                    <h3 className='font-semibold text-3xl text-[#4F39F6]'>
                        DigiTools
                    </h3>
                </div>

                {/* Desktop Menu */}
                <div className='hidden lg:flex items-center'>
                    <ul className='flex space-x-5 font-semibold text-[#101727]'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`transition-colors duration-200 ${
                                        pathname === link.href
                                            ? "text-[#4F39F6]" // Active state color
                                            : "hover:text-[#4F39F6]"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side (Cart, Auth, and Mobile Toggle) */}
                <div className='flex space-x-5 items-center'>
                    <div className='relative cursor-pointer hover:text-[#4F39F6] transition-colors'>
                        <ShoppingCart />
                    </div>
                    
                    <div className='hidden lg:flex space-x-5 items-center'>
                        <Link href="/login">
                            <p className='font-semibold hover:text-[#4F39F6] transition-colors'>Login</p>
                        </Link>
                        <Link href="/register">
                            {/* Note: Fixed bg-linear-to-r to bg-gradient-to-r for valid Tailwind */}
                            <button className='btn px-5 py-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 transition-opacity'>
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div 
                        className='lg:hidden cursor-pointer' 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className='lg:hidden mt-4 bg-gray-50 p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col space-y-4'>
                    <ul className='flex flex-col space-y-4 font-semibold text-[#101727]'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
                                    className={`block ${
                                        pathname === link.href
                                            ? "text-[#4F39F6]" 
                                            : "hover:text-[#4F39F6]"
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
                            <p className='font-semibold text-center hover:text-[#4F39F6]'>Login</p>
                        </Link>
                        <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                            <button className='w-full btn px-5 py-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>
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