import React, { useEffect, useState } from "react";
import deleteIcon from "../../../../assets/icons/disposal.png";
import increaseIcon from "../../../../assets/icons/increase.png";
import decreaseIcon from "../../../../assets/icons/decrease.png";

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedData = cartData.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(updatedData);
  }, []);

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  // Total Price --------
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // handleDelete button  -----------------------
  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const handleQuantityChange = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity =
          type === "inc" ? item.quantity + 1 : item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity < 1 ? 1 : newQuantity,
        };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  return (
    <div className="relative">
      {/* information section  */}
      <div>
        {cartItems.length === 0 ? (
          <p className="text-center text-white">Your cart is empty!</p>
        ) : (
          cartItems.map(({ id, title, price, image, quantity }) => (
            <div
              key={id}
              className=" flex justify-between mx-3 my-3 bg-black shadow-md hover:shadow-lg rounded-md text-white py-2"
            >
              {/* Item Image */}
              <div>
                <img
                  src={image}
                  width={80}
                  height={50}
                  alt={`${title} Image`}
                  className="ms-2 rounded-sm"
                />
              </div>
              {/* Item Details */}
              <div className="flex justify-between items-center w-full px-3">
                <div>
                  <h1>{title}</h1>
                  <h2 className="flex items-center gap-1">
                    <p>Price: </p> <span>${price.toFixed(2)}</span>
                  </h2>
                  <div className="flex gap-3 items-center mt-1">
                    <h1>Quantity:</h1>
                    <img
                      onClick={() => handleQuantityChange(id, "dec")}
                      src={decreaseIcon}
                      alt="increment icon"
                      className="w-4"
                    />
                    <input
                      value={quantity}
                      type="number"
                      className="bg-white text-black w-6"
                      readOnly
                    />
                    <img
                      onClick={() => handleQuantityChange(id, "inc")}
                      src={increaseIcon}
                      alt="decrement icon"
                      className="w-4"
                    />
                  </div>
                </div>
                {/* Delete Button */}
                <div>
                  <img
                    onClick={() => handleDelete(id)}
                    className="w-[25px] hover:w-[20px] mx-2 hover:drop-shadow-lg cursor-pointer"
                    src={deleteIcon}
                    alt="Delete Icon"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Buy Now Button */}
      <div className="">
        <hr />
        <p className=" my-2 flex justify-end me-2 font-semibold text-lg">
          Total: ${calculateTotal().toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ViewCart;
