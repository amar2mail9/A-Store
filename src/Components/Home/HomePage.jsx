import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import Banner from "../Banner/Banner";
import HeroSection01 from "../HeroSection/HeroSection01";


function HomePage() {
  
  return (
    <Layout>
      <Banner />
      <HeroSection01 />
    </Layout>
  );
}

export default HomePage;
