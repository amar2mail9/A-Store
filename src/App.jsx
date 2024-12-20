import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import PageNotFound from "./Components/Error/PageNotFound";
import CategoryWise from "./Components/CategoryWiseShowData/CategoryWise";
import SingleProduct from "./Components/SingleProductsPage/SingleProduct";
import { toast, ToastContainer } from "react-toastify";

import ShoppingCart from "./Components/Page/ShopingCart/ShoppingCart";
import AboutUs from "./Components/Page/Abouts/AboutUs";
import ContactUs from "./Components/Page/contactus/ContactUs";
import CategoryPage from "./Components/Page/Categories/CategoryPage";
import ProductsPage from "./Components/Page/Products/ProductsPage";
export const ProductContext = createContext();
function App() {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [smartphones, setSmartPhones] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [groceries, setGroceries] = useState([]);

  // Shopping Value

  const [cartValue, setCartValue] = useState([]);

  const getData = {
    fetchProductsData: async function (url) {
      try {
        let res = await fetch(`https://dummyjson.com/${url}`);
        let result = await res.json();

        if (url === "products") {
          setFetchProducts(result.products);
        } else if (url === "products/category/smartphones") {
          setSmartPhones(result.products);
        } else if (url === "products/category/beauty") {
          setBeauty(result.products);
        } else if (url === "products/category/furniture") {
          setFurniture(result.products);
        } else if (url === "products/category/laptops") {
          setLaptops(result.products);
        } else if (url == "products/category/groceries") {
          setGroceries(result.products);
        }
      } catch (error) {
        console.error(error);
      }
    },
    handleClick: function (item) {
      let isAlible = cartValue.some((product) => item.id === product.id);
      if (isAlible) {
        toast("Product Already Added", {
          type: "warning",
        });
        return false;
      } else {
        setCartValue((prev) => [...prev, item]);
      }
    },
  };

  let numberOfCart = cartValue.length;
  return (
    <ProductContext.Provider
      value={{
        getData,
        fetchProducts,
        smartphones,
        beauty,
        furniture,
        laptops,
        cartValue,
        numberOfCart,
        groceries,
        handleClick: getData.handleClick,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/products/category/:category"
            element={<CategoryWise />}
          ></Route>
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/order-summery" element={<ShoppingCart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/all-products" element={<ProductsPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
