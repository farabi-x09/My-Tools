


'use client';

import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardPartPage = () => {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchData = async () => {
            
                const res = await fetch('https://my-tools-ashy.vercel.app/data.json');
                const result = await res.json();
                setData(result);
           
        };

        fetchData();
    }, []);

    // Filter data based on selected category
    const filteredData = selectedCategory === 'All'
        ? data
        : data.filter(item => item.tagType?.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className='w-11/12 mx-auto'>
            <details className="dropdown mb-28 text-xl">
                <summary className="btn m-1">
                    Category: {selectedCategory}
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                    <li>
                        <button onClick={() => setSelectedCategory('All')}>All</button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedCategory('New')}>New</button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedCategory('Popular')}>Popular</button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedCategory('Best Seller')}>Best Seller</button>
                    </li>
                </ul>
            </details>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5'>
                {filteredData.length > 0 ? (
                    filteredData.map(item => <Card key={item.id} item={item} />)
                ) : (
                    <p className="text-center col-span-full">No items found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CardPartPage;