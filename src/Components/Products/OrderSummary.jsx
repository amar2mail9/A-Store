import React, { useState } from "react";
import Layout from "../Layout";
import { Button } from "react-bootstrap";

function OrderSummary(props) {
  const [cartItems, setCartItems] = useState(10);

  const increaseValue = () => {
    setCartItems(cartItems + 1);
  };
  const decreaseValue = () => {
    setCartItems(cartItems - 1);
  };
  return (
    <Layout value={cartItems}>
      <section
        className="container  p-4 mt-5 rounded-md"
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        <h1 className="md:text-2xl text-lg font-semibold text-slate-500">
          Order Summary
        </h1>
        {/* order Summary Sections */}
        <div className="flex md:flex-wrap flex-col gap-3 mt-3">
          <div className="w-full ">
            <div className="flex gap-4 md:flex-row flex-col ">
              <img
                src="https://th.bing.com/th?id=OSK.HEROS986zVNA6ME1BLWd95UZ6IWWWzPq3s8nLCtO_DT2jcg&w=472&h=280&c=1&rs=2&o=6&cb=13&dpr=1.3&pid=SANGAM"
                alt=""
                className="md:w-[150px] w-[250px] aspect-square rounded-md shadow-sm"
              />
              <div className="flex gap-2 flex-col">
                <h2 className="text-2xl text-slate-500 font-semibold">Title</h2>
                <h3 className="text-lg text-slate-300 font-semibold">
                  Category
                </h3>
                <h4 className="text-lg text-slate-400 font-semibold">
                  Seller:KLPLWORLDRetail
                </h4>
                <h5>
                  <del className="text-rose-400 text-lg font-bold">₹1888</del>
                  <label>
                    <span className="text-3xl ml-3"> ₹3,799</span>{" "}
                    <span className="text-green-500 text-lg font-semibold">
                      53% Off
                    </span>
                  </label>
                </h5>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center md:justify-between mt-4 gap-2">
              <div>
                <div
                  className="flex  gap-3
                 items-center"
                >
                  <Button className=" text-xl" onClick={decreaseValue}>
                    <i className="ri-subtract-line"></i>
                  </Button>
                  <span className="text-2xl font-semibold text-slate-500">
                    {cartItems}
                  </span>
                  <Button onClick={increaseValue}>
                    <i className="ri-add-large-line text-xl"></i>
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-700">
                  <label>Total Price:</label>{" "}
                  <span className="text-xl text-green-500">₹ 100000</span>
                </h2>
              </div>
            </div>
            <br />
            <hr />
          </div>
          <div className="w-full">
            <div className="w-full ">
              <div className="flex gap-4 md:flex-row flex-col ">
                <img
                  src="https://th.bing.com/th?id=OSK.HEROS986zVNA6ME1BLWd95UZ6IWWWzPq3s8nLCtO_DT2jcg&w=472&h=280&c=1&rs=2&o=6&cb=13&dpr=1.3&pid=SANGAM"
                  alt=""
                  className="md:w-[150px] w-[250px] aspect-square rounded-md shadow-sm"
                />
                <div className="flex gap-2 flex-col">
                  <h2 className="text-2xl text-slate-500 font-semibold">
                    Title
                  </h2>
                  <h3 className="text-lg text-slate-300 font-semibold">
                    Category
                  </h3>
                  <h4 className="text-lg text-slate-400 font-semibold">
                    Seller:KLPLWORLDRetail
                  </h4>
                  <h5>
                    <del className="text-rose-400 text-lg font-bold">₹1888</del>
                    <label>
                      <span className="text-3xl ml-3"> ₹3,799</span>{" "}
                      <span className="text-green-500 text-lg font-semibold">
                        53% Off
                      </span>
                    </label>
                  </h5>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:items-center md:justify-between mt-4 gap-2">
                <div>
                  <div
                    className="flex  gap-3
                 items-center"
                  >
                    <Button className=" text-xl" onClick={decreaseValue}>
                      <i className="ri-subtract-line"></i>
                    </Button>
                    <span className="text-2xl font-semibold text-slate-500">
                      {cartItems}
                    </span>
                    <Button onClick={increaseValue}>
                      <i className="ri-add-large-line text-xl"></i>
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-700">
                    <label>Total Price:</label>{" "}
                    <span className="text-xl text-green-500">₹ 100000</span>
                  </h2>
                </div>
              </div>
              <br />
              <hr />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full ">
              <div className="flex gap-4 md:flex-row flex-col ">
                <img
                  src="https://th.bing.com/th?id=OSK.HEROS986zVNA6ME1BLWd95UZ6IWWWzPq3s8nLCtO_DT2jcg&w=472&h=280&c=1&rs=2&o=6&cb=13&dpr=1.3&pid=SANGAM"
                  alt=""
                  className="md:w-[150px] w-[250px] aspect-square rounded-md shadow-sm"
                />
                <div className="flex gap-2 flex-col">
                  <h2 className="text-2xl text-slate-500 font-semibold">
                    Title
                  </h2>
                  <h3 className="text-lg text-slate-300 font-semibold">
                    Category
                  </h3>
                  <h4 className="text-lg text-slate-400 font-semibold">
                    Seller:KLPLWORLDRetail
                  </h4>
                  <h5>
                    <del className="text-rose-400 text-lg font-bold">₹1888</del>
                    <label>
                      <span className="text-3xl ml-3"> ₹3,799</span>{" "}
                      <span className="text-green-500 text-lg font-semibold">
                        53% Off
                      </span>
                    </label>
                  </h5>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:items-center md:justify-between mt-4 gap-2">
                <div>
                  <div
                    className="flex  gap-3
                 items-center"
                  >
                    <Button className=" text-xl" onClick={decreaseValue}>
                      <i className="ri-subtract-line"></i>
                    </Button>
                    <span className="text-2xl font-semibold text-slate-500">
                      {cartItems}
                    </span>
                    <Button onClick={increaseValue}>
                      <i className="ri-add-large-line text-xl"></i>
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-700">
                    <label>Total Price:</label>{" "}
                    <span className="text-xl text-green-500">₹ 100000</span>
                  </h2>
                </div>
              </div>
              <br />
              <hr />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full ">
              <div className="flex gap-4 md:flex-row flex-col ">
                <img
                  src="https://th.bing.com/th?id=OSK.HEROS986zVNA6ME1BLWd95UZ6IWWWzPq3s8nLCtO_DT2jcg&w=472&h=280&c=1&rs=2&o=6&cb=13&dpr=1.3&pid=SANGAM"
                  alt=""
                  className="md:w-[150px] w-[250px] aspect-square rounded-md shadow-sm"
                />
                <div className="flex gap-2 flex-col">
                  <h2 className="text-2xl text-slate-500 font-semibold">
                    Title
                  </h2>
                  <h3 className="text-lg text-slate-300 font-semibold">
                    Category
                  </h3>
                  <h4 className="text-lg text-slate-400 font-semibold">
                    Seller:KLPLWORLDRetail
                  </h4>
                  <h5>
                    <del className="text-rose-400 text-lg font-bold">₹1888</del>
                    <label>
                      <span className="text-3xl ml-3"> ₹3,799</span>{" "}
                      <span className="text-green-500 text-lg font-semibold">
                        53% Off
                      </span>
                    </label>
                  </h5>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:items-center md:justify-between mt-4 gap-2">
                <div>
                  <div
                    className="flex  gap-3
                 items-center"
                  >
                    <Button className=" text-xl" onClick={decreaseValue}>
                      <i className="ri-subtract-line"></i>
                    </Button>
                    <span className="text-2xl font-semibold text-slate-500">
                      {cartItems}
                    </span>
                    <Button onClick={increaseValue}>
                      <i className="ri-add-large-line text-xl"></i>
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-700">
                    <label>Total Price:</label>{" "}
                    <span className="text-xl text-green-500">₹ 100000</span>
                  </h2>
                </div>
              </div>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default OrderSummary;
