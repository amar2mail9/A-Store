import React, { useContext } from "react";
import Layout from "../../Home/Layout";
import { ProductContext } from "../../../App";

export default function ShoppingCart() {
  const { cartValue } = useContext(ProductContext);
  const items = [
    { id: 1, name: "Hollow Port", price: 39.11, quantity: 1 },
    { id: 2, name: "Circular Sienna", price: 24.89, quantity: 1 },
    { id: 3, name: "Realm Bone", price: 22.0, quantity: 1 },
    { id: 4, name: "Pest color shirt", price: 22.0, quantity: 1 },
  ];

  const calculateSubtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 14.0;
  const discount = 0.0;
  const total = calculateSubtotal + deliveryFee - discount;

  return (
    <Layout>
      <section className="w-full h-[80vh] bg-emerald-50 ">
        <div >
          
          <div className="w-10/12 mx-auto py-5">
          <div className="flex items-center gap-5">
            <h2 className="md:text-4xl sm:text-2xl text-xl  text-gray-700 font-medium">Shopping Cart</h2>{" "}
            <span className="text-slate-600 font-semibold">({cartValue.length} Items)</span>
          </div>
          <hr className="mt-4"/>
            {/* products Section */}
            <div></div>
            {/* Coupon and total */}
            <div>
              {/* apply coupon code */}
              <div></div>
              {/* Total  */}
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
