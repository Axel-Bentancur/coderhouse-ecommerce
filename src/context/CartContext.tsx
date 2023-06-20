import { createContext, useState, useEffect } from "react";
//Types
import { WithChildren } from "../interfaces/Icontainer";
import { IProductWithQuantity, CartContextType } from "../interfaces/IProducts";
//Data
import { Cart_List } from "../utilities/Data";

window.localStorage.setItem('cart', JSON.stringify(Cart_List));

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const ProductProvider = ({children}:WithChildren) => {

  const [cart, setCart] = useState<IProductWithQuantity[]>([]);
  console.log(cart)

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProductWithQuantity) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
