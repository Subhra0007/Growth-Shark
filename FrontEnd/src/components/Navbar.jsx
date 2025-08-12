import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar({ toggleMode, isStealth }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "" },
    { name: "Career", link: "/career" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const services = [
    { name: "Automation & Personalization", link: "/services/automation" },
    { name: "B2B SEO", link: "/services/b2b" },
    { name: "Blog Writing", link: "/services/blog" },
    { name: "Community Engagement", link: "/services/communityengagement" },
    { name: "Community Management", link: "/services/communitymanagement" },
    { name: "Content Creation & Scheduling", link: "/services/contentcreation" },
    { name: "Copywriting", link: "/services/copywriting" },
    { name: "E-commerce SEO", link: "/services/ecommerce" },
    { name: "Email Campaigns", link: "/services/emailcampaign" },
    { name: "Email Marketing", link: "/services/emailmarketing" },
    { name: "Facebook Marketing", link: "/services/facebookmarketing" },
    { name: "Feedback & Review Management", link: "/services/feedback" },
    { name: "Instagram Marketing", link: "/services/instamarketing" },
    { name: "Online Engagement", link: "/services/onlineengagement" },
    { name: "Social Listening & Monitoring", link: "/services/sociallistening" },
    { name: "Video Content", link: "/services/videocontent" },
  ];

  const portfolioPaths = [
    "/portfolio/smm1",
    "/portfolio/smm2",
    "/portfolio/pms",
    "/portfolio/ocs",
    "/portfolio/cb2b",
  ];

  const redirectPaths = [
    ...portfolioPaths,
    "/career", "/about", "/portfolio", "/contact",
    ...services.map((s) => s.link),
  ];

  const handleToggleMode = () => {
    toggleMode();

    //  Scroll to top instantly when toggling modes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // change to "smooth" for animation
    });

    if (redirectPaths.includes(location.pathname.toLowerCase())) {
      navigate("/");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reusable underline
  const Underline = ({ link }) => (
    <motion.div
      initial={{ width: 0 }}
      animate={
        hovered === link || location.pathname === link
          ? { width: "100%" }
          : { width: 0 }
      }
      transition={{ duration: 0.3 }}
      className={`absolute left-0 -bottom-1 h-0.5 ${
        location.pathname === link ? "bg-lime-400" : "bg-white"
      }`}
    />
  );

  // Detect if any service page is active
  const isServicePage = services.some((s) => s.link === location.pathname);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto mt-4 px-6 py-1 rounded-full bg-[#71b5f0] text-black shadow-xl flex items-center justify-between">
        <Link to="/" onClick={() => isStealth && toggleMode()}>
          <img src={logo} alt="Logo" className="h-20 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium text-lg relative">
  {navItems.map((item) => (
    <div
      key={item.name}
      className="relative"
      onMouseEnter={() => setHovered(item.link)}
      onMouseLeave={() => setHovered(null)}
    >
      {item.name === "Services" ? (
        <div ref={dropdownRef}>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="flex items-center gap-1 relative group px-1 py-1 transition text-black cursor-pointer"
          >
            {item.name}
            <FaChevronDown
              className={`transition-transform duration-200 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
              size={14}
            />
            {/* Underline animation with soft black shadow */}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                isServicePage
                  ? "w-full bg-lime-400 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                  : "w-0 group-hover:w-full bg-white"
              }`}
            />
          </button>
          <div
            className={`absolute top-full left-0 mt-3 w-64 max-h-72 overflow-y-auto bg-[#71b5f0] text-black shadow-lg rounded-lg origin-top transition duration-300 ${
              isServicesOpen ? "animate-fadeScale" : "hidden"
            }`}
          >
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.link}
                onClick={() => setIsServicesOpen(false)}
                onMouseEnter={() => setHovered(service.link)}
                onMouseLeave={() => setHovered(null)}
                className="relative block px-4 py-3 transition text-black group"
              >
                {service.name}
                {/* Underline for dropdown links */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
                    location.pathname === service.link
                      ? "w-full bg-lime-400 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                      : "w-0 group-hover:w-full bg-white"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          to={item.link}
          className="relative group px-1 py-1 transition text-black"
        >
          {item.name}
          {/* Underline animation with soft black shadow */}
          <span
            className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
              location.pathname === item.link
                ? "w-full bg-lime-400 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                : "w-0 group-hover:w-full bg-white"
            }`}
          />
        </Link>
      )}
    </div>
  ))}
</div>

        {/* Toggle Button */}
      <button
  onClick={handleToggleMode}
  className="ml-6 px-5 py-2 rounded-full bg-lime-400 text-black font-bold shadow-lg shadow-black/50 hover:brightness-110 transition hidden md:flex cursor-pointer"
>
  {isStealth ? "TOGGLE ATTACK MODE" : "TOGGLE STEALTH MODE"}
</button>


        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#71b5f0] text-black shadow-lg rounded-3xl px-6 py-4 animate-fadeScale">
          <ul className="flex flex-col gap-4 text-lg">
            {navItems.map((item) =>
              item.name === "Services" ? (
                <li key="services">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center gap-2 w-full"
                  >
                    Services
                    <FaChevronDown
                      className={`transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                      size={14}
                    />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="mt-2 ml-4 max-h-64 overflow-y-auto pr-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.link}
                          className="block py-2 text-sm hover:text-white"
                          onClick={() => {
                            setIsMobileServicesOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
            <li>
              <button
                onClick={() => {
                  handleToggleMode();
                  setIsOpen(false);
                }}
                className="mt-4 w-full px-4 py-2 bg-lime-400 text-black font-bold rounded-full shadow-lg shadow-black/50 cursor-pointer"
              >
                {isStealth ? "TOGGLE ATTACK MODE" : "TOGGLE STEALTH MODE"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
