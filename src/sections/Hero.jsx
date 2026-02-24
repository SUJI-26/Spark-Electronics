import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg'
import earbuds from '../assets/earbuds.jpg'
import dslr from '../assets/dslr.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div id='hero' className='w-full lg:h-[700px] h-[600px]'>
      <Slider {...settings}>

        <div className="relative w-full lg:h-[700px] h-[600px]">
          <img src={dslr} className="w-full h-full object-cover" />

          <div className="absolute top-1/2 left-10 -translate-y-1/2 space-y-4">

            <h1 className="text-themeyellow border border-themeyellow px-6 py-2 rounded-lg text-xl w-fit">
              Get upto Discounts 80% Off
            </h1>

            <h1 className="text-white lg:text-[100px] text-[50px] uppercase font-bold">
              DSLR 360 <br /> Camera
            </h1>

            <h1 className="text-white text-2xl">
              100% trusted <span className="text-themeyellow font-semibold">Electronics Gadgets</span>
            </h1>

            <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">
              ONLINE COLLECTIONS
            </button>

          </div>
        </div>



            <div className="relative w-full lg:h-[700px] h-[600px]">
          <img src={earbuds} className="w-full h-full object-cover" />

          <div className="absolute top-1/2 left-10 -translate-y-1/2 space-y-4">

            <h1 className="text-themeyellow border border-themeyellow px-6 py-2 rounded-lg text-xl w-fit">
              Get upto Discounts 80% Off
            </h1>

            <h1 className="text-white lg:text-[100px] text-[50px] uppercase font-bold">
              Wireless <br /> Earbuds
            </h1>

            <h1 className="text-white text-2xl">
              100% trusted <span className="text-themeyellow font-semibold">Electronics Gadgets</span>
            </h1>

            <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">
              ONLINE COLLECTIONS
            </button>

          </div>
        </div>


            <div className="relative w-full lg:h-[700px] h-[600px]">
          <img src={headset} className="w-full h-full object-cover" />

          <div className="absolute top-1/2 left-10 -translate-y-1/2 space-y-4">

            <h1 className="text-themeyellow border border-themeyellow px-6 py-2 rounded-lg text-xl w-fit">
              Get upto Discounts 80% Off
            </h1>

            <h1 className="text-white lg:text-[100px] text-[50px] uppercase font-bold">
              Head<br /> Phone
            </h1>

            <h1 className="text-white text-2xl">
              100% trusted <span className="text-themeyellow font-semibold">Electronics Gadgets</span>
            </h1>

            <button className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">
              ONLINE COLLECTIONS
            </button>

          </div>
        </div>

      </Slider>
    </div>
  );
}

export default Hero;