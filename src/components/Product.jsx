import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import ProductCard from "./ProductCard";
import { Toaster, toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async (page) => {
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
          page: page,
          size: 10, // Fetch 10 items per page
          Appid: "BX2XX72MKKPA4RC",
          Apikey: "25ff67d2942e45e3aa13dc9b0810479420240712144414667166",
        },
        signal: controller.signal,
      });

      const items = response.data.items.map((item) => ({
        name: item.name,
        price: extractPrice(item.current_price),
        id: item.id,
        image: `https://api.timbu.cloud/images/${
          item.photos.length > 0 ? item.photos[0].url : ""
        }`,
        category:
          item.categories.length > 0 ? item.categories[0].name : "No category",
      }));

      setTotalPages(Math.ceil(response.data.total / 10));

      setTimeout(() => {
        setProducts(items);
        clearTimeout(timeoutId);
        setIsLoading(false);
      }, 2000);
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

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <FaSpinner className="animate-spin text-4xl text-[#de8c99]" />
          <p className="mt-2 text-[#de8c99]">Products are being fetched...</p>
        </div>
      ) : (
        <>
          <div className="p-4 bg-primary grid grid-cols-3 lg:px-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="flex justify-center py-2 bg-primary">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-2 border border-[#de8c99] text-[#de8c99] rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-2 border border-[#de8c99] text-[#de8c99] rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
