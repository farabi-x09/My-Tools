


// 'use client';

// import React, { useState, useEffect } from 'react';
// import Card from './Card';

// const CardPartPage = () => {
//     const [data, setData] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('All');

//     useEffect(() => {
//         const fetchData = async () => {
            
//                 const res = await fetch('https://my-tools-ashy.vercel.app/data.json');
//                 const result = await res.json();
//                 setData(result);
           
//         };

//         fetchData();
//     }, []);

//     // Filter data based on selected category
//     const filteredData = selectedCategory === 'All'
//         ? data
//         : data.filter(item => item.tagType?.toLowerCase() === selectedCategory.toLowerCase());

//     return (
//         <div className='w-11/12 mx-auto'>
           
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5 '>
//                 {filteredData.length > 0 ? (
//                     filteredData.map(item => <Card key={item.id} item={item} />)
//                 ) : (
//                     <p className="text-center col-span-full">No items found for this category.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CardPartPage;


'use client';

import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardPartPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://my-tools-ashy.vercel.app/data.json');
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-5'>
                {data.length > 0 ? (
                    data.slice(0, 4).map(item => <Card key={item.id} item={item} />)
                ) : (
                    <p className="text-center col-span-full">No items found.</p>
                )}
            </div>
        </div>
    );
};

export default CardPartPage;