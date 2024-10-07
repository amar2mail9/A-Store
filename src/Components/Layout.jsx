import React, { useState } from "react";

import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="w-full">
      <Navbar />
      <section>{children}</section>
    </div>
  );
}

export default Layout;
