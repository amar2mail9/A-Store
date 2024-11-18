import React, { useEffect, useState } from "react";
import Layout from "../../Home/Layout";
import { Button, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchProducts = async (url) => {
    setIsloading(true);
    const response = await fetch(`https://dummyjson.com/${url}`);
    const result = await response.json();
    setProducts(result.products);
    setIsloading(false);
  };

  useEffect(() => {
    fetchProducts("products");
  }, []);

  const getCategory = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      const data = await res.json();
      setCategoryName(data);
    } catch (error) {
      setError(error.message); // Set error for category fetch
    }
  };

  useEffect(() => {
    getCategory();
  }, []); // Call getCategory only once on mount

  const handleOnChangeCategory = (e) => {
    const cat = e.target.value;
    setCategory(cat);
    if (cat === "") {
      fetchProducts("products");
    } else {
      fetchProducts(`products/category/${cat}`);
    }
  };

  return (
    <Layout>
      <article className="my-4 w-10/12 mx-auto lg:flex">
        {/* Sorting and filter */}
        <section className="md:w-4/12">
          <h1 className="text-xl font-semibold text-gray-600">
            Filter Products
          </h1>

          <select
            id="category-select"
            onChange={handleOnChangeCategory}
            className="block w-10/12 py-1 px-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="" className="text-slate-400">
              All Products
            </option>
            {categoryName.map((item, index) => (
              <option key={index} value={item.name} className="text-slate-800">
                {item.name}
              </option>
            ))}
          </select>
        </section>

        {/* Products page */}
        <section>
          <div>
            {isLoading ? (
              <div>
                <Spinner variant="warning" />
              </div>
            ) : products.length === 0 ? (
              <p>No Products Available</p>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
                {products.map((items, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="w-full shadow-lg"
                    >
                      <Link to={`/products/${items.id}`}>
                        <div key={index} className="bg-white p-2 rounded-lg">
                          <div className="w-full mx-auto h-48 items-center flex bg-gray-200 rounded-lg">
                            <img
                              src={
                                items.images &&
                                items.thumbnail &&
                                items.images[0]
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
                      </Link>
                    </motion.div>
                  );
                }) || <p>Products not Found</p>}
              </div>
            )}

            {/* Explore more Products You do like */}
            {/* <h1> Explore more Products You do like </h1>
            <div className="flex gap-2">
            {categoryName.map((item, idx) => {
              return <Link to={`/products/category/${item.name}`} className="hover:text-sky-500 bg-sky-100 border-1 border-sky-500 rounded-lg px-4 py-1"> 
              <button key={idx}>{item.name}</button></Link>;
            })}
            </div> */}
          </div>
        </section>
      </article>
    </Layout>
  );
}
