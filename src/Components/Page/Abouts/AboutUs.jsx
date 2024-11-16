import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Layout from "../../Home/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Motion Animation for Title */}
          <motion.h1
            className="text-4xl font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to Shopping Hub! We are an online marketplace committed to
            bringing you the best products at the best prices.
          </motion.p>

          {/* Grid Layout with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 text-gray-800"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                At Shopping Hub, we aim to deliver a hassle-free shopping
                experience with fast shipping, secure payments, and top-notch
                customer service.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 text-gray-800"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p>
                Our vision is to become the leading online retailer by providing
                an extensive range of products that cater to all customer needs.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 text-gray-800"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul>
                <li>- Customer satisfaction comes first</li>
                <li>- We believe in quality over quantity</li>
                <li>- Always evolving and improving</li>
              </ul>
            </motion.div>
          </div>

          {/* Swiper Carousel for Product Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Our Products</h2>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Product 1"
                  className="w-full rounded-lg shadow-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Product 2"
                  className="w-full rounded-lg shadow-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Product 3"
                  className="w-full rounded-lg shadow-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Product 4"
                  className="w-full rounded-lg shadow-md"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
