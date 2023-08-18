import React, { useState } from "react";
import Capture from "../assets/Capture.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const data = useSelector((state) => state.cart.cart);
  return (
    <div className="bg-slate-300">
      <div className=" max-w-[1320px] mx-auto">
        <div className="flex justify-between h-[70px]">
          <div className="flex items-center justify-center">
            <img src={Capture} className="h-[50px] ms-5 md:ms-1" />
          </div>
          <div className="flex">
            <ul className="text-2xl font-senif flex items-center justify-around ">
              <Link to={"/"}>
                <li>Home</li>
              </Link>

              <div className="flex items-center justify-center p-5">
                <Link to={"/cart"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </Link>
                <div className="text-3xl mb-3 text-red-800">{data.length}</div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
