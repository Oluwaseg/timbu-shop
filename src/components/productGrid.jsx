import React from "react";
import { NavLink } from "react-router-dom";
import BoxedFavourite from "./BoxedFavourite";
import Button from "./Button";

const ProductGrid = ({ products }) => {
  return (
    <div className="flex w-full md:flex-wrap md:mb-16">
      {products.map((product, index) => (
        <div
          key={index}
          className={`w-full md:w-1/4 ${
            index % 2 === 0 ? "md:border-t border-[#332427] pt-12" : ""
          }`}
        >
          {index % 2 === 1 && (
            <div className="w-full h-12 border-b border-[#332427] border-x"></div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full md:w-[95%] ${
              index % 2 === 1 ? "md:mt-12" : ""
            } md:border-2 border-dashed ${
              product.borderColor || "border-zinc-400"
            } md:mx-auto`}
          />
          <div className="flex flex-col mt-6 gap-4 w-full md:w-[95%] mx-auto">
            <div className="text-lg">
              <p className="text-[#5C4B4E]">
                <span className="font-medium text-xl text-[#332427]">
                  {product.name}
                </span>{" "}
                {product.category}
              </p>
              <p className="text-[#5C4B4E]">
                {product.details || "Details not available"}
              </p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-lg font-bold w-fit">{product.price}</p>
              <div className="flex gap-2 items-center">
                <NavLink to={`/products/${product.id}`}>
                  <Button buttonText={"View Details"} />
                </NavLink>
                <BoxedFavourite />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
