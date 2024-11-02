import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 body-font">
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Company Info */}
        <div className="flex-shrink-0 text-center md:text-left">
          <h1 className="text-white font-bold text-2xl mb-4">SeaSun International</h1>
          <p className="text-sm mb-2">
            Office: MTH Square GF A4 A, East Jakarta, Indonesia
            <br />
            Warehouse: Jl. Pulo Asem Utara Raya No.62, Rawamangun, East Jakarta
          </p>
          <p className="mb-2 text-sm">Email: <a href="mailto:sales.putrabaharimakmur@gmail.com" className="text-blue-400">sales.putrabaharimakmur@gmail.com</a></p>
          <p className="mt-2 text-sm">mobile phone / WhatsApp : +62 85600016626</p>
          <p className="mt-2 text-sm">Phone : 021-4711388</p>
        </div>

        {/* Categories & Quick Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 mt-10 md:mt-0">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-gray-200 tracking-widest text-sm mb-2">CATEGORIES</h2>
            <nav className="text-sm list-none mb-10">
              <li><a className="hover:text-white">Products</a></li>
              <li><a className="hover:text-white">Services</a></li>
              <li><a className="hover:text-white">About Us</a></li>
              <li><a className="hover:text-white">Contact</a></li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-gray-200 tracking-widest text-sm mb-2">SUPPORT</h2>
            <nav className="text-sm list-none mb-10">
              <li><a className="hover:text-white">FAQ</a></li>
              <li><a className="hover:text-white">Shipping</a></li>
              <li><a className="hover:text-white">Returns</a></li>
              <li><a className="hover:text-white">Privacy Policy</a></li>
            </nav>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="bg-gray-800 py-4">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 SeaSun - All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="https://www.facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </Link>
            <Link to="https://www.instagram.com" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </Link>
            <Link to="https://www.twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </Link>
            <Link to="https://www.linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
