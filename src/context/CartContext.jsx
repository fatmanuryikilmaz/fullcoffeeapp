import React, { createContext, useContext, useState } from "react";

const defaultProvider = {
  cartItems: [
    {
      id: 1,
      name: "Item 1",
      quantity: 2,
      price: 10,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Item 2",
      quantity: 1,
      price: 10,
      imageUrl: "https://via.placeholder.com/150",
    },
  ],
  setCartItems: () => null,
};
export const CartContext = createContext(defaultProvider);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultProvider.cartItems);

  const addItem = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
