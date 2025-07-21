import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-20 border-t border-gray-300 text-center md:text-left">
      <div className="md:flex justify-between items-center">
        <p className="text-gray-600">
          Tous droits réservés • Achraf Bouchalghouma
        </p>
        <div className="flex justify-center md:justify-end gap-4 text-gray-600 mt-4 md:mt-0">
          <FaFacebook className="hover:text-[#1376F8] cursor-pointer" />
          <FaTwitter className="hover:text-[#1376F8] cursor-pointer" />
          <FaLinkedin className="hover:text-[#1376F8] cursor-pointer" />
          <FaInstagram className="hover:text-[#1376F8] cursor-pointer" />
        </div>
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Medi-Clinique Hamdi Ben Haj rhouma.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
