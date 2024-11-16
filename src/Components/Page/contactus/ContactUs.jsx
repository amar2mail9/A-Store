import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Layout from "../../Home/Layout";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
  };

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
            Contact Us
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We’d love to hear from you. Fill out the form below or contact us
            directly at:
          </motion.p>

          {/* Contact Details */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
          >
            <p className="text-lg text-gray-800 mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@shoppinghub.com"
                className="text-blue-500 hover:underline"
              >
                support@shoppinghub.com
              </a>
            </p>
            <p className="text-lg text-gray-800 mb-4">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-lg text-gray-800">
              <strong>Address:</strong> 123 Shopping Hub St, City, Country
            </p>
          </motion.div>

          {/* Swiper for Team Images or Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
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
                  alt="Team Member 1"
                  className="w-full rounded-lg shadow-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Team Member 2"
                  className="w-full rounded-lg shadow-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Team Member 3"
                  className="w-full rounded-lg shadow-md"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-white p-8  my-4 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
