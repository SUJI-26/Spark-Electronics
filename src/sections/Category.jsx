import React, { useEffect } from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'
import cat5 from '../assets/cat5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  // Proper structured data
  const categories = [
    { img: cat1, name: "Portable Speakers" },
    { img: cat2, name: "Air Conditioners" },
    { img: cat3, name: "EV Charging cable" },
    { img: cat4, name: "DVD Player slot" },
    { img: cat5, name: "360 Camera" },
  ];

  return (
    <div
      id='category'
      className='w-full bg-gray-100 pt-[130px] pb-[80px]'
    >
      <div className='max-w-[1400px] mx-auto px-6 lg:px-16 flex lg:flex-row flex-col justify-center items-center gap-20'>

        {/* Left Content */}
        <div
          data-aos="zoom-in"
          data-aos-delay="50"
          className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'
        >
          <h1 className='text-themepurple text-xl font-semibold text-center'>
            Favorites item
          </h1>

          <h1 className='text-black font-semibold text-[42px] leading-[50px] text-center lg:text-start'>
            Popular category
          </h1>

          <button className='bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px] cursor-pointer'>
            VIEW ALL
          </button>
        </div>

        {/* Right Grid */}
        <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 gap-10'>
          {categories.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 50}
              className='flex flex-col justify-center items-center gap-6'
            >
              <img
                src={item.img}
                alt={item.name}
                className='rounded-full cursor-pointer border border-gray-200 hover:border-themepurple transition duration-300'
              />

              <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer transition duration-300'>
                {item.name}
              </h1>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Category