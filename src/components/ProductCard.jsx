import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../cartContext/index";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`Added ${product.name} to cart!`, {
      position: "top-right",
    });
  };

  return (
    <div className="max-w-full sm:max-w-screen-sm border border-gray-200 rounded-lg overflow-hidden">
      <NavLink to={`/products/${product.id}`} className="flex flex-col">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-42 sm:h-60 object-cover mb-2"
          />
          <h2 className="text-md sm:text-lg font-bold mb-1">{product.name}</h2>
          <p className="text-xs sm:text-sm text-gray-600">{product.category}</p>
        </div>
      </NavLink>
      <div className="flex justify-between items-end p-2 sm:p-4">
        <p className="text-sm sm:text-lg font-semibold">₦{product.price}</p>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div
            className="h-8 w-8 sm:h-10 sm:w-10 border border-[#de8c99] rounded-lg flex items-center justify-center cursor-pointer"
            onClick={handleAddToCart}
          >
            <MdOutlineShoppingCart className="h-4 w-4 sm:h-6 sm:w-6 text-[#de8c99]" />
          </div>
          <div className="h-8 w-8 sm:h-10 sm:w-10 border border-[#de8c99] rounded-lg flex items-center justify-center">
            <FaRegHeart className="h-4 w-4 sm:h-6 sm:w-6 text-[#de8c99] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
