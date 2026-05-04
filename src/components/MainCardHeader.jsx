import React from 'react';

const MainCardHeaderPage = () => {
    return (
       <div>
            <div className='container mx-auto my-20 '>
                <div className='w-1/2 mx-auto space-y-5'>
                    <h1 className='font-bold text-5xl text-center'>Premium Digital Tools</h1>
                    <p className='text-center text-lg text-taupe-400'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                    <div className=' flex justify-center mt-10 '>

                        <div className="tabs tabs-box gap-5 bg-transparent justify-center">
                            <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full [--tab-bg:#4F39F6] border-2 text-black checked:text-white  border-purple-500" aria-label="Products"  />

                            <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full [--tab-bg:#4F39F6]   border-2  text-black checked:text-white border-purple-500" aria-label="Cart" />

                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default MainCardHeaderPage;