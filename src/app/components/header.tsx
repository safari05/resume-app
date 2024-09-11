"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [blur, setBlur] = useState(0);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header') as HTMLHeadingElement | null;

      if (header) {
        const headerOffsetTop = header.offsetTop;
        const scrollTop = window.pageYOffset;
        if (scrollTop > headerOffsetTop) {
          setIsFixed(true);
          // Adjust opacity based on scroll position
          const newOpacity = Math.max(0.5, 1 - scrollTop / 400); // Adjust 400 as needed
          setOpacity(newOpacity);
          // Adjust blur based on scroll position
          const newBlur = Math.min(10, scrollTop / 50); // Adjust 50 as needed
          setBlur(newBlur);
        } else {
          setIsFixed(false);
          setOpacity(1);
          setBlur(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex items-center z-10 transition-transform duration-300 ${
        isFixed ? 'fixed top-0 left-0 bg-white shadow-md' : 'absolute bg-transparent'
      }`}
      style={{ 
        height: '80px', 
        opacity: opacity,
        backdropFilter: `blur(${blur}px)`, // Apply blur effect
        WebkitBackdropFilter: `blur(${blur}px)`, // For Safari
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full relative">
          <div className="px-6">
            <Link className="font-bold text-lg text-primary" href="#home">erisafari</Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link className="text-base text-dark hover:text-primary" href="#home">Home</Link>
            <Link className="text-base text-dark hover:text-primary" href="#about">About Me</Link>
            <Link className="text-base text-dark hover:text-primary" href="#portfolio">Portfolio</Link>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            onClick={handleHamburgerClick}
            className={`block md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 ${isOpen ? 'hamburger-active' : ''}`}
          >
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>

          {/* Mobile Nav Menu */}
          <nav
            id="nav-menu"
            className={`fixed top-16 right-0 bg-white shadow-lg rounded-lg transition-transform duration-300 md:hidden ${
              isOpen ? 'block' : 'hidden'
            }`}
            style={{ width: '250px', height: 'calc(100vh - 80px)' }} // Adjust height and width for mobile menu
          >
            <ul className="block">
              <li>
                <Link className="block text-base text-dark py-2 px-4 hover:bg-gray-200" href="#home">Home</Link>
              </li>
              <li>
                <Link className="block text-base text-dark py-2 px-4 hover:bg-gray-200" href="#about">About Me</Link>
              </li>
              <li>
                <Link className="block text-base text-dark py-2 px-4 hover:bg-gray-200" href="#portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
