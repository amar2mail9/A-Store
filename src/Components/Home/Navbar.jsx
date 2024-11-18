import React, { useContext, useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../App";

function Navbar() {
  // Accessing the number of items in the cart from context
  const { numberOfCart } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [productsTitle, setProductsTitle] = useState("");
  const [products, setProducts] = useState([]);
  const [searchItemsContainer, setSearchItemsContainer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const [showSearchBox, setShowSearchBox] = useState(false);

  // Menu items for navigation
  const menuItems = [
    { name: "Home", Path: "/" },
    { name: "Products", Path: "/all-products" },
    { name: "About Us", Path: "/about-us" },
    { name: "Contact Us", Path: "/contact-us" },
  ];

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    setProducts(data.products);
  };

  const product = products.filter((items) => {
    return items.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchItemsContainer(false);
    } else {
      setSearchItemsContainer(true);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* Header with sticky positioning */}
      <header className="bg-gray-900 sticky top-0 z-50">
        <nav className="flex items-center justify-between lg:w-11/12 w-10/12 mx-auto py-3">
          {/* Logo Section */}
          <div>
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-orange-500">
              Shopping <span className="text-gray-100">Hub</span>
            </h1>
          </div>

          {/* Desktop Menu */}
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

          {/* Navbar Right Section (Icons and Cart) */}
          <div className="flex gap-3 items-center">
            {/* Search Cart Icon */}
            <button
              onClick={() => {
                setShowMenu(false);
                setShowSearchBox(!showSearchBox);
              }}
              className="text-orange-100 text-2xl lg:hidden block"
            >
              <IoSearchOutline />
            </button>

            {/* Search Input section */}
            <div className="relative lg:block hidden bg-gray-700 w-[300px] rounded-xl border-1 border-orange-100">
              <input
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                className="py-1 px-4 outline-none border-none text-orange-100 rounded-xl w-full bg-transparent"
                placeholder="Search..."
              />
              <IoSearchOutline className="absolute text-orange-100 text-2xl top-1 right-2 bg-gray-700" />

              {/* Search container */}
              {searchItemsContainer && searchQuery.trim() !== "" && (
                <div className="fixed w-[300px] overflow-x-hidden overflow-y-scroll lg:block hidden top-16 h-48 shadow-xl rounded-lg p-2 bg-gray-700 scrollbar-none">
                  {product.length === 0 ? (
                    <h3 className="text-rose-500 text-center">
                      Products Not Available
                    </h3>
                  ) : (
                    product.map((item, index) => (
                      <h3 key={index}>
                        <Link
                          to={`/products/${item.id}`}
                          className="text-orange-500 hover:text-sky-500 duration-500 delay-500"
                        >
                          {item.title}
                        </Link>
                      </h3>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Shopping Cart Icon */}
            <Link to={"/order-summery"}>
              <button className="text-gray-400 flex items-center justify-center font-semibold text-3xl">
                <LuShoppingCart />
                {/* Display number of items in the cart */}
                <sup className="text-orange-500">{numberOfCart}</sup>
              </button>
            </Link>

            {/* User Profile Icon */}
            <button className="text-orange-200 text-2xl font-semibold">
              <FaRegCircleUser />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                setShowSearchBox(false);
                setShowMenu(!showMenu);
              }}
              className="text-orange-500 text-3xl lg:hidden block"
            >
              {showMenu ? <RiCloseLargeFill /> : <IoMenu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Small Screen Mobile Menu (when toggle is true) */}
      {showMenu && (
        <div className="fixed z-40 w-full lg:hidden block duration-500">
          <div className="flex flex-col items-center gap-2 justify-center my-2 mx-4 rounded-md shadow-lg shadow-gray-500 bg-gray-800 text-white font-semibold text-md p-2">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.Path;
              return (
                <Link
                  to={item.Path}
                  key={index}
                  className={`w-full py-1 text-center rounded-md hover:bg-orange-500 hover:text-orange-100 ${
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

      {/* Search Box for  small screen */}
      {showSearchBox && (
        <div className="fixed lg:hidden block  shadow-xl rounded-lg p-2 w-full z-50 bg-orange-200 duration-300 delay-300">
          <div className="   py-1   w-11/12 mx-auto">
            <input
              value={searchQuery}
              onChange={handleSearch}
              type="text"
              className=" w-full px-4 py-1 outline-none text-sm rounded-lg bg-gray-600 text-orange-50 font-semibold    "
              placeholder="Search..."
            />
          </div>
          {searchItemsContainer && (
            <div className="overflow-y-scroll h-48   scrollbar-none ">
              {product.length === 0 ? (
                <h3 className="text-rose-500 text-center">
                  Products Not Available
                </h3>
              ) : (
                product.map((item, index) => (
                  <h3 key={index}>
                    <Link
                      to={`/products/${item.id}`}
                      className="text-gray-900 hover:text-sky-500 duration-300 delay-300"
                    >
                      {item.title}
                    </Link>
                  </h3>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
