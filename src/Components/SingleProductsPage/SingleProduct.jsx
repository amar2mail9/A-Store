import React, { useContext, useEffect, useState } from "react";
import Layout from "../Home/Layout";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { TbShoppingCartPlus } from "react-icons/tb";
import { ProductContext } from "../../App";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function SingleProduct() {
  const { handleClick } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnailImage, setThumbnailImage] = useState("");

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      let res = await fetch(`https://dummyjson.com/products/${id}`);
      let result = await res.json();
      setProducts(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  return (
    <Layout>
      {isLoading ? (
        <div className="flex justify-center h-[70vh] items-center">
          <Spinner variant="warning" />
        </div>
      ) : (
        <section className="py-8 bg-gray-50 my-16 w-11/12 mx-auto rounded-xl shadow-lg md:py-16 antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              {/* This is show on Lg screen */}
              <div className="shrink-0 mx-auto hidden flex-row-reverse items-center gap-4 lg:flex ">
                {/* Thumbnail image */}
                <div className="w-96  flex items-center justify-center ">
                  <img
                    className="rounded-lg h-64  object-cover" // Ensure object-cover to maintain aspect ratio
                    src={thumbnailImage || product.thumbnail} // Use the selected thumbnail image or default to the original thumbnail
                    alt={product.title}
                  />
                </div>

                {/* Gallery of additional images */}
                <div className="flex gap-2 flex-col h-64 scrollbar-none overflow-x-hidden overflow-y-scroll">
                  {product.images &&
                    product.images.length > 0 &&
                    product.images.map((image, i) => (
                      <div
                        key={i}
                        onClick={() => setThumbnailImage(image)}
                        className="cursor-pointer w-16"
                      >
                        <img
                          src={image}
                          alt={`product-image-${i}`}
                          className="rounded-lg mt-2 h-16  object-cover" // Fix size and use object-cover
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* This is show on my small screen */}
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper lg:hidden block"
              >
                {product.images &&
                  product.images.length > 0 &&
                  product.images.map((image, i) => (
                    <SwiperSlide className="flex items-center justify-center h-64">
                      <img
                        src={image}
                        alt={`product-image-${i}`}
                        className="rounded-lg mt-2 h-64  object-cover" // Fix size and use object-cover
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {product.title}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <span>
                    <del className="text-xl font-extrabold text-red-600">
                      $ {product.price}
                    </del>
                    <h5 className="text-red-500">
                      {product.discountPercentage}% OFF
                    </h5>
                    <h6 className="text-green-600">
                      ${" "}
                      {(
                        (product.price / 100) *
                        (100 - product.discountPercentage)
                      ).toFixed(2)}
                    </h6>
                  </span>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < Math.round(product.rating)
                              ? "text-yellow-300"
                              : "text-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500">
                      {product.rating}
                    </p>
                    <Link
                      to="#"
                      className="text-sm font-medium leading-none text-blue-500 underline hover:no-underline"
                    >
                      {product.reviews?.length > 0
                        ? `${product.reviews.length} Reviews`
                        : "No Reviews"}
                    </Link>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col w-full items-center md:gap-14 gap-8 my-8">
                  <button
                    onClick={() => {
                      handleClick(product);
                    }}
                    className="flex gap-2 focus:bg-indigo-500 focus:text-indigo-100 hover:bg-orange-400 justify-center items-center py-2 md:px-8 md:w-fit w-full rounded-lg bg-sky-500 text-white"
                  >
                    <TbShoppingCartPlus className="text-2xl" />{" "}
                    <span className="text-lg font-semibold"> Add to cart</span>
                  </button>
                  <button className="border-2 w-full md:w-fit hover:bg-orange-500 hover:text-white rounded-lg px-8 py-2 font-lg font-semibold border-orange-500 text-orange-600 bg-orange-100">
                    Buy Now
                  </button>
                </div>

                <hr className=" border-gray-200" />
                <p className="mb-6 text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>
          <hr className="mt-10" />
          <div className="px-8 lg:px-16 md:p-14">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <div className="space-y-2 text-indigo-900">
                {product.sku && (
                  <p>
                    <strong>SKU:</strong> {product.sku}
                  </p>
                )}
                {product.stock !== undefined && (
                  <p>
                    <strong>Stock:</strong> {product.stock}
                  </p>
                )}
                {product.availabilityStatus && (
                  <p>
                    <strong>Availability:</strong> {product.availabilityStatus}{" "}
                    ({product.stock})
                  </p>
                )}
                {product.warrantyInformation && (
                  <p>
                    <strong>Warranty:</strong> {product.warrantyInformation}
                  </p>
                )}
                {product.shippingInformation && (
                  <p>
                    <strong>Shipping:</strong> {product.shippingInformation}
                  </p>
                )}
                {product.returnPolicy && (
                  <p>
                    <strong>Return Policy:</strong> {product.returnPolicy}
                  </p>
                )}
                {product.minimumOrderQuantity && (
                  <p>
                    <strong>Minimum Order Quantity:</strong>{" "}
                    {product.minimumOrderQuantity}
                  </p>
                )}
              </div>

              <div>
                {product.dimensions && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-indigo-700">
                      Dimensions
                    </h3>
                    <ul className="space-y-1 text-indigo-500">
                      {product.dimensions.width && (
                        <li>
                          <strong>Width:</strong> {product.dimensions.width} cm
                        </li>
                      )}
                      {product.dimensions.height && (
                        <li>
                          <strong>Height:</strong> {product.dimensions.height}{" "}
                          cm
                        </li>
                      )}
                      {product.dimensions.depth && (
                        <li>
                          <strong>Depth:</strong> {product.dimensions.depth} cm
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                {product.tags && product.tags.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-indigo-700">
                      Tags
                    </h3>
                    <ul className="flex flex-wrap space-x-2 text-indigo-500">
                      {product.tags.map((tag, index) => (
                        <li key={index}>#{tag}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                {product.reviews && product.reviews.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-indigo-700">
                      Reviews
                    </h3>
                    <ul className="space-y-4 text-indigo-500">
                      {product.reviews.map((review, index) => (
                        <li
                          key={index}
                          className="border-b border-indigo-200 pb-2"
                        >
                          <p>
                            <strong>{review.reviewerName}</strong> (
                            {new Date(review.date).toLocaleDateString()})
                          </p>
                          <p>{review.rating} stars</p>
                          <p>{review.comment}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                {product.meta && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-indigo-700">
                      Meta Information
                    </h3>
                    <p className="text-indigo-500">
                      <strong>Created At:</strong>{" "}
                      {new Date(product.meta.createdAt).toLocaleString()}
                    </p>
                    <p className="text-indigo-500">
                      <strong>Updated At:</strong>{" "}
                      {new Date(product.meta.updatedAt).toLocaleString()}
                    </p>
                    <p className="text-indigo-500">
                      <strong>Barcode:</strong> {product.meta.barcode}
                    </p>
                    {product.meta.qrCode && (
                      <img
                        src={product.meta.qrCode}
                        alt="QR Code"
                        className="w-16 h-16 mt-2"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export default SingleProduct;
