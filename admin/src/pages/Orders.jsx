import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { backendURL } from "../App";
import AdminContext from "../context/AdminContext";


function Orders() {
  const {token} = useContext(AdminContext)
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if(!token){return null}
    try {
      const respone  = await axios.post(backendURL+"/api/order/list",{},{headers:{token}})
      console.log(respone.data)
    } catch (error) {
      
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return <div>Orderdds</div>;
}

export default Orders;
