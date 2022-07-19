import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {fetchOrders} from "../Redux/action"
function Orders() {
  const dispatch = useDispatch()
  const orders = useSelector(store=>store.companyData.orders)
  console.log(orders)
  useEffect(()=>{
dispatch(fetchOrders())
  },[dispatch])
  return (
    <div>Orders</div>
  )
}

export default Orders