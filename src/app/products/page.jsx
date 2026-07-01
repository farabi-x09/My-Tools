"use client"
import Card from '@/components/Card';
import React, { useState, useEffect } from 'react';

const CardPartPage = () => {
    const [data, setData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('All');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://my-tools-ashy.vercel.app/data.json');
            const result = await res.json();
            setData(result);
        };

        fetchData();
    }, []);

    // Filter data based on selected status using 'tagType' (or 'tag') from your JSON
    const filteredData = selectedStatus === 'All'
        ? data
        : data.filter(item => {
            // We check tagType first. If it doesn't exist, we fallback to tag.
            const statusTag = item.tagType || item.tag || '';
            return statusTag.toLowerCase() === selectedStatus.toLowerCase();
        });

    // Define your status options here
    const statuses = ['All', 'New', 'Popular', 'Pro']; 

    return (
        <div className='w-11/12 mx-auto my-12 min-h-screen'>
            {/* Header & Filter Dropdown */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-800">Explore Tools</h1>
                
                {/* Status Dropdown */}
                <details className="dropdown dropdown-end">
                    <summary className="btn bg-primary text-white border-none hover:bg-primary-focus">
                        Status: {selectedStatus}
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-40 p-2 shadow-xl border border-gray-100 mt-1">
                        {statuses.map((status) => (
                            <li key={status}>
                                <button 
                                    className={`hover:bg-base-200 ${selectedStatus === status ? 'active' : ''}`}
                                    onClick={(e) => {
                                        setSelectedStatus(status);
                                        e.currentTarget.closest('details').removeAttribute('open'); // Close dropdown
                                    }}
                                >
                                    {status}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
            </div>

            {/* Products Grid Layout */}
            {filteredData.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500">No items found matching your filter.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredData.map((item) => (
                        <Card key={item.id || item._id || item.name} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardPartPage;