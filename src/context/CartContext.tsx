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

  const getProductStock = (productId) => {
    // get stock from api
    return 10;
  };

  const addProductToCart = (product: CartItemProps, quantity: number) => {
    const productExists = cartProducts.find(
      (p: CartItemProps) => p.id === product.id
    );

    if (productExists) {
      const newCartProducts = cartProducts.map((p: CartItemProps) => {
        if (p.id === product.id) {
          const newQuantity = p.quantity + quantity;
          return {
            ...p,
            quantity:
              newQuantity > getProductStock(p.id)
                ? getProductStock(p.id)
                : newQuantity,
          };
        }
        return p;
      });
      setCartProducts(newCartProducts);
    } else setCartProducts([...cartProducts, { ...product, quantity }]);
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
        totalPrice,
        setCartProducts,
        addProductToCart,
        removeAllProducts,
        getTotalPrice,
        setTotalPrice,
        changeCartItemQuantity,
        getProductStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
