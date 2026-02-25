import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { reviewdata } from '../export';

const Reviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div
      id='testimonials'
      className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'
    >

      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className='text-themepurple text-xl font-semibold capitalize'
      >
        Testimonials
      </h1>

      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className='text-black font-semibold text-[42px] leading-[50px] text-center capitalize'
      >
        Our Customers Love
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className='w-full mt-10'
      >
        <Slider {...settings}>

          {reviewdata.map((item, index) => (
            <div key={index}>
              <div className='w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-5 bg-white rounded-lg shadow-sm'>

                <img
                  src={item.img}
                  alt={item.name}
                  className='rounded-full w-[100px]'
                />

                <div className='flex justify-center gap-1'>
                  <FaStar className='text-themepurple' />
                  <FaStar className='text-themepurple' />
                  <FaStar className='text-themepurple' />
                  <FaStar className='text-themepurple' />
                  <FaStar className='text-themepurple' />
                </div>

                <p className='text-center text-gray-500 text-lg'>
                  {item.para}
                </p>

                <div className='flex justify-center items-center gap-4'>
                  <FaQuoteLeft className='text-themepurple text-3xl' />

                  <div className='flex flex-col items-start'>
                    <h1 className='text-black text-xl capitalize font-semibold'>
                      {item.name}
                    </h1>
                    <h1 className='text-gray-500 capitalize text-sm'>
                      {item.post}
                    </h1>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </Slider>
      </div>

    </div>
  )
}

export default Reviews