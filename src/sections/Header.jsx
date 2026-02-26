import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBars, FaXmark, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  const navItem = [
    { link: "Home", path: "hero" },
    { link: "About", path: "category" },
    { link: "Products", path: "products" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full px-16 py-2 bg-themegreen lg:flex hidden justify-between items-center">
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaPhoneVolume /> +919079460958
        </h1>

        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaMapMarkerAlt /> Chennai, Tamil Nadu – 600040,India
        </h1>

        <h1 className="text-sm font-semibold flex items-center gap-2">
          <MdEmail /> sales@electromart.com
        </h1>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-gray-100 border-b-2 border-themepurple px-16 py-4 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <div className="flex-1">
          <h1 className="text-themepurple font-bold text-4xl italic border-b-4 border-themepurple inline-block pb-1">
            ElectroMart
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="flex-1 lg:flex hidden justify-center items-center gap-6">
          {navItem.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer font-semibold uppercase tracking-wide px-4 py-2 rounded-md hover:bg-themepurple hover:text-white transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex-1 flex justify-end items-center gap-6 text-xl">
          <FaSearch className="cursor-pointer hover:text-themepurple transition" />

          <IoPerson className="cursor-pointer hover:text-themepurple transition" />

          <FaHeart className="cursor-pointer hover:text-themepurple transition" />

          {/* Cart Icon (static) */}
          <div className="cursor-pointer">
            <FaShoppingCart className="hover:text-themepurple transition" />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden text-2xl cursor-pointer ml-4">
            {isMenuOpen ? (
              <FaXmark onClick={() => setIsMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setIsMenuOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md w-full flex flex-col items-center gap-6 py-6">
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer font-semibold uppercase hover:text-themepurple transition"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
