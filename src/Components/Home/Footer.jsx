import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
 
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* About Us */}
      <div>
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p>
          Shopping Hub is your go-to online store for a wide variety of products. We offer the best deals on electronics, fashion, home goods, and much more!
        </p>
      </div>

      {/* Customer Service */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
        <ul>
          <li><Link href="/" className="hover:text-gray-400">Help Center</Link></li>
          <li><Link href="/" className="hover:text-gray-400">Returns & Exchanges</Link></li>
          <li><Link href="/" className="hover:text-gray-400">Shipping Info</Link></li>
          <li><Link href="/" className="hover:text-gray-400">Privacy Policy</Link></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul>
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/" className="hover:text-gray-400">Shop</Link></li>
          <li><Link href="/" className="hover:text-gray-400">Blog</Link></li>
          <li><Link href="/" className="hover:text-gray-400">Contact Us</Link></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <ul>
          <li>Email: <a href="mailto:support@shoppinghub.com" className="hover:text-gray-400">support@shoppinghub.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+1 (234) 567-890</a></li>
          <li>Address: 123 Shopping Hub St, City, Country</li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="text-center mt-8 text-sm text-gray-400">
      <p>&copy; 2024 Shopping Hub. All rights reserved.</p>
    </div>
  </footer>
  );
}
