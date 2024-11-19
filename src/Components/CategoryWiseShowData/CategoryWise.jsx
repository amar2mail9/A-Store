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
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-3 my-4">
            {product.map((items, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="p-4 relative flex items-center justify-center flex-col bg-white rounded-lg shadow-lg shadow-slate-600 hover:scale-105">
                    {/* Discount section */}
                    <div className="absolute top-[10%] left-0 shadow-md shadow-slate-4100 text-[.8rem] rounded-r-lg text-green-50 px-2 py-1 bg-green-600">
                      <span>{items.discountPercentage}%</span>{" "}
                      <sub className="text-blue-100">OFF</sub>
                    </div>

                    <Link
                      to={`/products/${items.id}`}
                      className="mx-auto block rounded overflow-hidden"
                    >
                      <img
                        alt={items.title}
                        className="w-48 h-48"
                        src={`${items.thumbnail}`}
                      />
                    </Link>

                    <div className="mt-4 flex flex-col justify-center items-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {items.category}
                      </h3>
                      <h2 className="text-sky-700 title-font text-xs font-medium">
                        {items.title.length >= 20
                          ? `${items.title.slice(0, 20)}...`
                          : items.title}
                      </h2>
                      <small className="flex gap-1 items-center">
                        <span className="text-sm font-semibold">Price:</span>
                        <del className="text-rose-500">${items.price}</del>
                        <span className="text-green-600 text-sm">
                          {(
                            (items.price * (100 - items.discountPercentage)) /
                            100
                          ).toFixed(2)}
                        </span>
                      </small>
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
