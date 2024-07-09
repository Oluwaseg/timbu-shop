import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartContext";
import { useContext } from "react";

const ShoppingCart = ({ size = 30, className = "cursor-pointer" }) => {
  const { cartItemCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className={`relative inline-block ${className}`} onClick={handleClick}>
      {cartItemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-pink-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {cartItemCount}
        </span>
      )}
      <CiShoppingCart size={size} />
    </div>
  );
};

export default ShoppingCart;
