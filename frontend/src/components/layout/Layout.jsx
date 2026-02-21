import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBar from "../section/CommonComponet/SearchBar";

function Layout() {
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
