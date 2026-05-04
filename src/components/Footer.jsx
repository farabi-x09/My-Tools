import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] p-10'>

            <div className='w-11/12 mx-auto flex flex-wrap justify-center lg:justify-between text-white py-10 gap-10'>
                <div className='max-w-85'>
                    <h1 className='font-semibold text-3xl mb-4'>DigiTools</h1>
                    <p className='opacity-50'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h1 className='mb-2 text-xl'>Product</h1>
                    <ul className='opacity-50 space-y-2'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-2 text-xl'>Company</h1>
                    <ul className='opacity-50 space-y-2'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-2 text-xl'>Resources</h1>
                    <ul className='opacity-50 space-y-2'>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-2 text-xl'>Social Links</h1>
                    <div className='mt-4 flex gap-4'>
                        <div className='w-10 h-10 bg-white text-[#101727] flex items-center justify-center rounded-full'>
                            <FaInstagramSquare />
                            </div>
                        <div className='w-10 h-10 bg-white text-[#101727] flex items-center justify-center rounded-full'>
                            <FaFacebookSquare />
                        </div>
                        <div className='w-10 h-10 bg-white text-[#101727] flex items-center justify-center rounded-full'>
                            <FaXTwitter />
                        </div>
                    </div>

                </div>
            </div>

            <div className="divider divider-info opacity-20 container mx-auto"></div>

            <div className='flex justify-center md:justify-between flex-wrap mt-10 text-white opacity-50 container mx-auto space-y-10'>
                <p>
                    © 2026 Digitools. All rights reserved.
                </p>
                <div className='flex
                justify-between gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;