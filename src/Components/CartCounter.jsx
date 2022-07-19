import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {fetchCart} from "../Redux/action";
import {useEffect} from "react"

function CartCounter() {
    const cart = useSelector(store => store.companyData.cart)
console.log(cart)
    const dispatch = useDispatch();
    useEffect(()=>{
   if(cart?.length===0){
    dispatch(fetchCart())
   }
    },[cart?.length,dispatch])

  return (
    <div>
      {cart?.length ? cart.length:0}
    </div>
  )
}

export default CartCounter
