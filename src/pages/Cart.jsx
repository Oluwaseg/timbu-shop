import React from "react";
import { useCart } from "../cartContext/index";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartState, dispatch } = useCart();
  const navigate = useNavigate();

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };

  const handleResetCart = () => {
    dispatch({ type: "RESET_CART" });
  };

  const totalPrice = cartState.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = totalPrice * 0.2;
  const shipping = 500;
  const grandTotal = totalPrice + tax + shipping;

  const handleCheckout = () => {
    navigate("/orderConfirmation");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-primary min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              {cartState.items.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartState.items.map((item, index) => (
                      <tr key={index}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={item.image}
                              alt={item.name}
                            />
                            <span className="font-semibold">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4">₦{item.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border border-[#de8c99] rounded-lg py-2 px-4 mr-2"
                              onClick={() => handleDecrement(item.id)}
                            >
                              -
                            </button>
                            <span className="text-center w-8">
                              {item.quantity}
                            </span>
                            <button
                              className="border border-[#de8c99] rounded-lg py-2 px-4 ml-2"
                              onClick={() => handleIncrement(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">
                          ₦{(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              {cartState.items.length > 0 ? (
                <>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>₦{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes (20%)</span>
                    <span>₦{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>₦{shipping.toFixed(2)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      ₦{grandTotal.toFixed(2)}
                    </span>
                  </div>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    onClick={handleResetCart}
                  >
                    Reset Cart
                  </button>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </>
              ) : (
                <>
                  <p>Your cart is empty.</p>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    onClick={redirectToHome}
                  >
                    Go to Home
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
