import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import Search from "./Search";
import Favourite from "./Favourite";
import Down from "./Down";
import ShoppingCart from "./ShoppingCart";
import Button from "./Button";

const navItems = [
  { name: "Home", path: "/", hasDropdown: false },
  { name: "Products", path: "/products", hasDropdown: true },
  { name: "Contacts", path: "/contacts", hasDropdown: false },
];

const Navbar = ({ bg }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div
        className={`hidden md:flex ${
          !bg && "bg-white shadow-pink-gradient"
        } rounded-full lg:px-8 lg:py-2 mt-4 md:px-4 md:py-2 justify-between items-center mx-auto w-full lg:w-[90%] ${
          isFixed && !bg ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        <div className="flex items-center lg:gap-8 md:gap-4 px-4 lg:px-8 py-2">
          {navItems.map((item) => (
            <div key={item.name} className="flex items-center lg:gap-2">
              <Link to={item.path} className="lg:text-lg">
                {item.name}
              </Link>
              {item.hasDropdown && <Down className="lg:hidden" />}
            </div>
          ))}
        </div>

        <p className="text-lg header font-medium lg:text-xl">
          Skin <span className="text-[#FFB6C1]">Hub</span>
        </p>

        <div className="flex gap-10 items-center">
          <div className="flex gap-2 lg:gap-4 items-center">
            <Search />
            <Favourite />
            <ShoppingCart />
          </div>
          <Button buttonText={"Login"} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden bg-white w-full px-4 py-2 flex justify-between items-center">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>

        <p className="text-xl font-medium header absolute left-1/2 transform -translate-x-1/2">
          Skin <span className="text-[#FFB6C1]">Hub</span>
        </p>

        <div className="flex gap-3">
          <Favourite />
          <ShoppingCart />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
          <button className="absolute top-4 right-4" onClick={toggleMobileMenu}>
            <MdClose size={32} />
          </button>
          <nav className="flex flex-col gap-6 text-xl">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={toggleMobileMenu}>
                <div className="flex items-center gap-2">
                  <p>{item.name}</p>
                  {item.hasDropdown && <Down />}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
