import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { NavLink } from "react-router-dom";
import RightSlide from "./RightSlide";
import LeftSlide from "./LeftSlide";
import BoxedFavourite from "./BoxedFavourite";
import Button from "./Button";

const ProductSlider = ({ products }) => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: false,
    modules: [Navigation, Pagination, A11y],
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        {...settings}
        className="w-full overflow-x-auto py-4 custom-scrollbar"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] border-2 border-dashed border-gray-300"
              />
              <div className="flex flex-col mt-6 gap-4 w-full px-4">
                <div className="text-lg text-center">
                  <p className="text-[#5C4B4E]">
                    <span className="font-medium text-xl text-[#332427]">
                      {product.name}
                    </span>{" "}
                    {product.category}
                  </p>
                  <p className="text-[#5C4B4E]">{product.details}</p>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex items-center gap-12 mt-8 lg:mt-0">
        <div onClick={handlePrevClick} className="cursor-pointer">
          <LeftSlide />
        </div>
        <div onClick={handleNextClick} className="cursor-pointer">
          <RightSlide />
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
