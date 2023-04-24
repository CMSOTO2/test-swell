// 'use client';
// import { swell } from './init/client';
// import { useEffect, useState } from 'react';
// // import { cartItem } from 'swell-js/types/cart';

// export const useCart = () => {
//   const [cart, setCart] = useState<swell.Cart>();

//   const addItem = async (item: cartItem) => {
//     const cart = await swell.cart.addItem(item);
//     // setCart(cart);
//   };

//   const removeItem = async (item: string) => {
//     const cart = await swell.cart.removeItem(item);
//     // setCart(cart);
//   };

//   const getCart = async () => {
//     let cart = (await swell.cart.get()) || {};
//     setCart(cart);
//   };

//   useEffect(() => {
//     getCart();
//   }, []);
// };
