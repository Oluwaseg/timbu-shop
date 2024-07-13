import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../cartContext/index";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ size = 30, className = "cursor-pointer" }) => {
  const { cartState } = useCart();
  const navigate = useNavigate();

  // Calculate total items in the cart
  const cartItemCount = cartState.items.length;

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      onClick={() => navigate("/cart")}
    >
      <CiShoppingCart size={size} />
      {cartItemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-pink-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default ShoppingCart;
