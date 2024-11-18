import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../App";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function BeutyProducts() {
  const { getData, beauty, smartphones, groceries } =
    useContext(ProductContext);

  useEffect(() => {
    // getData.fetchProductsData("products");
    getData.fetchProductsData("products/category/beauty");
    getData.fetchProductsData("products/category/smartphones");
    getData.fetchProductsData("products/category/groceries");
  }, []);
  return (
    <div className="bg-white lg:w-10/12 rounded-lg p-4 shadow-xl my-4 mx-auto">
      {/* Beuty Products */}
      <div>
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Beuty Products
        </h2>
        {beauty.length === 0 ? (
          <div className="flex justify-center ">
            <Spinner variant="warning" />
          </div>
        ) : (
          <section>
            <div className="">
              <Swiper
                spaceBetween={40}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper "
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {beauty.map((items, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full shadow-lg"
                      >
                        {" "}
                        <Link to={`/products/${items.id}`}>
                          <div
                          
                            className=" border-1 hover:scale-105 hover:opacity-80 text-gray-600 bg-white delay-200 duration-200 cursor-pointer border-gray-300 rounded-lg p-2  gap-3"
                          >
                            <div className="w-full mx-auto  bg-gray-200 rounded-lg">
                              <img
                                src={items.thumbnail}
                                alt=""
                                className="w-full h-fit"
                              />
                            </div>
                            <h3>{items.title}</h3>
                          </div>
                        </Link>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex my-4 justify-center ">
              <Link
                to={`products/category/smartphones`}
                className="text-center bg-orange-500 hover:bg-orange-700 focus:bg-green-500 px-4 py-1 rounded-full text-orange-100"
              >
                View More
              </Link>
            </div>
          </section>
        )}
      </div>
      {/* Electronic Products */}

      <div>
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Smartphone Top brand
        </h2>
        {smartphones.length === 0 ? (
          <div className="flex justify-center ">
            <Spinner variant="warning" />
          </div>
        ) : (
          <section>
            <div className="">
              <Swiper
                spaceBetween={40}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper "
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {smartphones.map((items, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full shadow-lg"
                      >
                        {" "}
                        <Link to={`/products/${items.id}`}>
                          <div
                            // style={{
                            //   boxShadow: "0 0  3px 1px rgba(0,0,0,0.3)",
                            // }}
                            
                            className=" border-1 hover:scale-105 hover:opacity-80 text-gray-600 bg-white delay-200 duration-200 cursor-pointer border-gray-300 rounded-lg p-2  gap-3"
                          >
                            <div className="w-full mx-auto  bg-gray-200 rounded-lg">
                              <img
                                src={items.thumbnail}
                                alt=""
                                className="w-full h-fit"
                              />
                            </div>
                            <h3>{items.title}</h3>
                          </div>
                        </Link>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex my-4 justify-center ">
              <Link
                to={`products/category/smartphones`}
                className="text-center bg-orange-500 hover:bg-orange-700 focus:bg-green-500 px-4 py-1 rounded-full text-orange-100"
              >
                View More
              </Link>
            </div>
          </section>
        )}
      </div>

      {/* groceries Products */}

      <div>
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          Groceries Items
        </h2>
        {groceries.length === 0 ? (
          <div className="flex justify-center ">
            <Spinner variant="warning" />
          </div>
        ) : (
          <section>
            <div>
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper "
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {groceries.map((items, index) => {
                  return (
                    <SwiperSlide  key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full shadow-lg"
                      >
                        <Link to={`/products/${items.id}`}>
                          <div
                            // style={{
                            //   boxShadow: "0 0  3px 1px rgba(0,0,0,0.3)",
                            // }}
                           
                            className=" border-1 hover:scale-105 hover:opacity-80 text-gray-600 bg-white delay-200 duration-200 cursor-pointer border-gray-300 rounded-lg p-2  gap-3"
                          >
                            <div className="w-full mx-auto  bg-gray-200 rounded-lg">
                              <img
                                src={items.thumbnail}
                                alt=""
                                className="w-full h-fit"
                              />
                            </div>
                            <h3>{items.title}</h3>
                          </div>
                        </Link>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex my-4 justify-center ">
              <Link
                to={`products/category/groceries`}
                className="text-center bg-orange-500 hover:bg-orange-700 focus:bg-green-500 px-4 py-1 rounded-full text-orange-100"
              >
                View More
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
