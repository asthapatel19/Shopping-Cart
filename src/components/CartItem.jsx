import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-300">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.title} className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <h1 className="text-gray-600">{item.description}</h1>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-lg font-semibold">${item.price}</p>
        <div
          onClick={removeFromCart}
          className="cursor-pointer ml-4 text-red-500 hover:text-red-700"
        >
          <FcDeleteDatabase size={24} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
