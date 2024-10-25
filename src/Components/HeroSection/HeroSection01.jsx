import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiMoneyDollarCircleFill, RiSecurePaymentLine } from "react-icons/ri";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";

export default function HeroSection01() {
  const { getData, fetchProducts, smartphones, beauty, furniture, laptops } =
    useContext(ProductContext);

  useEffect(() => {
    getData.fetchProductsData("products");
    getData.fetchProductsData("products/category/smartphones");
    getData.fetchProductsData("products/category/beauty");
    getData.fetchProductsData("products/category/furniture");
    getData.fetchProductsData("products/category/laptops");
  }, []);

  // console.log("Type of smartPhone ", smartphones.length);
  // console.log("Type of Products ", fetchProducts.length);
  console.log("Smartphones data: ", smartphones.length);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6  sm:grid-cols-2 grid-cols-1 my-8 items-center w-10/12 mx-auto">
          <div className="flex items-center gap-6 py-3 px-8 shadow-md rounded-lg bg-white shadow-slate-500">
            <div className="text-green-500">
              <FaShippingFast className="text-5xl" />
            </div>
            <div>
              <h2 className="lg:text-xl text-lg font-semibold text-gray-600">
                Free Shipping & Return
              </h2>
              <small className="font-semibold text-gray-600">
                Free Shipping on of order $99{" "}
              </small>
            </div>
          </div>
          <div className="flex items-center gap-6 py-3 px-8 shadow-md rounded-lg bg-white shadow-slate-500">
            <div className="text-green-500">
              <RiMoneyDollarCircleFill className="text-5xl" />
            </div>
            <div>
              <h2 className="lg:text-xl text-lg font-semibold text-gray-600">
                Money Back Guarantee
              </h2>
              <small className="font-semibold text-gray-600">
                100% Money Back Guarantee
              </small>
            </div>
          </div>
          <div className="flex items-center gap-6 py-3 px-8 shadow-md rounded-lg bg-white shadow-slate-500">
            <div className="text-green-500">
              <MdSupportAgent className="text-5xl" />
            </div>
            <div>
              <h2 className="lg:text-xl text-lg font-semibold text-gray-600">
                ONLINE SUPPORT 24/7
              </h2>
              <small className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet
              </small>
            </div>
          </div>
          <div className="flex items-center gap-6 py-3 px-8 shadow-md rounded-lg bg-white shadow-slate-500">
            <div className="text-green-500">
              <RiSecurePaymentLine className="text-5xl" />
            </div>
            <div>
              <h2 className="lg:text-xl text-lg font-semibold text-gray-600">
                SECURE PAYMENT
              </h2>
              <small className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet
              </small>
            </div>
          </div>
        </section>
      </motion.div>

      <section className="mt-16 w-10/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="md:text-3xl sm:text-2xl text-xl text-slate-600 font-semibold">
            Popular Departments
          </h2>
          <small className="text-slate-500 font-semibold">
            Find top items across categories
          </small>
        </motion.div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 my-8">
          {/* Smartphones */}
          <Link to={`products/category/smartphones`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center px-8 gap-8 bg-white shadow-lg shadow-slate-400 py-4 rounded-lg"
            >
              <div>
                <h3 className="text-slate-700 font-semibold text-xl">
                  Smartphones
                </h3>
                <small className="text-slate-500 font-semibold">
                  {smartphones.length} Products
                </small>
              </div>
              <div className="w-24 h-24">
                <img
                  src="https://img.lovepik.com/free-png/20211215/lovepik-smartphone-model-png-image_401660433_wh1200.png"
                  alt="Smartphones"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </Link>

          {/* Beauty */}
          <Link to={"products/category/beauty"}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center px-8 gap-8 bg-white shadow-lg shadow-slate-400 py-4 rounded-lg"
            >
              <div>
                <h3 className="text-slate-700 font-semibold text-xl">Beauty</h3>
                <small className="text-slate-500 font-semibold">
                  {beauty.length} Products
                </small>
              </div>
              <div className="w-24 h-24">
                <img
                  src="https://img.lovepik.com/element/45007/1920.png_860.png"
                  alt="Beauty"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </Link>

          {/* Furniture */}
          <Link to={"products/category/furniture"}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center px-8 gap-8 bg-white shadow-lg shadow-slate-400 py-4 rounded-lg"
            >
              <div>
                <h3 className="text-slate-700 font-semibold text-xl">
                  Furniture
                </h3>
                <small className="text-slate-500 font-semibold">
                  {furniture.length} Products
                </small>
              </div>
              <div className="w-24 h-24">
                <img
                  src="https://e7.pngegg.com/pngimages/613/953/png-clipart-bedside-tables-coffee-tables-furniture-refectory-table-coffee-table-angle-coffee-tables-thumbnail.png"
                  alt="Furniture"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </Link>

          {/* Laptops */}
          <Link to={"products/category/laptops"}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center px-8 gap-8 bg-white shadow-lg shadow-slate-400 py-4 rounded-lg"
            >
              <div>
                <h3 className="text-slate-700 font-semibold text-xl">
                  Laptops
                </h3>
                <small className="text-slate-500 font-semibold">
                  {laptops.length} Products
                </small>
              </div>
              <div className="w-24 h-24">
                <img
                  src="https://e7.pngegg.com/pngimages/898/224/png-clipart-apple-laptops-apple-device-product-kind-apple-thumbnail.png"
                  alt="Laptops"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>
    </>
  );
}
