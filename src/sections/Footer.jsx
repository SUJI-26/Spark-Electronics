import React, { useEffect } from "react";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="contact" className="w-full flex flex-col items-center">
      {/* ================= MAIN FOOTER ================= */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-5 grid-cols-1 gap-12">
          {/* BRAND SECTION */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-themepurple italic">
              ElectroMart
            </h1>

            <p className="text-gray-500 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              aperiam facilis atque ullam pariatur. Nemo eligendi officiis
              exercitationem officia reprehenderit.
            </p>

            <div>
              <h2 className="text-xl font-semibold mb-4">Download Our App</h2>

              <div className="flex gap-4">
                <img
                  src={google}
                  alt="Google Play"
                  className="w-[140px] cursor-pointer"
                />
                <img
                  src={apple}
                  alt="App Store"
                  className="w-[140px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Useful Links</h2>

            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-black cursor-pointer transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-black cursor-pointer transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="products"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-black cursor-pointer transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="blogs"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-black cursor-pointer transition"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-black cursor-pointer transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            {" "}
            <h2 className="text-xl font-semibold mb-6">Information</h2>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="hover:text-black cursor-pointer transition"
                >
                  Return Policy
                </Link>
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Refund Policy
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Agreement
              </li>
              <li className="hover:text-black cursor-pointer transition">
                We Our Brand
              </li>
            </ul>
          </div>

          {/* TOP CATEGORY */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Top Category</h2>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:text-black cursor-pointer transition">
                Wireless headphone
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Bluetooth speakers
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Portable devices
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Monio live camera
              </li>
              <li className="hover:text-black cursor-pointer transition">
                Movie projector T6
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Info</h2>
            <ul className="flex flex-col gap-4 text-gray-500">
              <li>Phone: +919079460958</li>
              <li>Email: sales@electromart.com</li>
              <li>
                No. 22, Tech Park Road,Anna Nagar
                <br />
                Chennai, Tamil Nadu – 600040,India
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ================= BOTTOM BAR ================= */}
      <div className="w-full bg-gray-100 border-t py-10">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-3 grid-cols-1 items-center gap-8">
          {/* LEFT - Payments */}
          <div className="flex justify-center lg:justify-start gap-4">
            {[pay1, pay2, pay3, pay4].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="payment"
                className="w-[50px] rounded-lg"
              />
            ))}
          </div>

          {/* CENTER - Newsletter */}
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-semibold">Subscribe Newsletter</h2>

            <div className="flex w-full max-w-[500px]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-6 py-3 rounded-l-lg border outline-none"
              />

              <button className="bg-themepurple text-white px-6 py-3 rounded-r-lg hover:bg-themeyellow hover:text-black transition duration-300 font-semibold cursor-pointer">
                SUBMIT
              </button>
            </div>
          </div>

          {/* RIGHT - Copyright */}
          <div className="text-center lg:text-right text-gray-500">
            © 2026 ElectroMart. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      <div className="bg-themepurple text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-themeyellow hover:text-black cursor-pointer fixed bottom-6 right-6 transition duration-300">
        <Link to="hero" smooth={true} offset={-100} duration={500}>
          <FaArrowUp className="w-[28px] h-[28px]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
