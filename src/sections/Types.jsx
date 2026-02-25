import React, { useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Types = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-19">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end gap-6 bg-cover p-10 rounded-lg"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <h1 className="text-themeyellow border-rounded-lg border-themeyellow px-6 py-2 text-lg border border-gray-200 rounded-lg p-5">
          60% Off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Wireless <br /> Devices
        </h1>
        <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold cursor-pointer">
          SHOP NOW
        </button>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end gap-6 bg-cover p-10 rounded-lg"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <h1 className="text-themeyellow border-rounded-lg border-themeyellow px-6 py-2 text-lg border border-gray-200 rounded-lg p-5">
          60% Off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
        Wired <br /> Earbuds
        </h1>
        <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold cursor-pointer">
          SHOP NOW
        </button>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end gap-6 bg-cover p-10 rounded-lg"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <h1 className="text-themeyellow border-rounded-lg border-themeyellow px-6 py-2 text-lg border border-gray-200 rounded-lg p-5 ">
          60% Off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Smart<br /> Watches
        </h1>
        <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Types;