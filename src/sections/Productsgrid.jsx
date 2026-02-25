import React, { useEffect } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../export";

const ProductsGrid = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh()
  }, []);

  return (
    <div  data-aos="zoom-in" data-aos-delay="100"
      id="products"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >

      <h1 className="text-themepurple text-xl font-semibold">
        Browse Collections
      </h1>

      <h1 className="text-black font-semibold text-[42px] leading-[50px] text-center">
        Trending Products
      </h1>

      <div  data-aos="zoom-in" data-aos-delay="300"  className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10 mt-10">

        {products.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col gap-3 bg-white p-4 rounded-lg cursor-pointer relative overflow-hidden"
          >

            {/* Image */}
            <div className="relative">
              <img src={item.img} alt="" className="w-full" />

              {/* Icons (hidden by default, show on hover) */}
              <div className="absolute top-[20px] left-1/2 -translate-x-1/2 hidden group-hover:flex gap-3 transition duration-300">
                
                <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                  <MdOutlineRemoveRedEye />
                </div>

                <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                  <FaRegHeart />
                </div>

                <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                  <MdAddShoppingCart />
                </div>

              </div>
            </div>

            {/* Product Info */}
            <h1 className="text-lg text-gray-400 font-semibold">
              {item.category}
            </h1>

            <h1 className="text-lg text-black font-semibold">
              {item.name}
            </h1>

            <h1 className="text-lg text-themepurple font-semibold">
              {item.price}
            </h1>

            <hr />

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-1">
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
                <FaStar className="text-themepurple" />
              </div>

              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold">
                SALE 14%
              </button>
            </div>

          </div>
        ))}

      </div>

      <button className="bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8 cursor-pointer">
        VIEW MORE
      </button>

    </div>
  );
};

export default ProductsGrid;