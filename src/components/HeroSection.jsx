import { useState, useEffect } from "react";
import ProductSlider from "./productSlider";
import axiosInstance from "../utils/axiosInstance";
import { Toaster, toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import useMediaQuery from "../utils/media";
import ProductGrid from "./productGrid";
import LeftSlide from "./LeftSlide";
import RightSlide from "./RightSlide";

const HeroSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const fetchProducts = async () => {
    setIsLoading(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      toast.error("Request timed out. Please try again.");
      setIsLoading(false);
    }, 120000); // 2 minutes

    try {
      const response = await axiosInstance.get("/products", {
        params: {
          organization_id: "b49a33927c6f41bf89a9616048e4da89",
          reverse_sort: false,
          page: 1,
          size: 4, // Fetch only 4 items
          Appid: "BX2XX72MKKPA4RC",
          Apikey: "25ff67d2942e45e3aa13dc9b0810479420240712144414667166",
        },
        signal: controller.signal,
      });

      const items = response.data.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: `₦${extractPrice(item.current_price)}`,
        image: `https://api.timbu.cloud/images/${
          item.photos.length > 0 ? item.photos[0].url : ""
        }`,
        category:
          item.categories.length > 0 ? item.categories[0].name : "No category",
        details: item.details || "Details not available",
        borderColor: "border-zinc-400", // This is a placeholder, update as needed
      }));

      setTimeout(() => {
        setProducts(items);
        clearTimeout(timeoutId);
        setIsLoading(false);
      }, 2000); // 2 seconds delay
    } catch (error) {
      if (error.name === "AbortError") {
        console.error("Fetch aborted due to timeout.");
      } else {
        toast.error("Error fetching products. Please try again.");
        console.error("Error fetching products:", error);
      }
      clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  const extractPrice = (current_price) => {
    if (
      current_price &&
      current_price.length > 0 &&
      current_price[0].NGN &&
      current_price[0].NGN.length > 0
    ) {
      return current_price[0].NGN[0];
    }
    return "Price not available";
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Toaster position="top-right" />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <FaSpinner className="animate-spin text-4xl text-[#de8c99]" />
          <p className="mt-2 text-lg text-[#de8c99]">Fetching products...</p>
        </div>
      ) : (
        <>
          <div className="h-full w-full flex flex-col items-center py-8 md:py-10 md:gap-8">
            {isMobile ? (
              <ProductSlider products={products} />
            ) : (
              <ProductGrid products={products} />
            )}
          </div>

          {!isMobile && (
            <div className="w-full flex items-center gap-12 mt-8 lg:mt-0">
              <div className="flex w-fit gap-6 items-center">
                <LeftSlide />
                <RightSlide />
              </div>
              <div className="bg-[#FFB6C1] w-full h-4 rounded-full">
                <div className="w-1/5 h-full rounded-full bg-[#DF9BA5]"></div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HeroSection;
