import React from 'react';

const Count = () => {
    return (
        <div >
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-10'>
                <div className='w-11/12 mx-auto flex flex-wrap justify-center md:justify-between items-center py-10 gap-10  text-white '>
                    <div className='text-center'>
                        <h3 className='text-5xl md:text-6xl font-bold'>50k+</h3>
                        <p className='text-md md:text-2xl mt-2 text-taupe-300'>Active Users</p>
                    </div>
                  <div className="divider divider-neutral  divider-horizontal hidden md:flex opacity-30"></div>
                    <div className='text-center'>
                        <h3 className='text-5xl md:text-6xl font-bold'>200+</h3>
                        <p className='text-md md:text-2xl mt-2 text-taupe-300'>Premium Tools</p>
                    </div>
                    <div className="divider divider-neutral  divider-horizontal hidden md:flex opacity-30"></div>
                    <div className='text-center'>
                        <h3 className='text-5xl md:text-6xl font-bold'>4.9+</h3>
                        <p className='text-md md:text-2xl mt-2 text-taupe-300'>Rating</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Count;