import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="py-2 px-2 sm:p-4 flex flex-col justify-between h-full">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-42 sm:h-60 object-cover mb-2 sm:mb-4 "
        />
        <h2 className="text-md sm:text-lg font-bold mb-1 sm:mb-2 header">
          {product.name}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 header">
          {product.brand}
        </p>
      </div>
      <div className="flex justify-between items-end mt-2">
        <p className="text-sm sm:text-lg font-semibold">₦{product.price}</p>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="h-8 w-8 sm:h-10 sm:w-10 border border-[#de8c99] rounded-lg flex items-center justify-center">
            <NavLink to="/cart">
              <MdOutlineShoppingCart className="h-4 w-4 sm:h-6 sm:w-6 text-[#de8c99] cursor-pointer" />
            </NavLink>
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
