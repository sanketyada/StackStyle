import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../section/Sidebar";
import Login from "../section/Login";
import { ToastContainer } from "react-toastify";
import AdminContext from "../../context/AdminContext";

function Layout() {

  const {token,setToken} =useContext(AdminContext)

  return (
    <div className="bg-gray-00 min-h-screen">
      <ToastContainer />

      {token === "" ? (
        <Login token={token} setToken={setToken} />
      ) : (
        <>
          {" "}
          <Navbar  />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(50vh,25px)] my-8 text-gray-600 text-base">
              <Outlet  />
            </div>
          </div>
        </>
      )}

      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
