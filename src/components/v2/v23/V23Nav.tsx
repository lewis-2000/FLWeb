import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const V23Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div
        className={`v23-nav absolute top-0 left-0 right-0 w-full flex justify-end p-5 z-50`}
      >
        <div className="v23-nav__menu pointer:cursor">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={() => setIsOpen(!isOpen)}
            width={36} // Width of the button
            height={30} // Height of the button
            strokeWidth={3} // Thickness of the lines
            color="white" // Color of the lines
            borderRadius={4} // Rounds the ends of the lines
            animationDuration={0.5} // Duration of the animation
          />
        </div>
      </div>

      {/* Full-Screen Menu */}
      {isOpen && (
        <div
          className={`v23-nav__overlay fixed inset-0 bg-black bg-opacity-90 z-40 flex justify-center items-center text-white`}
        >
          <ul className="text-center space-y-5 text-2xl">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default V23Nav;
