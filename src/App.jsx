import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Cart from "./pages/Cart"; // Import your Cart component
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import Product from "./pages/Product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderConfirmation" element={<OrderConfirmation />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
