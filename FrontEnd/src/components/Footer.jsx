import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FooterBg from '../assets/Footer.png';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] py-5">
      {/* Glow */}
      {/* <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[900px] h-[300px] bg-sky-400/20 rounded-full blur-3xl"></div>
      </div> */}
      {/* Always show background image */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={FooterBg}
          alt="Footer Background"
          className="w-full h-full object-cover brightness-50 contrast-125"
        />
      </div> */}

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex lg:flex-row flex-col justify-evenly gap-10 mt-15">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="GrowthShark" className="w-24 mb-4" />
          <p className="text-base sm:text-lg font-semibold leading-relaxed">
            It's Time To Pull In A <br />
            <span className="text-sky-400">Professional</span>
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center text-center">
  <h3 className="text-xl font-bold mb-3">Menu</h3>
  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
    <li>
      <Link to="/" className="hover:text-white transition">
        Home
      </Link>
    </li>
   <li>
      <Link to="/career" className="hover:text-white transition">
        Career
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-white transition">
        About Us
      </Link>
    </li>
     <li>
      <Link to="/portfolio" className="hover:text-white transition">
        Portfolio
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-white transition">
        Contact Us
      </Link>
    </li>
  </ul>
</div>

        {/* Useful Links
         <div className="flex flex-col items-center text-center">
  <h3 className="text-xl font-bold mb-3">Services</h3>
  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
    <li>
      <Link to="/services/automation" className="hover:text-white transition">
        Automation & Personalization
      </Link>
    </li>
   <li>
      <Link to="/services/b2b" className="hover:text-white transition">
        B2B SEO
      </Link>
    </li>
    <li>
      <Link to="/services/blog" className="hover:text-white transition">
        Blog Writing
      </Link>
    </li>
     <li>
      <Link to="/services/communityengagement" className="hover:text-white transition">
        Community Engagement
      </Link>
    </li>
    <li>
      <Link to="/services/communitymanagement" className="hover:text-white transition">
         Community Management
      </Link>
    </li>
    <li>
      <Link to="/services/contentcreation" className="hover:text-white transition">
         Content Creation & Scheduling
      </Link>
    </li>
    <li>
      <Link to="/services/copywriting" className="hover:text-white transition">
         Copywriting
      </Link>
    </li>
    <li>
      <Link to="/services/ecommerce" className="hover:text-white transition">
        E-commerce SEO
      </Link>
    </li>
    <li>
      <Link to="/services/emailcampaign" className="hover:text-white transition">
         Email Campaigns
      </Link>
    </li>
     <li>
      <Link to="/services/emailmarketing" className="hover:text-white transition">
        Email Marketing
      </Link>
    </li>
     <li>
      <Link to="/services/communitymanagement" className="hover:text-white transition">
         Community Management
      </Link>
    </li>
     <li>
      <Link to="/services/communitymanagement" className="hover:text-white transition">
         Community Management
      </Link>
    </li>
     <li>
      <Link to="/services/communitymanagement" className="hover:text-white transition">
         Community Management
      </Link>
    </li>
     <li>
      <Link to="/services/communitymanagement" className="hover:text-white transition">
         Community Management
      </Link>
    </li>
     <li>
      <Link to="/services/communitymanagement" className="hover:text-white transition">
         Community Management
      </Link>
    </li>
     <li>
      <Link to="/services/communitymanagement" className="hover:text-white transition">
         Community Management
      </Link>
    </li>
  </ul>
</div> */}

        {/* Contact + Social */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3">Connect Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              <a
                href="mailto:Marketing@Proriterz.Com"
                className="underline hover:text-white transition"
              >
                Marketing@Proriterz.Com
              </a>
            </li>
            <li>
              <a
                href="mailto:Diptesh@Proriterz.Com"
                className="underline hover:text-white transition"
              >
                Diptesh@Proriterz.Com
              </a>
            </li>
            <li className="text-gray-300 font-medium mt-1">+91 83482 96083</li>
          </ul>
          <div className="flex gap-4 mt-4 text-sky-300 text-xl">
            <a href="https://www.facebook.com" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://telegram.org" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-sm text-gray-400 pb-6 px-6 max-w-6xl mx-auto mt-10">
        © 2025 Proriterz. All Rights Reserved.
      </div>
    </footer>
  );
}
