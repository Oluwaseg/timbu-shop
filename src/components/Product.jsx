import ProductCard from "./ProductCard";

const products = [
  {
    image: "/Retinol.png ",
    name: "Retinol ",
    brand: "Bodycare Lotion",
    price: "18,000",
  },
  {
    image: "/Bronze.png",
    name: "Bronze Goddess",
    brand: "Bodycare Lotion",
    price: "32,430",
  },
  {
    image: "/La.png",
    name: "LA ROCHE-POSAY ",
    brand: "Bodycare Package",
    price: "240,000",
  },
  {
    image: "/Ka.png",
    name: "Kalak",
    brand: "Bodycare Package",
    price: "330,200",
  },
  {
    image: "/PAIXAO.png",
    name: "PAIXAO",
    brand: "Bodycare Lotion & Body Wash",
    price: "330,200",
  },
  {
    image: "/NIVEA.png",
    name: "NIVEA",
    brand: "Body Lotion",
    price: "6,000",
  },
  {
    image: "/VICTORIA.png",
    name: "VICTORIA'S SECRET",
    brand: "Body Wash",
    price: "42,000",
  },
  {
    image: "/PANOXYL.png",
    name: "PanOxyl",
    brand: "Body Wash",
    price: "12,000",
  },
  {
    image: "/SHEA.png",
    name: "Shea",
    brand: "Body Mosturizer & Conditional",
    price: "42,000",
  },
  {
    image: "/CERAVE.png",
    name: "Cerave",
    brand: "Body Lotion",
    price: "19,200",
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
    name: "NIVEA",
    brand: "Bodycare Package",
    price: "41,000",
  },
  {
    image: "/COCO.png",
    name: "Cocokind",
    brand: "Body Moisturizer",
    price: "20,200",
  },
  {
    image: "/SUMMER.png",
    name: "Summer Friday's",
    brand: "Body Lotion",
    price: "210,200",
  },
  // Add other products here
];

const Product = () => {
  return (
    <div className="p-4 bg-primary grid grid-cols-3 lg:px-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Product;
