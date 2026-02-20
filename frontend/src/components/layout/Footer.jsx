import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="py-8">
          <img className="w-32 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            autem ad sapiente aspernatur ab inventore, minus commodi, possimus
            impedit ducimus, cum officiis tempore excepturi quia accusamus
            officia porro nulla nobis culpa aliquam nam aperiam nemo fugiat
            totam. Voluptatum, illo quis.
          </p>
        </div>

        <div className="py-8">
          <h1 className="text-xl font-semibold mb-5">COMPANY</h1>
          <ul className="flex flex-col gap-1 text-gray-500">
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Delivery</Link>
            <Link>Privacy Policy</Link>
          </ul>
        </div>

        <div className="py-8">
          <h1 className="text-xl font-semibold mb-5">GET IN TOUCH</h1>{" "}
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+12222222323</li>
            <li>Contact@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center">
        <hr className="text-gray-400" />
        <p className="py-5 text-sm text-center">
          Copyright 1908@ StyleStake.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
