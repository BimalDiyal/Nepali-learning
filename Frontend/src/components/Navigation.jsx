import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
 
  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/login", label: "Login" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-0 py-4">
          <div className="flex items-center w-full relative">
          
            <div
              className="flex items-center gap-2 cursor-pointer z-10 flex-shrink-0"
              style={{ minWidth: '180px' }}
              onClick={() => {
                if (location.pathname === '/') {
                  scrollToTop();
                } else {
                  navigate("/");
                }
              }}
            >
              <div className="w-10 h-10">
                <img src={logo} alt="Nepali Learn Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Nepali<span className="text-yellow-500">Learn</span>
              </span>
            </div>

            <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-900 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {navLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`hover:text-yellow-600 transition-colors duration-200 ${
                    location.pathname === link.to ? 'text-yellow-600' : ''
                  }`}
                  onClick={link.to === '/' ? handleHomeClick : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 ml-auto">
              <Link
                to="/lessons"
                className="hidden md:block bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Start Learning
              </Link>
              <Link
                to="/login"
                className="hidden md:block bg-gray-200 hover:bg-gray-300 text-black px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Login
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-10 flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-800" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`mobile-menu md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 ${
                    location.pathname === link.to 
                      ? 'text-yellow-600 bg-yellow-50' 
                      : 'text-gray-900 hover:text-yellow-600 hover:bg-gray-50'
                  }`}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (link.to === '/' && location.pathname === '/') {
                      e.preventDefault();
                      scrollToTop();
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/lessons"
                className="text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 bg-yellow-500 hover:bg-yellow-600 text-white text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Learning
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-20 md:h-16"></div>
    </>
  );
};

export default Header;
