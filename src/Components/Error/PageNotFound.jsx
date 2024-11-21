import React from "react";
import Layout from "../Home/Layout";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Layout>
      <section className="w-full h-[80vh] flex items-center justify-center flex-col gap-2"> 
        <h1 className="text-4xl text-rose-600 animate-bounce font-semibold">404 Error!</h1>
        <h2 className="text-gray-700 text-lg">Page Not Found</h2>
        <Link to={`/`} className = "bg-sky-600 text-sky-50 px-6 py-2 text-lg font-semibold rounded-lg ">Return to Home</Link>
      </section>
    </Layout>
  );
}

export default PageNotFound;
