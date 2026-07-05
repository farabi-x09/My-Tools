
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Zap, Loader2 } from 'lucide-react';
import Image from 'next/image';

// Import useCart hook
import { useCart } from '../../context/CartContext'; 

const ProductDetailsPage = () => {
    const params = useParams(); 
    const id = params?.id;

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Destructure both addToCart and cartItems from the context
    const { addToCart, cartItems } = useCart();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setIsLoading(true);
                const res = await fetch('https://my-tools-ashy.vercel.app/data.json');
                if (!res.ok) throw new Error("Failed to fetch data");
                
                const data = await res.json();
                const foundProduct = data.find(item => item.id === id);
                
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError("Product not found!");
                }
            } catch (err) {
                console.error("Error fetching details:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchProductDetails();
        }
    }, [id]);

    // Loading State UI
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#4F39F6] animate-spin mb-4" />
                <p className="text-gray-500 font-medium">Loading details...</p>
            </div>
        );
    }

    // Error or Not Found UI
    if (error || !product) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
                    <p className="text-red-500 font-semibold text-lg mb-4">{error || "Product not found"}</p>
                    <Link 
                        href="/" 
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        );
    }

    // Check if the current product is already in the cart
    const isAlreadyInCart = cartItems?.some(item => item.id === product.id);

    // Main UI
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                
                {/* Back Button */}
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4F39F6] transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to tools
                </Link>

                {/* Main Details Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                    
                    {/* Header Section */}
                    <div className="p-8 sm:p-10 border-b border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4F39F6]/5 to-[#9514FA]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                            <div className="flex items-center gap-5">
                                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center p-4 shrink-0">
                                    <Image
                                        width={80}
                                        height={80}
                                        src={product.icon} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                                        {product.tag && (
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                                                <Zap className="w-3 h-3" />
                                                {product.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-lg max-w-md leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* Pricing Box */}
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 min-w-[180px] text-center shrink-0">
                                <p className="text-sm text-gray-500 font-medium mb-1">Subscription</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                                    {product.period && (
                                        <span className="text-gray-500 font-medium">/{product.period}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features & Action Section */}
                    <div className="p-8 sm:p-10 bg-white">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">What's included</h3>
                        
                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {product.features?.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Button */}
                        <button 
                            onClick={() => addToCart(product)}
                            disabled={isAlreadyInCart}
                            className={`w-full sm:w-auto px-8 py-4 font-bold rounded-xl text-lg transition-all duration-300 transform ${
                                isAlreadyInCart 
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:shadow-lg hover:shadow-[#4F39F6]/30 hover:-translate-y-0.5'
                            }`}
                        >
                            {isAlreadyInCart ? 'Already Subscribed' : 'Subscribe Now'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;