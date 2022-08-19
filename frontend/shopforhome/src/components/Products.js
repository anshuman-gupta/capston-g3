import React,{useEffect, useState} from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import data from '../Assets/decor-data';

 const Products = () => {
    
    const [searchItem,setSearchItem] = useState("")
    const navigate = useNavigate()
    const [products,setProducts] = useState(data)

    return (
        <div className='products-page'>
            <div className='title'>
                <h1>Products</h1>
                <div className='title-underline'></div>
            </div>
            <div class="input-group mb-3 search-bar">
              <input type="text" className="form-control" onChange={(e)=>{setSearchItem(e.target.value)}} placeholder="search bedrooms..."/>
              <span class="input-group-text" id="basic-addon2">search</span>
            </div>
            <div className='products-container'>
                {
                    products.filter((product,index)=>{
                      if(searchItem === "")
                        return product
                      else if(product.name.toLowerCase().includes(searchItem.toLowerCase()))
                        return product
                    }).map((product,index)=>{
                        return <div key={index}  className='product-card'>
                                    <img className='product-image' src={product.image} alt={product.name} width="100%" height="300" />
                                    <div className='product-details'>
                                        <div className='title-price'>
                                            <h3>{product.name}</h3>
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                    <NavLink to={`/products/${product.id}`} className='link'><button className='btn btn-outline-dark'>more</button></NavLink>
                                </div>
                    })
                    
                }
            </div>
        </div>
    )
    }

export default Products
