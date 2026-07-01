"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const MyCartPage = () => {
    // Simulating an empty cart for now. 
    // You will later replace this with your actual cart data source.
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="min-h-screen bg-base-50 py-12">
            <div className="w-11/12 mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">My Cart</h1>
                
                {cartItems.length === 0 ? (
                    /* Empty Cart State */
                    <div className="flex flex-col items-center justify-center py-20 px-4 bg-base-100 rounded-2xl shadow-sm border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Cart is Empty</h2>
                        <p className="text-gray-500 mb-8 text-center max-w-md">
                            Looks like you haven't added any tools to your cart yet. Explore our products to find what you need.
                        </p>
                        <Link href="/products" className="btn btn-primary text-white px-8">
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    /* Populated Cart State (For later use) */
                    <div className="bg-base-100 rounded-2xl shadow-sm border border-gray-100 p-6">
                        <p className="text-gray-600">You have {cartItems.length} items in your cart.</p>
                        {/* Map through your cart items here later */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCartPage;