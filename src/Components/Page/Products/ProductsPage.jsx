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
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {products.map((items, index) => {
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
