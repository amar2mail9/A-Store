import React, { useContext, useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../App";

function Navbar() {
  const { numberOfCart } = useContext(ProductContext);
  const [showMenu, setShowMenu] = useState(false);
  const [searchDiv, setSearchDiv] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [products, setProducts] = useState([]);

  const location = useLocation();

  const menuItems = [
    { name: "Home", Path: "/" },
    { name: "Products", Path: "/all-products" },

    { name: "About Us", Path: "/about-us" },
    { name: "Contact Us", Path: "/contact-us" },
  ];

  const fetchData = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    setProducts(data.products);
  };

  const handleOnChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setInputSearch(searchValue);
    setSearchDiv(true);

    if (searchValue === "") {
      setInputSearch("");
    } else {
      const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(searchValue)
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header className="bg-gray-900 sticky top-0 z-50">
        <nav className="flex items-center justify-between lg:w-11/12 w-10/12 mx-auto py-3">
          <div>
            {/* Logo */}
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-orange-500">
              Shopping <span className="text-gray-100">Hub</span>
            </h1>
          </div>
          <div className="lg:flex md:hidden lg:gap-8 md:gap-3 sm:gap-2 hidden text-white">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.Path;
              return (
                <Link
                  key={index}
                  to={item.Path}
                  className={`font-semibold text-lg hover:text-gray-300 ${
                    isActive ? "text-sky-500" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-3 items-center">
            <div className="lg:flex hidden relative items-center rounded-full">
              <input
                value={inputSearch}
                onChange={handleOnChange}
                type="text"
                className="rounded-full border border-slate-500 text-white outline-none text-lg bg-gray-700 px-4 py-1"
                placeholder="Search..."
              />
              <button className="text-orange-500 text-3xl absolute top-1 right-2 bg-gray-700 rounded-full">
                <IoSearchOutline />
              </button>

              {searchDiv && (
                <div className="w-full absolute top-14 shadow-lg left-0 bg-gray-100 py-2 px-2 overflow-scroll h-24 rounded-lg shadow-orange-400 text-orange-500 hide-scrollbar">
                  {products.map((item) => (
                    <Link key={item.id} to={`/products/${item.id}`}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search icon for mobile */}
            <button className="text-gray-100 font-semibold text-2xl lg:hidden block">
              <IoSearchOutline />
            </button>
            {/* Shopping cart */}
            <Link to={"/order-summery"}>
              <button className="text-gray-400 flex items-center justify-center font-semibold text-3xl">
                <LuShoppingCart />
                <sup className="text-orange-500">{numberOfCart}</sup>
              </button>
            </Link>
            {/* User icon */}
            <button className="text-orange-200 text-2xl font-semibold">
              <FaRegCircleUser />
            </button>
            {/* Menu items for small screens */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-orange-500 text-3xl lg:hidden block"
            >
              {showMenu ? <RiCloseLargeFill /> : <IoMenu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Small screen menu */}
      {showMenu && (
        <div className="fixed w-full duration-500">
          <div className="flex flex-col items-center gap-2 justify-center my-2 mx-4 rounded-md shadow-lg shadow-gray-500 bg-gray-800 text-white font-semibold text-md p-2">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.Path;
              return (
                <Link
                  to={item.Path}
                  key={index}
                  className={`w-full py-1 text-center rounded-md hover:bg-orange-100 hover:text-orange-400 ${
                    isActive ? "text-orange-500 bg-orange-100" : "text-white"
                  }`}
                >
                  {item.name}
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
