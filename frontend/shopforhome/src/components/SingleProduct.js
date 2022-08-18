import React from 'react'
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { productId } = useParams()
  return (
    <div>
        <h1>{productId}</h1>
    </div>
  )
}

export default SingleProduct;
