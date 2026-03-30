import { type ReactNode, createContext, useContext, useState } from "react";

export interface CartItem {
  productName: string;
  category: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addToCart: (productName: string, category: string) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (productName: string, category: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productName === productName);
      if (existing) {
        return prev.map((item) =>
          item.productName === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { productName, category, quantity: 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setItems((prev) => prev.filter((item) => item.productName !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productName);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productName === productName ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
