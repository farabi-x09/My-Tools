import React from 'react';
import userImg from '@/assets/user.png';
import productsImg from '@/assets/package.png';
import rockatImg from '@/assets/rocket.png';
import Image from 'next/image';

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] px-10 py-10 my-20'>
            <div className='w-11/12 mx-auto my-20 space-y-5'>
                <h1 className='text-4xl md:text-6xl font-bold text-center'>Get Started in 3 Steps</h1>
                <p className='text-lg text-center  text-gray-600'>
                    Start using premium digital tools in minutes, not hours.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
                    <div className="card shadow  max-w-[400px] mx-auto bg-white">
                        <div className="card-body items-center text-center space-y-4 relative mb-10">
                            <span className='text-white absolute top-4 right-4 w-10 h-10 flex justify-center items-center bg-[#4F39F6] rounded-full'>01</span>
                            <div className=' bg-[#f5e8ff] flex items-center justify-center rounded-full w-20 h-20 '>
                                <Image className='w-15 h-15' src={userImg} alt="User" />
                            </div>
                            <h2 className="card-title text-2xl">Create Account</h2>
                            <p className='text-lg text-gray-600'>Sign up for free in seconds. No credit card required to get started.</p>

                        </div>
                    </div>
                    <div className="card shadow  max-w-[400px] mx-auto bg-white">
                        <div className="card-body items-center text-center space-y-4 relative mb-10">
                            <span className='text-white absolute top-4 right-4 w-10 h-10 flex justify-center items-center bg-[#4F39F6] rounded-full'>02</span>
                            <div className=' bg-[#f5e8ff] flex items-center justify-center rounded-full w-20 h-20 '>
                                <Image className='w-15 h-15' src={productsImg} alt="User" />
                            </div>
                            <h2 className="card-title text-2xl">Choose Products</h2>
                            <p className='text-lg text-gray-600'>Browse our catalog and select the tools that fit your needs.</p>

                        </div>
                    </div>
                    <div className="card shadow  max-w-[400px] mx-auto bg-white">
                        <div className="card-body items-center text-center space-y-4 relative mb-10">
                            <span className='text-white absolute top-4 right-4 w-10 h-10 flex justify-center items-center bg-[#4F39F6] rounded-full'>03</span>
                            <div className=' bg-[#f5e8ff] flex items-center justify-center rounded-full w-20 h-20 '>
                                <Image className='w-15 h-15' src={rockatImg} alt="User" />
                            </div>
                            <h2 className="card-title text-2xl">Start Creating</h2>
                            <p className='text-lg text-gray-600'>Download and start using your premium tools immediately.</p>

                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    );
};

export default GetStarted;