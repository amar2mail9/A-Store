import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { ProductContext } from "../../../App";

const CategoryPage = () => {
  const { category } = useParams(); // Get category from URL
  const {
    getData,
    smartphones,
    beauty,
    furniture,
    laptops,
    groceries,
    handleClick,
  } = useContext(ProductContext);

  // Fetch the relevant category data when the component loads
  useEffect(() => {
    getData.fetchProductsData(`products/category/${category}`);
  }, [category, getData]);

  // Determine which category data to use based on URL
  let categoryData = [];
  if (category === "smartphones") categoryData = smartphones;
  if (category === "beauty") categoryData = beauty;
  if (category === "furniture") categoryData = furniture;
  if (category === "laptops") categoryData = laptops;
  if (category === "groceries") categoryData = groceries;

  // Handle add to cart logic
  const handleAddToCart = (item) => {
    handleClick(item);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Category Heading */}
        <motion.h1
          className="text-4xl font-semibold text-gray-900 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Shop {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categoryData.length > 0 ? (
            categoryData.map((product) => (
              <motion.div
                key={product.id}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Title and Price */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 text-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-500">
              No products found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
