import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState([]);

  const fetchProducts = async (typeProducts) => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const res = await fetch(`https://dummyjson.com/${typeProducts}?limit=8`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
    <div className="w-10/12 mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Product List - A-Store
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              <div className="mt-4 flex gap-3 items-center ">
                <label
                  className="block text-slate-700 font-semibold mb-2"
                  htmlFor="category-select"
                >
                  Category:
                </label>
                <select
                  id="category-select"
                  onChange={handleOnChangeCategory}
                  className="block w-full py-1 px-3 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="" className="text-slate-400">
                    All Products
                  </option>
                  {categoryName.map((item, index) => (
                    <option
                      key={index}
                      value={item.name}
                      className="text-slate-800"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Buy from the list of our products
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            <div className="flex flex-wrap ">
              {products.length > 0 ? (
                products.map((items, index) => (
                  <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <Link to={`/products/${items.id}`}>
                        <img
                          className="h-40 rounded w-full object-cover object-center mb-6"
                          src={items.images && items.images[0]}
                          alt={items.title}
                        />
                      </Link>
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {items.category}
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {items.title}
                      </h2>
                      <p className="leading-relaxed text-base">
                        {items.description}
                      </p>
                      <Link to={`/products/${items.id}`}>
                        <button className="btn bg-info">Buy Now</button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">Products Not Found</p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
