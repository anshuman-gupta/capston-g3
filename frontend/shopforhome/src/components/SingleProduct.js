import React from 'react'
import { useParams } from "react-router-dom";
import data from '../Assets/decor-data';

const SingleProduct = () => {
    const { productId } = useParams()
    const img_URL = data.map((product)=>{
              if(product.id === productId)
                return product.image
            })
  return (
    <div className='prodkt-container'>
      <div className='row'>
          <div className='prodkt-display col'>
              <img src={img_URL}></img>
          </div>
          <div className='prodkt-details col'>
          
          </div>
      </div>
    </div>
  )
}

export default SingleProduct;
