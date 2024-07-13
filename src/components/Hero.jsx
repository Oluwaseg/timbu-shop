import Footer from "./Footer";
import Product from "./Product";
import Navbar from "./Navbar";
import Search from "./Search";
import Product2 from "./SecondProduct";
import HeroSection from "./HeroSection";

const categories = [
  { name: "Body Care", style: "bg-[#FFB6C1] text-accent-400 font-semibold" },
  {
    name: "Face Care",
    style: "bg-white border border-[#FFB6C1] text-accent-400 font-medium",
  },
  {
    name: "Private Hygiene",
    style: "bg-white border border-[#FFB6C1] text-accent-400 font-medium",
  },
  {
    name: "Scents",
    style: "bg-white border border-[#FFB6C1] text-accent-400 font-medium",
  },
];

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="md:hidden w-full px-4 py-2 mt-4 bg-white">
        <div className="flex items-center border border-gray-300 bg-white rounded-full px-6 py-2 shadow-pink">
          <Search />
          <input
            type="text"
            className="ml-2 w-full focus:outline-none font-semibold bg-white"
            placeholder="Search"
          />
          {/* <div className="flex gap-3">
            <Favourite />
            <ShoppingCart />
          </div> */}
        </div>
      </div>

      <div className="h-full  w-full flex flex-col items-center py-8 md:py-10 md:gap-8">
        {/* Mobile View */}
        <div className="md:hidden max-w-7xl mx-auto text-center">
          <h1 className="text-sm sm:text-base md:text-4xl font-light text-accent leading-tight sm:leading-snug md:leading-relaxed header max-w-xs sm:max-w-none mx-auto">
            Your one stop shop to all skincare products
            <br className="block md:hidden" />
            both local and international brands
          </h1>
          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-2 pb-1 w-max">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`${category.style} text-xs py-2 px-3 rounded-lg whitespace-nowrap md:text-base md:py-2 md:px-6 md:rounded-2xl`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop and Tablet View */}
        <div className="hidden md:block max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-light text-accent leading-relaxed md:leading-relaxed header">
            Your one stop shop to all skincare products <br /> both local and
            international brands
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`${category.style} py-2 px-4 rounded-full shadow-md md:px-6 md:rounded-2xl mt-2 md:mt-0`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <section className="bg-cover bg-no-repeat bg-auto bg-[url('/bubbles.svg')] lg:pt-[200px lg:px-16 w-full lg:pb-16">
          <div className="bg-[url('/starElipse.svg')] bg-contain bg-no-repeat bg-center md:px-6 md:py-8 lg:mt-16 lg:w-fit flex items-center justify-center">
            <h2 className="font-bold lg:text-2xl">Body Care Best Seller</h2>
          </div>
          <HeroSection />
        </section>
      </div>
      <Product />
      <div className="bg-primary mx-auto flex items-center justify-center">
        <img src="/omo.png" alt="" />
      </div>

      <Product2 />
      <div className="flex items-center justify-center ">
        <span className="bg-[#FFB6C1] font-bold text-center border-2 border-[#DE8C99] w-full md:w-1/2 md:py-3 md:px-5 py-2 px-3 rounded-full flex items-center m-4 justify-center">
          Check Out More Products
        </span>
      </div>

      <Footer />
    </>
  );
};

export default Hero;
