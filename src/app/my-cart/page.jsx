
'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import toast from 'react-hot-toast'; 

const MyCartPage = () => {
    // Added clearCart from Context
    const { cartItems, removeFromCart, clearCart } = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        if (cartItems.length > 0) {
            toast.success("Checkout successful! Thank you for your purchase.");
            // Clear the cart completely
            clearCart(); 
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-10 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">My Cart</h1>

            {cartItems.length === 0 ? (
                <div className="text-center bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Your cart is empty!</h2>
                    <Link 
                        href="/products" 
                        className="inline-flex justify-center items-center w-full sm:w-auto px-10 rounded-2xl py-3 bg-[#4F39F6] text-white font-medium rounded-lg hover:bg-[#3d2bcc] transition-colors"
                    >
                        Browse Tools
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                    <div className="space-y-4 mb-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-100 rounded-xl gap-4">
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <Image 
                                        width={48} 
                                        height={48} 
                                        src={item.icon} 
                                        alt={item.name} 
                                        className="w-12 h-12 object-contain" 
                                    />
                                    <div>
                                        <h3 className="font-bold text-base sm:text-lg text-gray-900">{item.name}</h3>
                                        <p className="text-sm font-medium text-gray-500">${item.price}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="w-full sm:w-auto px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-medium transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Total Bill Section */}
                    <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="text-center sm:text-left w-full sm:w-auto">
                            <p className="text-gray-500 font-medium">Total Amount</p>
                            <p className="text-3xl font-bold text-gray-900">${totalPrice}</p>
                        </div>
                        
                        {/* Updated Checkout Button with highly visible inline Tailwind classes */}
                        <button 
                            onClick={handleCheckout}
                            className="flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-[#4F39F6] hover:bg-[#3d2bcc] text-white font-bold text-lg rounded-xl shadow-lg transition-all"
                            style={{ minWidth: '200px' }}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCartPage;