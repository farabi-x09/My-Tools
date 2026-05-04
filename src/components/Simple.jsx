import React from 'react';

const Simple = () => {
    return (
        <div className='p-10'>
            <div className='w-11/12 mx-auto space-y-5 my-20'>
                <h1 className='text-4xl md:text-6xl font-bold text-center'>Simple, Transparent Pricing</h1>
                <p className='text-lg text-center text-gray-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center mt-10 '>
                    {/* cart 1 */}
                    <div className="card  shadow bg-[#F9FAFC] border border-gray-200 mx-auto max-w-96 w-full">
                        <div className="card-body ">

                            <div className="">
                                <h2 className="text-2xl font-bold">Starter</h2>
                                <p className='text-gray-600'>Perfect for getting started</p>
                            </div>
                            <div className='mt-2'>
                                <p>
                                    <span className='text-3xl font-bold'>$0</span>
                                <span className='text-gray-600 text-lg'>/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 h-30 flex flex-col gap-2 text-xs text-gray-600">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn text-white btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                    {/* cart 2  */}
                    <div className="card  max-w-96 w-full shadow bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white  mx-auto relative">
                        <div className="card-body">
                            <span className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FEF3C6] text-[#BB4D00] py-1 px-4 rounded-full text-sm font-bold'>Most popular</span>

                            <div className="">
                                <h2 className="text-2xl font-bold">Pro</h2>
                                <p className='opacity-80'>Best for professionals</p>
                            </div>
                            <div className='mt-2'>
                                <p>
                                    <span className='text-3xl font-bold'>$29</span>
                                <span className='opacity-80 text-lg'>/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 h-30 flex flex-col gap-2 text-xs opacity-80">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn text-primary btn-block  rounded-full">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>
                    {/* cart 3 */}
                    <div className="card  max-w-96 w-full  shadow bg-[#F9FAFC] border border-gray-200 mx-auto ">
                        <div className="card-body">

                            <div className="">
                                <h2 className="text-2xl font-bold">Enterprise</h2>
                                <p className='text-gray-600'>For teams and businesses</p>
                            </div>
                            <div className='mt-2'>
                                <p>
                                    <span className='text-3xl font-bold'>$99</span>
                                <span className='text-gray-600 text-lg'>/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 h-30 flex flex-col gap-2 text-xs text-gray-600">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn text-white btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Contact Sales</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Simple;