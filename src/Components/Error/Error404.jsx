import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen w-10/12 mx-auto gap-5">
        <h4 className="text-rose-500 text-3xl">Error!</h4>
        <h4 className="text-rose-500 text-9xl">404</h4>{" "}
        <p className="text-slate-500 text-2xl">Page Not Found</p>
        <Link
          to={"/"}
          className="bg-slate-50 border border-slate-600 text-lg py-1 px-2"
        >
          Back To Home Page
        </Link>
      </div>
    </Layout>
  );
}

export default Error404;
