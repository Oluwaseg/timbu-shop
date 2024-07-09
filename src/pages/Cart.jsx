import { useState } from "react";
import Search from "../components/Search";
import { MdMenu, MdClose } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import Favourite from "../components/Favourite";
import Down from "../components/Down";
import ShoppingCart from "../components/ShoppingCart";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-primary md:bg-secondary min-h-screen ">
        <div className="p-2">
          {/* Navbar */}
          {/* Desktop View */}
          <Navbar bg={true} />

          {/* Mobile View */}
          <div className="md:hidden w-full px-4 py-2 flex justify-between items-center">
            <NavLink to="/">
              <FaArrowLeftLong size={25} />
            </NavLink>

            <p className="text-xl font-medium header absolute left-1/2 transform -translate-x-1/2">
              Product
            </p>

            <div className="flex gap-3">
              <Search />
              <ShoppingCart />
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <MdClose size={24} />
                ) : (
                  <MdMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
              <button
                className="absolute top-4 right-4"
                onClick={toggleMobileMenu}
              >
                <MdClose size={32} />
              </button>
              <nav className="flex flex-col gap-6 text-xl">
                <p>Home</p>
                <div className="flex items-center gap-2">
                  <p>Products</p>
                  <Down />
                </div>
                <p>Contacts</p>
              </nav>
            </div>
          )}
        </div>

        <div className="">
          {/* Mobile Nav */}
          <div className="md:hidden mt-4 border-b-2 border-black">
            <nav className="p-3">
              <ul className="flex justify-center text-gray-600 overflow-x-auto whitespace-nowrap responsive-nav">
                <li className="ml-2 px-3 py-1 hover:text-pink-600">
                  Body Care
                </li>
                <li className="px-2 py-1 hover:text-pink-600">Face Care</li>
                <li className="px-2 py-1 hover:text-pink-600">
                  Private Hygiene
                </li>
                <li className="px-2 py-1 hover:text-pink-600">Scents</li>
              </ul>
            </nav>
          </div>

          {/* Desktop and Tablet Nav */}
          <div className="hidden md:flex justify-center mt-8 border-b-2 border-black ">
            <nav className="w-full max-w-4xl">
              <ul className="flex justify-between text-gray-600 text-lg font-medium pb-2">
                <li className="hover:text-pink-600 cursor-pointer px-4 ">
                  Body Care
                </li>
                <li className="hover:text-pink-600 cursor-pointer px-4 ">
                  Face Care
                </li>
                <li className="hover:text-pink-600 cursor-pointer px-4 ">
                  Private Hygiene
                </li>
                <li className="hover:text-pink-600 cursor-pointer px-4 ">
                  Scents
                </li>
              </ul>
            </nav>
          </div>

          <div className="bg-primary rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col items-center justify-start bg-primary">
              {" "}
              {/* Updated justify-center to justify-start */}
              <div className="bg-white p-8">
                {" "}
                <div className="w-full h-64 md:w-96 md:h-auto flex items-center justify-center">
                  <img
                    src="../../public/Amalactin.png"
                    alt="MEDIX 5.5 Body Moisturizer"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h1 className="hidden text-2xl  font-bold mt-8 md:block">
                Related Products
              </h1>
              <div className="hidden md:grid md:grid-cols-2 md:gap-6 md:mt-4">
                <div className="text-center">
                  <img
                    src="/public/Olay.png"
                    alt="Retinol Bodycare Lotion"
                    className="w-43 mx-auto mb-2 h-42"
                  />
                  <p className="text-lg header font-medium">
                    Olay <span className="text-gray-500">Bodycare Lotion</span>
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="/public/Naturium.png"
                    alt="Bronze Goddess Bodycare Lotion"
                    className="w-43 mx-auto mb-2 h-50"
                  />
                  <p className="text-lg font-medium header">
                    Naturium
                    <span className="text-gray-500 ml-1">Bodycare Lotion</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 mt-6 md:mt-0 md:ml-6 flex flex-col items-start">
              {" "}
              {/* Added flex-col and items-start */}
              <h2 className="text-3xl font-regular mb-4 header">
                MEDIX 5.5{" "}
                <span className="text-gray-600">Body Moisturizer</span>
              </h2>
              <p className="text-gray-600 mb-2 font-regular">
                Glycolic and Lactic Acid Body Moisturizer
              </p>
              <p className="text-xl font-bold my-4">₦15,000</p>
              <p className="mb-4 leading-normal text-xl font-italic">
                Medix 5.5 Glycolic and Lactic Acid Body Moisturizer is
                dermatologist-tested and formulated to provide maximum benefits
                without compromising on gentleness. Perfect for all skin types,
                it’s your go-to solution for achieving healthier, glowing skin.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Exfoliation: Glycolic acid gently removes dead skin cells,
                  promoting cell turnover and revealing fresher, smoother skin.
                </li>
                <li>
                  Hydration: Lactic acid hydrates and softens the skin,
                  improving texture and tone.
                </li>
                <li>
                  pH Balanced: Formulated with a pH of 5.5 to maintain your
                  skin's natural barrier and prevent irritation.
                </li>
                <li>
                  Anti-Aging: Reduces the appearance of fine lines, wrinkles,
                  and hyperpigmentation for a more youthful look.
                </li>
              </ul>
              {/* Desktop Version */}
              <div className="hidden md:flex md:flex-wrap md:items-center md:mb-4 md:space-x-4">
                <div className="flex items-center border-2 border-[#de8c99] rounded-full py-1">
                  <button className="text-accent-500 px-4 py-0 border-r border-accent-500">
                    -
                  </button>
                  <span className="text-lg px-6 font-semibold">1</span>
                  <button className="text-accent-500 px-4 py-0 border-l border-accent-500 font-semibold">
                    +
                  </button>
                </div>
                <button
                  onClick={openModal}
                  className="bg-[#ffb6c1] text-accent-500 font-semibold border border-[#de8c99] px-12 py-2 rounded-full focus:outline-none"
                >
                  Add to Cart
                </button>
                <button className="border border-[#de8c99] text-accent-500 px-6 py-2 rounded-full focus:outline-none font-semibold">
                  Save for Later
                </button>
              </div>
              {/* Mobile Version */}
              <div className="md:hidden flex flex-wrap items-center justify-center space-x-2 mb-4">
                <div className="flex items-center border-2 border-[#de8c99] rounded-md p-1">
                  <ShoppingCart className="text-[#de8c99]" size={20} />
                </div>
                <div className="flex items-center border-2 border-[#de8c99] rounded-md p-1">
                  <Favourite size={20} className="text-[#de8c99]" />
                </div>
                <button
                  onClick={openModal}
                  className="bg-[#ffb6c1] text-accent-500 font-semibold border border-[#de8c99] px-8 py-1 rounded-full focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-8">
                <div className="">
                  <div className="border-b border-gray-400 py-4 flex justify-between items-center cursor-pointer">
                    <p className="text-lg">Additional Information</p>
                    <span className="text-lg sm:ml-72 ml-32">+</span>
                  </div>
                  <div className="border-b border-gray-400 py-4 flex justify-between items-center cursor-pointer mt-4">
                    <p className="text-lg">Reviews</p>
                    <span className="">+</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold mt-8 md:hidden">
              Related Products
            </h1>
            <div className="md:hidden grid grid-cols-2 gap-4 mt-4">
              <div className="text-center">
                <img
                  src="../../public/Olay.png"
                  alt="Retinol Bodycare Lotion"
                  className="w-32 mx-auto mb-2 h-32"
                />
                <p className="text-base header font-medium">
                  Olay <span className="text-gray-500">Bodycare Lotion</span>
                </p>
              </div>
              <div className="text-center">
                <img
                  src="../../public/Naturium.png"
                  alt="Bronze Goddess Bodycare Lotion"
                  className="w-32 mx-auto mb-2 h-32"
                />
                <p className="text-base font-medium header">
                  Naturium
                  <span className="text-gray-500 ml-1">Bodycare Lotion</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-6">
          <p className="text-md font-normal mt-2 mb-4 text-center">
            Product added to cart successfully!
          </p>
          <p className="my-4 text-red-500 font-semibold text-center text-sm">
            Please sign in for proper tracking of your products
          </p>
          <div className="flex flex-col items-center w-full">
            <div className="flex items-start w-full mb-4">
              <img
                src="../../public/cart.png"
                alt="MEDIX 5.5 Body Moisturizer"
                className="w-20 h-30 object-center object-contain mr-4"
              />
              <div className="flex flex-col flex-grow">
                <p className="font-semibold text-lg">
                  MEDIX 5.5 Body Moisturizer
                </p>
                <p className="text-sm text-gray-500">
                  Glycolic and Lactic Acid Body Moisturizer
                </p>
                <div className="flex items-center mt-2">
                  <div className="hidden sm:block border-2 border-[#de8c99] rounded-full">
                    <button className="text-accent-500 px-4 py-1 border-r border-accent-500">
                      -
                    </button>
                    <span className="px-6 py-1 text-lg font-semibold">1</span>
                    <button className="text-accent-500 px-4 py-1 border-l border-accent-500">
                      +
                    </button>
                  </div>
                  {/* Mobile */}
                  <div className="flex sm:hidden">
                    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l">
                      -
                    </button>
                    <span className="px-4 py-1">1</span>
                    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r">
                      +
                    </button>
                  </div>
                  <p className="ml-auto font-semibold text-lg">
                    SubTotal:<span className="font-medium">#15,000</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mt-4">
              <div className="border-b-2 mb-3 border-gray-200 py-2">
                <p className="text-sm font-semibold">Cart Total</p>
              </div>
              <div className="flex justify-between bg-[#fdf0f1] px-2 py-3">
                <p className="text-sm font-semibold">SubTotal</p>
                <p className="text-sm font-semibold">#15,000</p>
              </div>
              <div className="flex justify-between bg-[#ffffff] px-2 py-3">
                <p className="text-sm font-semibold">Order Summary</p>
                <p className="text-sm font-semibold">
                  <Down />
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <NavLink
                  to="/orderConfirmation"
                  className="rounded-full border font-semibold text-center border-[#FFB6C1] bg-white text-[#FFB6C1] py-2  mr-2 flex-grow"
                >
                  Proceed to check out
                </NavLink>
                <NavLink
                  to="/"
                  className="border-2  border-[#DF9BA5] text-center font-semibold text-accent-500 bg-[#FFB6C1] py-2 rounded-full flex-grow"
                >
                  Continue shopping
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
