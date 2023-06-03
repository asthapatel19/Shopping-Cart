import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {cart.length > 0 ? (
        <div className="max-w-md mx-auto bg-white rounded shadow-lg p-6">
          <div className="mb-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="border-t border-gray-300 py-4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
              <div className="text-gray-600">Summary</div>
              <p className="text-gray-700">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-2">Total Amount: ${totalAmount}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded shadow-lg p-6 text-center">
          <h1 className="text-2xl font-semibold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
