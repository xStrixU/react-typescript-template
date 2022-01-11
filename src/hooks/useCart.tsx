import { createContext, ReactNode, useContext, useState } from 'react';
import { CartProductType, ProductID } from 'types';

interface CartContextValue {
  cart: CartProductType[];

  addToCart(id: ProductID): void;
  removeFromCart(id: ProductID): void;
  calculateCartSize(): number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  const addToCart = (id: ProductID) => {
    const index = cart.findIndex(data => data.id === id);

    if (index === -1) {
      setCart([{ id, quantity: 1 }, ...cart]);
      return;
    }

    const newCart = [...cart];

    newCart[index].quantity++;

    setCart(newCart);
  };

  const removeFromCart = (id: ProductID) => {
    const index = cart.findIndex(data => data.id === id);

    if (index === -1) return;

    const newCart = [...cart];
    const quantity = newCart[index].quantity--;

    if (quantity - 1 <= 0) {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  const calculateCartSize = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        calculateCartSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart needs to be used inside CartProvider!');
  }

  return context;
};
