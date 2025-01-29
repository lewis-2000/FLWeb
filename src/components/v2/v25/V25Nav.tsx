import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaFaceMehBlank } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const V25Nav: React.FC = () => {
  return (
    <div className="fixed flex flex-col justify-around h-screen items-center py-3 w-1/5 overflow-hidden bg-white  z-50">
      {/* Logo */}
      <div className="logo w-full flex  justify-center items-center">
        <img
          className="w-12 h-12 sm:w-28 sm:h-28 object-cover rounded-full bg-gray-400"
          src="/FLWeb/fairyGreen.png"
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col justify-center items-start gap-4 h-full text-base sm:text-lg font-medium">
        <a
          href="#"
          className="text-[#000000] hover:text-[#ff2e00] flex p-2 items-center gap-2"
        >
          <RiHome7Fill size={20} />{" "}
          <span className="hidden sm:block ">Home</span>
        </a>
        <a
          href="#"
          className="text-[#000000] hover:text-[#ff2e00] flex p-2 items-center gap-2"
        >
          <BiSolidBinoculars size={20} />{" "}
          <span className="hidden sm:block ">Portfolio</span>
        </a>
        <a
          href="#"
          className="text-[#000000] hover:text-[#ff2e00] flex p-2 items-center gap-2"
        >
          <FaFaceMehBlank size={20} />{" "}
          <span className="hidden sm:block ">Who am I?</span>
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="social-media-icons flex justify-center flex-wrap gap-4">
        <a
          href="#"
          className="text-[#000000] hover:text-[#1877f2] flex items-center"
          aria-label="Facebook"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          className="text-[#000000] hover:text-[#1da1f2] flex items-center"
          aria-label="Twitter"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="#"
          className="text-[#000000] hover:text-[#e1306c] flex items-center"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="text-[#000000] hover:text-[#0077b5] flex items-center"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  );
};

export default V25Nav;
