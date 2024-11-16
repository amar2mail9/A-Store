import React, { useEffect, useState } from "react";
import Layout from "../../Home/Layout";
import { Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (url) => {
    const response = await fetch(`https://dummyjson.com/${url}`);
    const result = await response.json();
    setProducts(result.products);
  };

  useEffect(() => {
    fetchProducts("products");
  }, []);
  return (
    <Layout>
      <article className="my-4 w-10/12 mx-auto lg:flex    ">
        {/* Shorting and fillter */}
        <section className="md:w-4/12 ">
          <h1>Shorting and fillter</h1>
        </section>

        {/* Produts page */}
        <section>
          <div>
            {products.length === 0 ? (
              <div>
                <Spinner variant="warning" />
              </div>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
                {products.map((items, index) => {
              

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full shadow-lg"
                    >
                      <div key={index} className="bg-white  p-2 rounded-lg">
                        <div className="w-full mx-auto  h-48 items-center flex bg-gray-200 rounded-lg">
                          <img
                            src={
                              items.images && items.thumbnail && items.images[0]
                            }
                            alt=""
                            className="w-full h-48 aspect-square"
                          />
                        </div>
                        <div className="mt-4">
                          {/* Product Category */}
                          <h3 className="text-gray-600 text-xs tracking-widest title-font mb-1 uppercase">
                            {items.category}
                          </h3>

                          {/* Product Title */}
                          <h2 className="text-gray-800 title-font text-sm sm:text-base md:text-lg font-medium mb-2">
                            {items.title}
                          </h2>

                          {/* Price Section */}
                          <div className="mt-1 flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                            <span className="text-sm text-gray-600">
                              Price:
                            </span>

                            {/* Price and Discount Section */}
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:items-center">
                              {/* Original Price with Strikethrough */}
                              <del className="text-gray-400 text-xs">
                                <span>${items.price.toFixed(2)}</span>
                              </del>

                              {/* Discount Percentage */}
                              <label className="text-amber-500 text-xs font-semibold sm:text-sm">
                                {items.discountPercentage}% off
                              </label>

                              {/* Discounted Price */}
                              <h4 className="text-green-600 text-sm sm:text-base font-medium">
                                $
                                {`${(
                                  (items.price / 100) *
                                  (100 - items.discountPercentage)
                                ).toFixed(2)} `}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
          <div></div>
        </section>
      </article>
    </Layout>
  );
}
