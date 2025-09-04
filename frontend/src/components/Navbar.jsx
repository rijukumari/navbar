import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brand from "../assets/brand.png"
import logo from "../assets/logo.jpeg";
import {
  FaBars as Menu,
  FaTimes as X,
  FaSearch as Search,
  FaChevronDown as ChevronDown,
  FaChevronRight,
} from "react-icons/fa";


//  NAVIGATION DATA
 

const NAV_LINKS = [
  {
    label: "What we do",
    id: "what-we-do",
    dropdown: {
      categories: [
        {
          title: "Adaptive Enterprise",
          content: {
            heading: "Adaptability is the new edge",
            text: `We empower businesses to stay future-ready by enabling them to evolve with confidence in a fast-changing digital landscape.`,
            button: "Start Adapting",
          },
        },
        {
          title: "Industries",
          submenu: [
            "Banking & Finance",
            "Capital Markets",
            "Consumer Goods",
            "Media & Communications",
            "Education",
            "Energy & Utilities",
            "Healthcare",
            "High Tech",
            "Insurance",
            "Life Sciences",
            "Manufacturing",
            "Public Services",
            "Retail",
            "Travel & Logistics",
          ],
        },
        {
          title: "Services",
          submenu: [
            "Artificial Intelligence & Analytics",
            "Cloud Transformation",
            "Consulting & Advisory",
            "Cybersecurity",
            "Enterprise Platforms",
            "IoT & Digital Engineering",
            "Network Services",
            "Sustainability Solutions",
          ],
        },
        {
          title: "Products & Platforms",
          submenu: [
            "MyBrand Insights™",
            "MyBrand Finance™",
            "MyBrand HR™",
            "MyBrand CX Suite™",
            "MyBrand AI Ops™",
            "MyBrand Learn™",
            "MyBrand Commerce™",
            "MyBrand Retail Optimizer™",
            "Smart Ledger™",
          ],
        },
        {
          title: "Research & Innovation",
          submenu: ["MyBrand Labs", "MyBrand Accelerator™"],
        },
        { title: "Alliances" },
      ],
      content: {
        heading: "Your Digital Growth Partner",
        text: `From strategy to execution, MyBrand helps organizations innovate, adapt, and achieve long-term growth.`,
        button: "Explore Our Work",
      },
    },
  },
  {
    label: "Who we are",
    id: "who-we-are",
    dropdown: {
      categories: [
        { title: "About MyBrand" },
        { title: "Our Identity" },
        { title: "Leadership Team" },
        { title: "Community Impact" },
        { title: "Sustainability Vision" },
        { title: "Diversity & Inclusion" },
        { title: "Our Core Values" },
      ],
      content: {
        heading: "Our Journey",
        text: `We are a passionate team committed to building solutions that create value for people, businesses, and communities across the globe.`,
        button: "Learn More",
      },
    },
  },
  {
    label: "Insights",
    id: "insights",
    dropdown: {
      categories: [
        { title: "Case Studies" },
        { title: "Events & Webinars" },
        { title: "Industry Reports" },
        { title: "Global Research" },
      ],
      content: {
        heading: "Insights that Empower",
        text: `Discover stories, reports, and thought leadership from MyBrand that help businesses transform with technology.`,
        button: "Read Insights",
      },
    },
  },
  {
    label: "Careers",
    id: "careers",
    dropdown: {
      categories: [
        { title: "Shape the Future" },
        {
          title: "India",
          submenu: ["India"],
        },
        {
          title: "Americas",
          submenu: [
            "Argentina",
            "Brazil",
            "Canada",
            "Chile",
            "Colombia",
            "Ecuador",
            "Mexico",
            "Peru",
            "Uruguay",
            "USA",
          ],
        },
        {
          title: "Asia Pacific",
          submenu: [
            "Australia",
            "Mainland China",
            "Hong Kong SAR",
            "Indonesia",
            "Japan",
            "Malaysia",
            "New Zealand",
            "Philippines",
            "Republic of Korea",
            "Singapore",
            "Chinese Taipei",
            "Thailand",
          ],
        },
        {
          title: "Europe and UK",
          submenu: [
            "Belgium",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Hungary",
            "Ireland",
            "Italy",
            "Luxembourg",
            "Netherlands",
            "Norway",
            "Poland",
            "Portugal",
            "Spain",
            "Sweden",
            "Switzerland",
            "United Kingdom",
          ],
        },
        {
          title: "Middle East and Africa",
          submenu: [
            "Bahrain",
            "Israel",
            "Kuwait",
            "Qatar",
            "Saudi Arabia",
            "South Africa",
            "United Arab Emirates",
          ],
        },
      ],
      content: {
        heading: "Grow with MyBrand",
        text: `Join us in shaping the future of business and technology while building your career path with global opportunities.`,
        button: "Explore Careers",
      },
    },
  },
  {
    label: "Newsroom",
    id: "newsroom",
    dropdown: {
      categories: [
        { title: "Press Releases" },
        { title: "Media Kit" },
        { title: "MyBrand in News" },
      ],
      content: {
        heading: "Latest Stories",
        text: `Stay updated with the latest news, announcements, and highlights from MyBrand worldwide.`,
        button: "Visit Newsroom",
      },
    },
  },
  {
    label: "Investors",
    id: "investors",
    dropdown: {
      categories: [
        { title: "Investor Relations" },
        {
          title: "Financial Reports",
          submenu: ["Latest Quarter Commentary", "Annual Report Section"],
        },
        {
          title: "Events & Commentary",
          submenu: [
            "Quarterly Earnings Reports",
            "Download Data Sheet",
            "Archived Financials",
          ],
        },
        {
          title: "Sustainability & ESG",
          submenu: ["Press Releases", "Corporate Actions", "Events", "Calendar"],
        },
        {
          title: "Resources",
          submenu: [
            "Investor FAQs",
            "Tax & Compliance",
            "Stock Information",
            "Analyst Coverage",
            "Subsidiaries",
            "Subscribe to Investor Updates",
            "Unclaimed Dividend Info",
          ],
        },
      ],
      content: {
        custom: (
          <div className="flex flex-col gap-4">
            {/* Stock card */}
            <div className="border border-gray-600 rounded-md flex">
              <div className="w-1/2 p-4 border-r border-gray-700">
                <p className="text-sm font-medium">MyBrand Limited</p>
                <p className="text-xs text-gray-400">NSE:MYBRAND</p>
              </div>
              <div className="w-1/2 p-4 text-right">
                <p className="text-xl font-bold">
                  1,250.75 <span className="text-sm">INR</span>
                </p>
                <p className="text-green-400 text-sm">+8.20 (0.65%) ↑</p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex items-center gap-6">
              <button className="px-4 py-2 rounded-full border border-gray-400 hover:bg-white hover:text-black">
                Discover more
              </button>
              <a href="#" className="text-sm underline hover:text-gray-300">
                Q1FY26 Report
              </a>
            </div>
          </div>
        ),
      },
    },
  },
];



/**
 * Hook: Outside click handler
 */
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/**
 * Navbar Component
 */
export default function TcsNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => setActiveDropdown(null));

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="TCS" className="size-9 rounded-full  " />
            <span className="hidden sm:block text-2xl font-serif uppercase tracking-widest">
             MyBrand
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex  gap-6 text-gray-200 relative">
            {NAV_LINKS.map((link) => (
              <div key={link.id} className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.id ? null : link.id
                    )
                  }
                  className="flex items-center gap-1 text-sm font-medium hover:text-gray-700"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="h-3 w-3" />}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === link.id && link.dropdown && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute mt-5 w-[1000px] h-[100vh] ml-0 bg-slate-900  shadow-lg rounded-lg flex overflow-hidden"
                    >
                      {/* Left column */}
                      <div >
                        {link.dropdown.categories.map((cat) => (
                          <div
                            key={cat.title}
                            className="group relative flex items-center justify-between px-4 py-2 hover:bg-gray-800 cursor-pointer"
                          >
                            {cat.title}
                            {cat.submenu && (
                              <FaChevronRight className="h-3 w-3" />
                            )}
                            {cat.submenu && (
                              <div className="absolute  left-full w-[1000px] hidden group-hover:block ">
                                <div className="grid grid-cols-2 gap-3 px-9">
                                  {cat.submenu.map((item) => (
                                    <div
                                      key={item}
                                      className="px-2 py-1 text-sm hover:bg-slate-800 cursor-pointer rounded"
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                    
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Contact + Search */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline text-xs tracking-widest uppercase hover:text-gray-300"
            >
              Contact Us
            </a>
            <button className="p-2 hover:text-gray-300" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <div className="block">
            <img
              src={brand}
              alt="brand"
              className="size-9 rounded-full ml-2"
            />
            <span className="hidden sm:block text-md font-serif uppercase tracking-widest">
             Brand
            </span>

            </div>


            {/* Mobile Toggle */}
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-gray-700 p-2"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
