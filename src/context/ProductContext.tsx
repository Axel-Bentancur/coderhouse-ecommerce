import { createContext } from "react";
//Types
import { WithChildren } from "../interfaces/Icontainer";
//Data
import { Product_List } from "../utilities/Data";

export const ProductContext = createContext(Product_List);

export const ProductProvider = ({children}:WithChildren) => {

  return (
    <ProductContext.Provider value={ Product_List }>
      {children}
    </ProductContext.Provider>
  )
}