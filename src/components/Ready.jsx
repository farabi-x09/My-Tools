import React from 'react';

const Ready = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-10'>

            <div className='container mx-auto space-y-5 py-20 text-center'>
                <h1 className='font-black text-4xl md:text-5xl'>Ready to Transform Your Workflow?</h1>
                <p className='text-lg opacity-90'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                <div className='flex gap-5 justify-center'>
                    <button className='btn rounded-full bg-white text-[#4F39F6] font-bold '>
                        Explore Products
                    </button>
                    <button className='btn rounded-full bg-transparent text-white font-bold'>
                       View Pricing
                    </button>
                </div>
                <p className='opcity-90'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Ready;