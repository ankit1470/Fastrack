import "../Styles/AllProducts.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {fetchData} from '../Redux/action'
import {useParams} from "react-router-dom" ;
import Navbar from "./Navbar";
 
const AllProducts = () => {
//   const [products, setProducts] = useState([]);
// useEffect(() => {
//   fetchProducts();
// }, []);
// const fetchProducts = () => {
//   axios
//     .get('http://localhost:8080/products')
//     .then((res) => {
//       console.log(res);
//       setProducts(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


  const company = useSelector((store)=>store.companyData.company)

  const dispatch = useDispatch()
  console.log(company)
  useEffect(() => {
    if(company?.length===0){
dispatch(fetchData())
    }
  },[dispatch,company?.length])

return (
    <div>
      <Navbar/>
      <h1 className="title">PRODUCTS</h1>
    
      <div className='item-containe'>
        {company.map((product) => (
          <Link to={`/AllProducts/${product.id}`}>
          <div className='cardp' key={product.id}>
        <img className="image" src={product.img} alt='' />
        
            <p className="t">{product.Title}</p>
            <p className="p">Price:{product.price}₹</p>
          </div>
           </Link>
        ))}
      </div>
   
    </div>
  );
};
export default AllProducts;

