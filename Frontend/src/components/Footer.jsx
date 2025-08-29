import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div className="bg-[#133251]  flex justify-center items-center">
      <footer className=" bg-[#133251] text-white w-[1400px] p-5 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <img src={logo} alt="Nepali Learn Logo" className="w-full h-full object-contain " />
              </div>
              <span className="text-xl font-semibold">
                Nepali<span className="text-cyan-500">Learn</span>
              </span>
            </div>
            <p className="text-gray-300">Empowering You To Speak Nepali.</p>
          </div>


          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">Learn Languages Online:</h3>
            <div className="grid grid-cols-2 gap-1 text-gray-200">
              {[
                "Nepali", "English", "Spanish", "French", "Italian",
                "German", "Chinese", "Swedish", "Latin",
                "Greek", "Turkish", "Japanese"
              ].map((lang, index) => (
                <span key={index}>{lang}</span>
              ))}
            </div>
          </div>


          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">Quick Links:</h3>
            <ul className="text-gray-200 space-y-1">
              <li>
                <Link to="/about" className="hover:text-cyan-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cyan-300">Privacy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-300">Terms</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-cyan-300">Products</Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-cyan-300">Refund</Link>
              </li>
              <li>
                <Link to="/demo-courses" className="hover:text-cyan-300">Demo Courses</Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-cyan-400 font-semibold mb-2">Contact us by Email</h3>
            <p className="text-gray-200 mb-4">nepalilearn@gmail.com</p>

            <h3 className="text-cyan-400 font-semibold mb-2">Connect with us:</h3>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-[#133251] p-2 rounded hover:bg-cyan-400 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-[#133251] p-2 rounded hover:bg-cyan-400 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 text-[#133251] p-2 rounded hover:bg-cyan-400 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-300 text-sm mt-10">
          © 2025 Nepali Learners. All rights reserved.
        </p>
      </footer>
    </div>

  );
};

export default Footer;


