import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";

function List() {
  const [list, setList] = useState([]);

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
  console.log(list);
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Product List</p>
      <div className="flex flex-col gap-2">
        {/* -------------------List Table Title------------------- */}
        <div className="hidden md:grid grid-cols-[1fr-3fr-1fr-1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Images</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b> 
          <b>Action</b>
        </div>
      </div>
    </>
  );
}

export default List;
