import Link from 'next/link';
import React from 'react'

export default function Products() {
  return (
    <div>
          <h1>Products</h1>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
        <li><Link href="/products/3" replace> Product 3</Link></li>
          </ul>
    </div>
  );
}
