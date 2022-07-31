import { createContext, useState } from 'react';

interface CartItemProps {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartContext = createContext<any>([]);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<CartItemProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | string>(0);

  const addProductToCart = (product: CartItemProps) => {
    const productExists = cartProducts.find(
      (p: CartItemProps) => p.id === product.id
    );
    if (productExists) return;
    setCartProducts([...cartProducts, product]);
  };

  const removeAllProducts = () => {
    if (cartProducts.length === 0) return;
    setCartProducts([]);
  };

  const removeProductFromCart = (product: CartItemProps) => {
    return cartProducts.filter((p: CartItemProps) => p.id !== product.id);
  };

  const getTotalPrice = () => {
    return cartProducts.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
  };

  const changeCartItemQuantity = (
    product: CartItemProps,
    operation: string
  ) => {
    let newCartProducts = Array.from(cartProducts);
    const productIndex = cartProducts.findIndex(
      (p: CartItemProps) => p.id === product.id
    );

    if (productIndex === -1) return;

    switch (operation) {
      case '+': {
        if (product.quantity >= 10) break;

        newCartProducts[productIndex] = {
          ...product,
          quantity: product.quantity + 1,
        };
        break;
      }
      case '-': {
        if (product.quantity <= 1) {
          newCartProducts = removeProductFromCart(product);
        } else {
          newCartProducts[productIndex] = {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        break;
      }
      default: {
        break;
      }
    }

    setCartProducts(newCartProducts);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProductToCart,
        removeAllProducts,
        getTotalPrice,
        changeCartItemQuantity,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
