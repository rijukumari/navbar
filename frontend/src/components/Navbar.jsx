import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.jpeg";
import { useTheme } from "../context/ThemeContext";

const NavLink = ({ to, children }) => {
  const { tokens } = useTheme();
  return (
    <Link
      to={to}
      className={`${tokens.typography.link} ${tokens.colors.neutral} ${tokens.colors.hover} 
        transition focus:outline-none focus:ring-2 flex focus:ring-offset-2`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { tokens, theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md 
        ${tokens.colors.surface} ${tokens.colors.border} ${tokens.shadow.md}`}
    >
      <div className={`max-w-7xl mx-auto ${tokens.spacing.container}`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`${tokens.typography.brand} flex text-3xl space-x-3 bg-clip-text  ${tokens.colors.primary}`}
          >
            <img src={logo} alt="logo" className="size-12 rounded-full" />
            <span className="text-3xl font-bold my-1 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              MyBrand
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${tokens.spacing.gap}`}>
            {/* Home Dropdown */}
            <div className="relative ">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "home" ? null : "home")
                }
                className="flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                Home <FaChevronDown size={14} />
              </button>

              {openDropdown === "home" && (
                <div
                  className={`absolute top-6 left-0  w-40 rounded-xl overflow-hidden border space-y-2 
      border-gray-300 dark:border-gray-700
      ${tokens.colors.surface} ${tokens.shadow.md}`}
                >
                  <NavLink
                    to="/dashboard"
                    className=" items-center justify-around gap-2 px-4 py-2 text-sm hover:bg-gray-100 
                 dark:hover:bg-gray-800 transition-colors"
                  >
                    <CiHome className="text-lg" />
                    <span>Dashboard</span>
                  </NavLink>

                  <NavLink
                    to="/highlights"
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 
                 dark:hover:bg-gray-800 transition-colors"
                  >
                    <CgProfile className="text-lg" />
                    <span>Profile</span>
                  </NavLink>

                  <NavLink
                    to="/updates"
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 
                 dark:hover:bg-gray-800 transition-colors"
                  >
                    <MdOutlineSettings className="text-lg" />
                    <span>Settings</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative ">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
                className="flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                About <FaChevronDown size={14} />
              </button>
              {openDropdown === "about" && (
                <div
                  className={`absolute top-6 left-0  w-40 rounded-xl overflow-hidden border space-y-2 
      border-gray-300 dark:border-gray-700
                    ${tokens.colors.surface} ${tokens.shadow.md} ${tokens.radius.md}`}
                >
                  <NavLink
                    to="/about/team"
                    className=" items-center justify-around gap-4 px-4 py-2 text-sm hover:bg-gray-100 
                 dark:hover:bg-gray-800 transition-colors"
                  >
                    {" "}
                    <CiHome className="text-lg " />
                    Our Team
                  </NavLink>
                  <NavLink to="/about/mission">
                    {" "}
                    <CgProfile className="my-1" />
                    Our Story
                  </NavLink>
                  <NavLink to="/about/vision">
                    <MdOutlineSettings className="my-1" />
                    Mission & Vision
                  </NavLink>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "services" ? null : "services"
                  )
                }
                className="flex cursor-pointer  items-center gap-1 focus:outline-none"
              >
                Services <FaChevronDown size={14} />
              </button>
              {openDropdown === "services" && (
                <div
                  className={`absolute top-8 left-0 w-44 p-2 space-y-2 
                    ${tokens.colors.surface} ${tokens.shadow.md} ${tokens.radius.md}`}
                >
                  <NavLink to="/services/web">
                    <CiHome className=" size-5" />
                    Web Development
                  </NavLink>
                  <NavLink to="/services/app">
                    <CgProfile className=" size-5" />
                    UI/UX Design
                  </NavLink>
                  <NavLink to="/services/seo">
                    <MdOutlineSettings className=" size-5" />
                    Consulting
                  </NavLink>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "contact" ? null : "contact")
                }
                className="flex items-center gap-1 cursor-pointer focus:outline-none"
              >
                Contact <FaChevronDown size={14} />
              </button>
              {openDropdown === "contact" && (
                <div
                  className={`absolute top-8 left-0 w-40 p-2 space-y-2 
                    ${tokens.colors.surface} ${tokens.shadow.md} ${tokens.radius.md}`}
                >
                  <NavLink to="/contact/support">
                    <CgProfile className=" size-5 " />
                    Get in Touch
                  </NavLink>
                  <NavLink to="/contact/sales">
                    <CiHome className=" size-5" />
                    Office Location
                  </NavLink>
                  <NavLink to="/contact/careers">
                    <MdOutlineSettings className=" size-5 my-1" />
                    Support
                  </NavLink>
                </div>
              )}
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="ml-4 px-3 py-1 rounded border-1 border-gray-100 focus:outline-none  focus:ring-offset-2"
            />

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded focus:outline-none focus:ring-offset-2 cursor-pointer"
            >
              {theme === "light" ? (
                <FaMoon size={24} />
              ) : (
                <IoSunnyOutline size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 rounded"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden mt-2 p-4 space-y-3 
              ${tokens.colors.surface} ${tokens.radius.md} ${tokens.shadow.md}`}
          >
            {/* Home Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "home" ? null : "home")
                }
                className="w-full cursor-pointer flex justify-between items-center"
              >
                Home <FaChevronDown size={14} />
              </button>
              {openDropdown === "home" && (
                <div className="ml-4 mt-2 space-y-2">
                  <NavLink to="/dashboard">
                    <CiHome className=" size-5 " />
                    Dashboard
                  </NavLink>
                  <NavLink to="/profile">
                    <CgProfile className=" size-5 " />
                    Profile
                  </NavLink>
                  <NavLink to="/settings">
                    <MdOutlineSettings className=" size-5 " />
                    Settings
                  </NavLink>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
                className="w-full cursor-pointer flex justify-between items-center"
              >
                About <FaChevronDown size={14} />
              </button>
              {openDropdown === "about" && (
                <div className="ml-4 mt-2 space-y-2">
                  <NavLink to="/about/team">
                    <CiHome className=" size-5 " />
                    Our Team
                  </NavLink>
                  <NavLink to="/about/story">
                    <CgProfile className=" size-5 " />
                    Our Story
                  </NavLink>
                  <NavLink to="/about/mission">
                    <MdOutlineSettings className=" size-5 " />
                    Mission & Vision
                  </NavLink>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "services" ? null : "services"
                  )
                }
                className="w-full cursor-pointer flex justify-between items-center"
              >
                Services <FaChevronDown size={14} />
              </button>
              {openDropdown === "services" && (
                <div className="ml-4 mt-2 space-y-2">
                  <NavLink to="/services/web">
                    <CiHome className=" size-5 " />
                    Web Development
                  </NavLink>
                  <NavLink to="/services/app">
                    <CgProfile className=" size-5 " />
                    UI/UX Design
                  </NavLink>
                  <NavLink to="/services/seo">
                    <MdOutlineSettings className=" size-5 " />
                    Consulting
                  </NavLink>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "contact" ? null : "contact")
                }
                className="w-full flex cursor-pointer justify-between items-center"
              >
                Contact <FaChevronDown size={14} />
              </button>
              {openDropdown === "contact" && (
                <div className="ml-4 mt-2 space-y-2">
                  <NavLink to="/contact/support">
                    <CiHome className=" size-5 " />
                    Get in Touch
                  </NavLink>
                  <NavLink to="/contact/sales">
                    {" "}
                    <CgProfile className=" size-5 " />
                    Office Location
                  </NavLink>
                  <NavLink to="/contact/careers">
                    <MdOutlineSettings className=" size-5 " />
                    Support
                  </NavLink>
                </div>
              )}
            </div>

            {/* Mobile Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-offset-2"
            />

            {/* Mobile Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="mt-2 w-full px-4 py-2 rounded border text-sm"
            >
              {theme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
