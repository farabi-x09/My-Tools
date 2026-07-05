import React from 'react';
import bannerImg from '@/assets/banner.png';
import { CircleDot, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex  my-20 justify-center 2xl:justify-between flex-wrap-reverse gap-10 items-center'>
                <div className='flex flex-col justify-center space-y-3'>
                    <div className='flex gap-2 text-[#9514FA] p-2 bg-[#E1E7FF] rounded-full w-75'>
                        <CircleDot></CircleDot>
                        <h2>
                            New: AI-Powered Tools Available
                        </h2>
                    </div>
                    <div className='md:w-170'>
                        <h3 className='text-4xl md:text-7xl font-bold leading-tight'>
                            Supercharge Your Digital Workflow
                        </h3>
                        <p className='text-[#627382] text-xl'>
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <Link href="/products">
                            <button className='btn  btn-primary rounded-full'>Explore Products</button>
                        </Link>
                        <a href="https://www.youtube.com/watch?v=TZe5UqlUg0c" target="_blank" rel="noopener noreferrer">
                            <button className='btn btn-primary btn-outline rounded-full '> <Play></Play>  Watch Demo</button>
                       </a>
                    </div>
                </div>
                
                    <div className=''>
                        <Image className='w-150 ' src={bannerImg} alt="" width={200} height={200}/>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;