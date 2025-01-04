import { notFound } from 'next/navigation'
import React from 'react'

export default function ReviewDetails({ params }: { params: { productId: string, reviewId: string } }) {
    if(parseInt(params.reviewId)>1000){
        notFound();
    }
    return (
        <div>
            ReviewDetails productId :{params.productId} & reviewId: {params.reviewId}
        </div>
    )
}
