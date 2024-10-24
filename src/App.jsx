import React from "react";
import Navbar from "./Components/Home/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import PageNotFound from "./Components/Error/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
