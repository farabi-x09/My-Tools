

'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        setIsLoaded(true);
    }, []);

    const addToCart = (product) => {
        const isExist = cartItems.find(item => item.id === product.id);
        
        if (isExist) {
            toast.error("This tool is already in your cart!");
            return;
        }

        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
        toast.success("Successfully added to cart!");
    };

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success("Item removed from cart!");
    };

    // New function to clear the entire cart after checkout
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    if (!isLoaded) return null; 

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);