import { ShoppingCart } from "lucide-react";


const Navbar = () => {
    return (
      <div>
 <div className='mx-10 py-5 sticky top-0 z-50 bg-white '>

            <div className='main flex flex-wrap space-y-3 space-x-5 justify-center md:justify-between container mx-auto mt-5  '>
                <div>
                    <h3 className='font-semibold text-3xl text-[#4F39F6]'>
                        DigiTools
                    </h3>
                </div>
                <div className='items-center flex'>
                    <ul className='hidden lg:flex space-x-5 font-semibold text-[#101727] cursor-pointer'>
                        <li>
                            Products
                        </li>
                        <li>
                            Features
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Testimonials
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                </div>
                <div className='flex space-x-5 items-center'>
                    <div className='relative'>
                        <ShoppingCart></ShoppingCart>
                    </div>
                    <div>
                        <p className='font-semibold'>Login</p>
                    </div>
                    <div>
                        <button className='btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
                    </div>
                </div>

            </div>

        </div>
      </div>
    );
};

export default Navbar;