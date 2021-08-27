import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductList = () => {
    const [product,SetProduct] = useState([]);
    useEffect(()=>{
        axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob').then((res)=>{
            SetProduct(res.data.product_list.products);
            console.log(res.data.product_list.products);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
            <div className="container">
                {
                    product.map((imgProduct,index) => {
                        return <>
                            <div className="cards">
                              <img src={imgProduct.image_urls["x520"]} class="card-img-top" alt={imgProduct.name}/>
                            <div className="cardDetails">
                                <h5 class>{imgProduct.name}</h5>
                                <p>{imgProduct.weight}{imgProduct.weight_unit}</p>
                                <p><span><i class="fas fa-rupee-sign"></i></span>{imgProduct.final_price}</p>
                                <p style={{textDecoration:'line-through'}}><span><i class="fas fa-rupee-sign"></i></span>{imgProduct.price_new}</p>
                                <p>{imgProduct.rating} <span><i class="fas fa-star"></i></span></p>
                                <p>{imgProduct.is_in_stock ? <button style={{ backgroundColor: 'green'}}>ADD TO CART</button> : <button style={{background:'gray'}}>OUT OF STOCK</button>}</p>
                            </div>
                            </div>
                        </>
                    })
                }
               
            </div>
    )
}

export default ProductList
