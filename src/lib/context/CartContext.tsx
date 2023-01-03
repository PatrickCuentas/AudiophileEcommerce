import { createContext, useState } from 'react';
import { CartItemProps } from 'lib/interfaces/cart';

type CartContent = {
  products: CartItemProps[];
  setProducts: (value: CartItemProps[]) => void;
  total: number;
  getTotal: () => number;
  setTotal: (value: number) => void;
  setProduct: (product: CartItemProps, operation: string) => void;
  addProduct: (product: CartItemProps, quantity: number) => void;
  removeAll: () => void;
  removeOne: (product: CartItemProps) => void;
  getProductStock: (productId: number | string) => number;
};

export const CartContext = createContext<CartContent>({
  products: [],
  setProducts: () => {},
  total: 0,
  getTotal: () => 0,
  setTotal: () => {},
  setProduct: () => {},
  addProduct: () => {},
  removeAll: () => {},
  removeOne: () => {},
  getProductStock: () => 0,
});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState<CartItemProps[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addProduct = (product: CartItemProps, quantity: number) => {
    const productExists = products.find(
      (p: CartItemProps) => p.id === product.id
    );

    if (productExists) {
      const newProducts = products.map((p: CartItemProps) => {
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
      setProducts(newProducts);
    } else setProducts([...products, { ...product, quantity }]);
  };

  const setProduct = (product: CartItemProps, operation: string) => {
    let newProducts = Array.from(products);
    const productIndex = products.findIndex(
      (p: CartItemProps) => p.id === product.id
    );

    if (productIndex === -1) return;

    switch (operation) {
      case '+': {
        if (product.quantity >= 10) break;

        newProducts[productIndex] = {
          ...product,
          quantity: product.quantity + 1,
        };
        break;
      }
      case '-': {
        if (product.quantity <= 1) {
          newProducts = removeOne(product);
        } else {
          newProducts[productIndex] = {
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

    setProducts(newProducts);
  };

  const removeAll = () => {
    if (products.length === 0) return;
    setProducts([]);
  };

  const removeOne = (product: CartItemProps) => {
    return products.filter((p: CartItemProps) => p.id !== product.id);
  };

  const getTotal = () => {
    return products.reduce((acc, curr) => {
      return acc + curr.total * curr.quantity;
    }, 0);
  };

  const getProductStock = (productId) => {
    return 10;
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        total,
        getTotal,
        setTotal,
        setProduct,
        addProduct,
        removeAll,
        removeOne,
        getProductStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
