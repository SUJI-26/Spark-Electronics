import React, { useEffect } from "react";
import insta1 from "../assets/insta-1.jpg";
import insta2 from "../assets/insta-2.jpg";
import insta3 from "../assets/insta-3.jpg";
import insta4 from "../assets/insta-4.jpg";
import insta5 from "../assets/insta-5.jpg";
import insta6 from "../assets/insta-6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Insta = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh()
  }, []);

  const images = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <div className="w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col items-center gap-4">

      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-themepurple text-xl font-semibold capitalize"
      >
        Our Instagram Shop
      </h1>

      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[42px] leading-[50px] text-center capitalize"
      >
        Follow on Instagram
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full grid lg:grid-cols-6 grid-cols-2 gap-6 mt-8"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`instagram-${index}`}
            className="rounded-lg hover:scale-105 transition duration-300 cursor-pointer"
          />
        ))}
      </div>

      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-12 uppercase cursor-pointer"
      >
        #ElectraShop
      </button>

    </div>
  );
};

export default Insta;