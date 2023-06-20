import { createContext, useState } from "react";
//Types
import { ICartProduct } from "../interfaces/ICart";
import { WithChildren } from "../interfaces/Icontainer";
//Data
import { Cart_List } from "../utilities/Data";

export const CartContext = createContext(Cart_List);

export const ProductProvider = ({children}:WithChildren) => {

  const [cartList, setCartList] = useState();

  return (
    <CartContext.Provider value={ Cart_List }>
      {children}
    </CartContext.Provider>
  )
}