import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import AdminContext from "../context/AdminContext";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

function Orders() {
  const { token } = useContext(AdminContext);
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const respone = await axios.post(
        backendURL + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (respone.data.success) {
        setOrders(respone.data.ordres);
      } else {
        toast.error(respone.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (e,orderId)=>{
    // console.log(orderId,e.target.value)

   try {
    const response = await axios.post(backendURL + "/api/order/status",{orderId,status:e.target.value},{headers:{token}})
    // console.log(response)
    if(response.data.success){
      await fetchAllOrders()
    }
   } catch (error) {
    console.log(error)
    toast.error(respone.data.message)
   }


  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Orders Page</h3>
      <div className="space-y-4">
        {orders.map((order, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <img
                src={assets.parcel_icon}
                alt="Parcel"
                className="w-12 h-12"
              />

              <div className="flex-1">
                <div className="mb-2">
                  {order.items.map((item, idx) => {
                    if (idx === order.items.length - 1) {
                      return (
                        <p key={idx} className="text-gray-700">
                          {item.name} x {item.quantity}{" "}
                          <span className="text-sm text-gray-500">
                            ({item.size})
                          </span>
                        </p>
                      );
                    } else {
                      return (
                        <p key={idx} className="text-gray-700">
                          {item.name} x {item.quantity}{" "}
                          <span className="text-sm text-gray-500">
                            ({item.size})
                          </span>
                          ,
                        </p>
                      );
                    }
                  })}
                </div>

                <p className="font-semibold text-gray-800">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="text-gray-600 text-sm">
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.country}, {order.address.zipcode}
                  </p>
                </div>
                <p className="text-gray-600 text-sm">{order.address.phone}</p>
              </div>

              <div className="text-right">
                <p className="text-gray-700">Items: {order.items.length}</p>
                <p className="text-gray-700">Method: {order.paymentMethod}</p>
                <p
                  className={`font-semibold ${order.payment ? "text-green-600" : "text-red-600"}`}
                >
                  Payment: {order.payment ? "Done" : "Pending"}
                </p>
                <p className="text-gray-600 text-sm">
                  Date: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-gray-800">
                  {currency}
                  {order.amount}
                </p>
                <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className="mt-2 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
