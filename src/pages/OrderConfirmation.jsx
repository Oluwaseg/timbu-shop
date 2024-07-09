import { useState } from "react";
import Search from "../components/Search";
import { MdMenu, MdClose } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import Favourite from "../components/Favourite";
import Down from "../components/Down";
import ShoppingCart from "../components/ShoppingCart";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

import BreadcrumArrow from "../components/BreadcrumArrow";

export default function OrderConfirmation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="bg-[#FBF4F5] w-full h-full flex flex-col gap-6 md:pb-16 pb-10">
      <div className="bg-primary md:bg-secondary">
        <div className="p-1">
          {/* Navbar */}
          {/* Desktop View */}
          <div className="hidden md:flex lg:px-8 lg:py-1 mt-4 md:px-4 md:py-2 justify-between items-center s mx-auto w-full lg:w-[90%]">
            <div className="flex items-center lg:gap-8 md:gap-4 px-4 lg:px-8 py-2">
              <p className="lg:text-lg">Home</p>
              <div className="flex lg:gap-2 items-center">
                <p className="lg:text-lg">Products</p>
                <Down className="lg:hidden" />
              </div>
              <p className="lg:text-lg">Contacts</p>
            </div>

            <p className="text-lg header font-medium lg:text-xl">
              Skin <span className="text-[#FFB6C1]">Hub</span>
            </p>

            <div className="flex gap-10 items-center">
              <div className="flex gap-2 lg:gap-4">
                <Search />
                <Favourite />
                <ShoppingCart />
              </div>
              <Button buttonText={"Login"} />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden w-full px-4 py-2 flex justify-between items-center">
            <NavLink to="/">
              <FaArrowLeftLong size={25} />
            </NavLink>

            <p className="text-xl header font-medium header absolute left-1/2 transform -translate-x-1/2">
              Check Out
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
        {/* Mobile Nav */}
        <div className="md:hidden mt-1 border-b-2 border-black">
          <nav className="p-3">
            <ul className="flex justify-center text-gray-600 overflow-x-auto whitespace-nowrap responsive-nav">
              <li className="ml-2 px-3 py-1 hover:text-pink-600">Body Care</li>
              <li className="px-2 py-1 hover:text-pink-600">Face Care</li>
              <li className="px-2 py-1 hover:text-pink-600">Private Hygiene</li>
              <li className="px-2 py-1 hover:text-pink-600">Scents</li>
            </ul>
          </nav>
        </div>

        {/* Desktop and Tablet Nav */}
        <div className="hidden md:flex justify-center mt-6 border-b-2 border-black ">
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
      </div>
      <div className="flex max-md:flex-col max-md:gap-3 justify-between w-full md:px-16 mx-auto">
        <div className="md:flex md:gap-8 hidden">
          <p className="font-medium">Check out</p> <BreadcrumArrow />
          <p>
            <span className="font-medium">MEDIX 5.5</span> Body Moisturizer
          </p>
          <p>Glycolic and Lactic Acid Body Moisturizer</p>
        </div>
        <p className="font-medium max-md:ml-5 max-md:text-base">
          Already an existing customer?
          <span className="text-[#DE8C99]">Please Login</span>
        </p>
        <div className="md:hidden bg-[#FFFFFF80] rounded-xl px-5 gap-3 py-8 flex mx-6 ">
          <img className="w-10" src="/medix.png" alt="a product" />
          <div className="flex flex-col gap-1 text-sm">
            <p>
              <span className="font-medium">MEDIX 5.5</span> Body Moisturizer
            </p>
            <p className="text-xs font-extralight">
              Glycolic and Lactic Acid Body Moisturizer
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-16 px-5 w-full flex flex-col items-center gap-6 ">
        <p className="font-bold w-full mt-6 header">Delivery Information</p>
        <form className="bg-[#ffffff] text-accent-500 rounded-lg md:py-4 md:px-2 py-5 px-3 max-md:text-sm w-full">
          <div className="flex flex-col gap-3">
            <label className="font-medium header">
              Please enter your correct delivery details
            </label>
            <div className="flex max-md:flex-col gap-4 md:space-x-14 w-full">
              <input
                type="text"
                placeholder="Name"
                className="block w-full rounded-md border-[#C0C3D0] p-4 h-14 text-accent-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:place-hold placeholder:text-accent-500 sm:text-sm sm:leading-6 bg-input-bg"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="block w-full rounded-md border-[#C0C3D0] p-4 h-14 text-lack shadow-sm ring-1 ring-inset ring-gray-300 placeholder:place-hold placeholder:text-accent-500 sm:text-sm sm:leading-6 bg-input-bg"
              />
            </div>
            <div className="flex gap-3 md:space-x-14 w-full">
              <input
                type="text"
                placeholder="Select state"
                className="block md:w-full w-1/2 rounded-md border-[#C0C3D0] p-4 h-14 text-accent-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:place-hold placeholder:text-accent-500 sm:text-sm sm:leading-6 bg-input-bg"
              />
              <input
                type="text"
                placeholder="Select city"
                className="block md:w-full w-1/2  rounded-md border-[#C0C3D0] p-4 h-14 text-lack shadow-sm ring-1 ring-inset ring-gray-300 placeholder:place-hold placeholder:text-accent-500 sm:text-sm sm:leading-6 bg-input-bg"
              />
            </div>
            <div className="full">
              <input
                type="text"
                placeholder="Address"
                className="block w-full rounded-md border-[#C0C3D0] p-4 h-14 text-accent-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:place-hold placeholder:text-accent-500 sm:text-sm sm:leading-6 bg-input-bg"
              />
            </div>
            <div className="full">
              <input
                type="text"
                placeholder="Order information (Please Include any other details about your delivery)"
                className="block w-full rounded-md border-[#C0C3D0] p-4 h-14 text-accent-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:place-hold placeholder:text-accent-500 sm:text-sm sm:leading-6 bg-input-bg"
              />
            </div>
          </div>
        </form>
        <p className="font-bold w-full header">Order Summary</p>
        <div className="bg-[#ffffff] py-0 md:py-4 rounded-lg md:py-4 max-md:text-sm  md:px-2 w-full">
          <div className="border w-full bg-[#FFB6C1] text-accent-500">
            <div className="flex w-full justify-between py-4 px-2">
              <p className="font-semibold">SubTotal</p>
              <p>#15,000</p>
            </div>
            <div className="flex bg-[#FBF4F5] w-full border-t justify-between py-4 px-2">
              <p className="font-semibold">Shipping Fee</p>
              <p className="max-md:text-left">
                Enter your address to view shipping details
              </p>
            </div>
            <div className="flex bg-[#FBF4F5] border-y w-full justify-between py-4 px-2">
              <p className="font-semibold">Total</p>
              <p>#15,000</p>
            </div>
          </div>
        </div>
        <NavLink
          to="/delivery"
          className="bg-[#FFB6C1] text-center font-bold w-full md:w-1/2 md:py-5 md:px-5 py-3 px-3 rounded-full"
        >
          Confirm Order
        </NavLink>
      </div>
    </div>
  );
}
