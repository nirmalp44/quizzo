"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

export default function OrderProduct() {
    const route= useRouter();
    const handleClick = () => {
        console.log('Order');
        route.push('/');
    }
  return (
    <>
    <div>OrderProduct</div>
    <button onClick= {handleClick}>Order</button>
    </>
  )
}
