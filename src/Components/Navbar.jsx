import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/Logo.svg";
import { FaBars, FaXmark } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navitems array
  const navItems = [
    { label: "Home", path: "home" },
    { label: "About", path: "about" },
    { label: "Service", path: "service" },
    { label: "Product", path: "product" },
    { label: "Testimonal", path: "testimonal" },
    { label: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 bg-brandPrimary lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-full inline-block items-center"
            />
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ label, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base cursor-pointer text-black hover:text-brandPrimary first:font-medium"
              >
                {label}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <DarkMode />
            <a
              href="/"
              className="hidden lg:flex items-center text-black hover:text-neutralDGrey"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign Up
            </button>

          </div>

          {/* menu btn for only mobile devices */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkMode />
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ label, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
