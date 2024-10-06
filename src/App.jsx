import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Products01 from "./Components/Products01";
import Slug from "./Components/Products/Slug";
import Error404 from "./Components/Error/Error404";
// remix icon
import "remixicon/fonts/remixicon.css";
import OrderSummary from "./Components/Products/OrderSummary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products01 />} />
        <Route path="/products/:id" element={<Slug />} />{" "}
        {/* Dynamic route for product details */}
        <Route path="/products/ordersummary" element={<OrderSummary />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
