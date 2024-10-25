import React, { useContext, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { LuMenuSquare, LuShoppingCart } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../App";

function Navbar() {
  const { numberOfCart } = useContext(ProductContext);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      Path: "/",
    },
    {
      name: "Products",
      Path: "/all-products",
    },
    {
      name: "Category",
      Path: "/category",
    },
    {
      name: "About Us",
      Path: "/about-us",
    },
    {
      name: "Contact Us",
      Path: "/contact-us",
    },
  ];
  return (
    <>
      <header className="bg-gray-900 sticky top-0 z-50">
        <nav className="flex items-center justify-between lg:w-11/12 w-10/12 mx-auto py-3">
          <div>
            {/* logo */}
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-orange-500">
              Shopping <span className="text-gray-100">Hub</span>
            </h1>
          </div>
          <div className="lg:flex md:hidden  lg:gap-8 md:gap-3 sm:gap-2  hidden text-white ">
            {menuItems.map((items, index) => {
              const isActive = location.pathname === items.Path;
              return (
                <Link
                  key={index}
                  to={items.Path}
                  className={` font-semibold text-lg hover:text-gray-300 ${
                    isActive ? "text-sky-500" : "text-white"
                  }`}
                >
                  {items.name}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-3 items-center">
            <div className="lg:flex hidden  relative  items-center rounded-full ">
              <input
                type="text"
                className=" rounded-full border border-slate-500 text-white outline-none text-lg bg-gray-700 px-4 py-1  "
                placeholder="Search..."
              />
              <button className="text-orange-500 text-3xl absolute top-1 right-2 bg-gray-700 rounded-full  ">
                <IoSearchOutline />
              </button>
            </div>

            {/* Search icon */}
            <button className="text-gray-100 font-semibold text-2xl lg:hidden  block">
              <IoSearchOutline />
            </button>
            {/* Shopping cart */}
            <button className="text-gray-400 flex items-center justify-center  font-semibold text-3xl    ">
              <LuShoppingCart />{" "}
              <sup className="text-orange-500">{numberOfCart}</sup>
            </button>

            {/* user icon */}
            <button className="text-orange-200 text-2xl font-semibold ">
              <FaRegCircleUser />
            </button>
            {/* MENU Items */}
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="text-orange-500 text-3xl lg:hidden block"
            >
              {showMenu ? <RiCloseLargeFill /> : <IoMenu />}
            </button>
          </div>
        </nav>
      </header>
      {/* For Small Screen */}

      {showMenu && (
        <div className="fixed w-full duration-500 delay-500">
          <div className=" flex flex-col items-center gap-2 justify-center my-2 mx-4 rounded-md shadow-lg shadow-gray-500 bg-gray-800 text-white font-semibold text-md p-2">
            {menuItems.map((items, index) => {
              const isActive = location.pathname === items.Path;
              return (
                <Link
                  to={items.Path}
                  key={index}
                  className={`w-full py-1 text-center  rounded-md hover:bg-orange-100 hover:text-orange-400  ${
                    isActive ? "text-orange-500 bg-orange-100" : "text-white"
                  }`}
                >
                  {items.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
