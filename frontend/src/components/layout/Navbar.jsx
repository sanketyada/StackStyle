import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
function Navbar() {
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setshowSearch } =
    useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img className="w-34" src={assets.logo} alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="hidden  w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>Collections</p>
          <hr className="hidden  w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="hidden  w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="hidden  w-2/4 border-none h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=>setshowSearch(!showSearch)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt4">
            <div className="flex  flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Ordres</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative inline-block">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />

          <p className="absolute -right-2 -bottom-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] text-white leading-none">
            10
          </p>
        </Link>

        <img
          onClick={() => {
            setVisible(!visible);
          }}
          src={`${visible ? assets.menu_icon : assets.menu_icon}`}
          className="w-5  sm:hidden cursor-pointer"
          alt=""
        />
      </div>

      {/* //Mobile view */}
{/* Mobile view */}
<div
  className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out sm:hidden
  ${visible ? "translate-x-0" : "translate-x-full"}`}
>
  <div className="flex flex-col text-gray-600 h-full">
    <div
      onClick={() => setVisible(false)}
      className="flex items-center gap-2 p-3"
    >
      <img
        src={assets.dropdown_icon}
        className="h-4 rotate-180 cursor-pointer"
        alt=""
      />
      <p className="cursor-pointer">Back</p>
    </div>

    <NavLink
      className="py-3 pl-6 border-b"
      onClick={() => setVisible(false)}
      to={"/"}
    >
      Home
    </NavLink>

    <NavLink
      className="py-3 pl-6 border-b"
      onClick={() => setVisible(false)}
      to={"/collection"}
    >
      Collection
    </NavLink>

    <NavLink
      className="py-3 pl-6 border-b"
      onClick={() => setVisible(false)}
      to={"/about"}
    >
      About
    </NavLink>

    <NavLink
      className="py-3 pl-6 border-b"
      onClick={() => setVisible(false)}
      to={"/contact"}
    >
      Contact
    </NavLink>
  </div>
</div>

    </div>
  );
}

export default Navbar;
