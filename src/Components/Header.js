import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchProduct from "./SearchProduct";

const Header = (props) => {
  console.log('propsHeader',props);
  const [category, Setcategory] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob"
      )
      .then((res) => {
        Setcategory(res.data.category_list);
        console.log(res.data.category_list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const myFun = () => {
    //   Setsearch(props.searchInput)
    console.log('searchheader',props.searchInput);
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1 className="container mt-2">Our Products</h1>
      {category.map((list) => {
        return (
            <>
          <div className="containers">
            <a onClick={()=>myFun()}><img
              className="img_category"
              key={list.category_id}
              src={list.category_image}
              alt="category_img"
            ></img></a>
            <span className="centered">{list.category_name}<SearchProduct category_name={list.category_name} category_id={list.category_id} /></span>
          </div>
           
          </>
        );
      })}
    </div>
  );
};

export default Header;
