import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header';

const SearchProduct = (props) => {
    const [searchInput , setSearchInput] = useState([]);
    useEffect(()=>{
        axios.get(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${props.category_id}`).then((res)=>{
            setSearchInput(res.data.products)    
            console.log('resdata',res.data.products);
        })
    },[])
    
  useEffect(()=>{
        if(props.category_name){
            if(searchInput.length==0){
                return false
            } else {
                // console.log('search',searchInput);
                // setSearchInput(searchInput)
                <Header searchInput={searchInput}/>
        }
        }
  },[searchInput])
    return (
        <div>
        </div>
    )
}

export default SearchProduct
