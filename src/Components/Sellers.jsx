import "../Styles/Sellers.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link } from "react-router-dom"

 
const Sellers = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('http://localhost:8080/frontproducts')
    .then((res) => {
      console.log(res);
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (
    <div>
      
      <h1 className="title">TRENDING PRODUCTS</h1>
    
        
      <div className='item-container'>
        {products.map((product) => (
           <Link to="/AllProducts">
          <div className='card' key={product.id}>
            <img className="img" src={product.img} alt='' />
        
            <p>{product.Title}</p>
          
          </div>
            </Link>
        ))}
      </div>
   
    </div>
  );
};
export default Sellers;

