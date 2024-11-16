import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import Banner from "../Banner/Banner";
import HeroSection01 from "../HeroSection/HeroSection01";

import BeutyProducts from "../HeroSection/BeutyProducts";

function HomePage() {
  return (
    <Layout>
      <Banner />
      <HeroSection01 />
      <BeutyProducts />
    </Layout>
  );
}

export default HomePage;
