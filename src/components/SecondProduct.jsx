import ProductCard from "./ProductCard";

const products = [
  {
    image: "/LAMER.png",
    name: "La Mer",
    brand: "Body Oil",
    price: "20,500",
  },
  {
    image: "/TENTI.png",
    name: "O'Tentika",
    brand: "Body Moisturizer",
    price: "9,430",
  },
  {
    image: "/Vaseline.png",
    name: "Vaseline",
    brand: "Bodycare Package",
    price: "40,000",
  },
  {
    image: "/KAAK.png",
    name: "Kalak",
    brand: "Bodycare Package",
    price: "330,200",
  },
  {
    image: "/COCONUT.png",
    name: "Coconut Coffee",
    brand: "Bodycare Package",
    price: "38,700",
  },
  {
    image: "/NEUTRO.png",
    name: "NEUTROGENA",
    brand: "Body Oil",
    price: "9,500",
  },
  {
    image: "/DOVE.png",
    name: "Dove",
    brand: "Body Moisturizer",
    price: "32,430",
  },
  {
    image: "/NIVEA2.png",
    name: "LA ROCHIE-POSAY",
    brand: "Bodycare Package",
    price: "240,000",
  },
  {
    image: "/KAAK.png",
    name: "Kalak",
    brand: "Bodycare Package",
    price: "330,200",
  },
  {
    image: "/SUMMER.png",
    name: "Summer Friday's",
    brand: "Body Lotion",
    price: "210,200",
  },
];

const Product2 = () => {
  return (
    <div className="bg-primary p-4 grid grid-cols-2 lg:px-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Product2;
