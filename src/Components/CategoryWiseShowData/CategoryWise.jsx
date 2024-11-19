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
                <div className=" p-4  relative  bg-white rounded-lg shadow-lg shadow-slate-600 hover:scale-105 ">
                  {/* discount section */}
                  <div className="absolute top-[10%] left-0  shadow-md shadow-slate-4100  text-[.8rem] rounded-r-lg text-green-50 px-2 py-1  bg-green-600">
                    <span className="  ">
                      {items.discountPercentage}%
                    </span>{" "}
                    <sub className="text-blue-100">OFF</sub>
                  </div>

                  <Link
                    to={`/products/${items.id}`}
                    className="xl:w-3/4  mx-auto h-48 block   rounded overflow-hidden "
                  >
                    <img
                      alt={items.title}
                      className="object-cover  object-center  "
                      src={`${items.thumbnail}`}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {items.category}
                    </h3>
                    <h2 className="text-sky-700 title-font xl:text-lg text-md font-medium">
                      {items.title}
                    </h2>
                    <small className="flex gap-1 items-center">
                      <span className="text-sm font-semibold">
                        Price:
                      </span>
                      <span className="text-rose-500">
                        $<del>{items.price}</del>
                      </span>
                      <span className="text-green-600 text-sm">
                        {(
                          (items.price *
                            (100 - items.discountPercentage)) /
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
