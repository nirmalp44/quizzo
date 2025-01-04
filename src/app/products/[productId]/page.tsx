import { Metadata } from 'next';
import React from 'react';

type Props = {
    params: {
        productId: string,
    },
}

// export const generateMetadata = ({ params, }: Props):Metadata => {
//     return {
//         title: `Product ${params.productId}`,
//         description: `Product ${params.productId} description`,
//     };
// };

export const generateMetadata = async ({ params, }: Props):Promise< Metadata> => {
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`);
        }, 1000);
    })
    return {
        title: `Product ${title}`,
        description: `Product ${params.productId} description`,
    };
};

export default function ProductDetails({ params, }: Props){
    return (
        <div>ProductDetails {params.productId}</div>
    );
}
