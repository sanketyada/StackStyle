import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";
import AdminContext from "../context/AdminContext";

function List() {
  const [list, setList] = useState([]);
  const {token} = useContext(AdminContext)
  const fetchList = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list");
      setList(response.data.products);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handelRemoveItem = async (id) => {
    try {
      const response = await axios.post(backendURL + "/api/product/remove", {id},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message)
        await fetchList();
      }
      else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // console.log(list);
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Product List</p>

      <div className="flex flex-col gap-2">
        {/* -------------------List Table Title------------------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Images</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* {Product List} */}

        {list.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <img className="w-12" src={item.image[0]} alt="" />

            <p>{item.name}</p>

            <p>{item.category}</p>

            <p>
              {currency}
              {item.price}
            </p>

            <p
              onClick={()=>handelRemoveItem(item._id)}
              className="text-center cursor-pointer text-red-500"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
