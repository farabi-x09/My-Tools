import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ item }) => {
     const tagStyle = {
        popular: "text-purple-500 border-purple-500 bg-purple-100",
        "best seller": "text-green-500 border-green-500 bg-green-100",
        new: "text-blue-500 border-blue-500 bg-blue-100"
    };
    return (
         <div className='bg-white shadow-lg rounded-2xl p-5'>
            <div key={item.id} className='space-y-5 p-5 rounded-2xl border-2 border-gray-300 '>
                <div className='flex justify-between '>
                    <Image width={60} height={60} className='w-15 m-5 shadow-2xl rounded-full' src={item.icon} alt={item.name} />
                    <p className={`text-sm px-5 h-10 py-2 -mt-4  rounded-2xl  ${tagStyle[item.tagType]}`}>
                        {item.tagType}
                    </p>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-semibold'>{item.name}</h2>
                   
                  
                </div>
               
                <div>
                    <Link href={`/products/${item.id}`} className=' btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-12 py-2 rounded-full'>View</Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Card;
