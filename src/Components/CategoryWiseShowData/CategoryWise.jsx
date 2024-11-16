import React, { useContext, useEffect, useState } from "react";
import Layout from "../Home/Layout";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../App";
import { motion } from "framer-motion";
import { Spinner } from "react-bootstrap";

export default function CategoryWise() {
  const param = useParams();
  const [product, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch(
        `https://dummyjson.com/products/category/${param.category}`
      );
      let data = await res.json();
      setProducts(data.products);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <section className="w-11/12 mx-auto ">
        <div className="bg-orange-100 my-5 rounded-lg">
          <h1 className="text-orange-600 font-semibold font-sans text-3xl text-center py-4 animate-pulse ">
            {param.category.toUpperCase()}
          </h1>
        </div>

        {product.length === 0 ? (
          <div className="flex justify-center my-16">
            <Spinner variant="warning" />
          </div>
        ) : (
          <div className="grid my-8 w-10/12 mx-auto  xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 rounded-lg  items-center ">
            {product.map((items, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className=" p-4   bg-white rounded-lg shadow-lg shadow-slate-600 hover:scale-105 ">
                    <Link
                      to={`/products/${items.id}`}
                      className="xl:w-3/4  mx-auto h-48 block relative  rounded overflow-hidden"
                    >
                      <img
                        alt={items.title}
                        className="object-cover  object-center  "
                        src={`${items.thumbnail}`}
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {param.category}
                      </h3>
                      <h2 className="text-sky-700 title-font xl:text-lg text-md font-medium">
                        {items.title}
                      </h2>
                      <span className="mt-1  lg:flex-row   flex gap-2 items-center font-semibold">
                        {" "}
                        <span> Price:</span>{" "}
                        <del className="text-rose-500 ">
                          {" "}
                          ${items.price.toFixed(2)}
                          <label className="text-orange-500 ml-1">
                            {items.discountPercentage}% off
                          </label>
                        </del>
                        <h4 className=" text-green-500">
                          $
                          {`${(
                            (items.price / 100) *
                            (100 - items.discountPercentage)
                          ).toFixed(2)} `}
                        </h4>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
}
