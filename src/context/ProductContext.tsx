import { createContext } from "react";
import useFetch from "../hooks/useFetch";
//Types
import { WithChildren } from "../interfaces/Icontainer";
import { FetchContextType } from "../interfaces/IProducts";

export const ProductContext = createContext<FetchContextType>([[], false]);

export const ProductProvider = ({ children }: WithChildren) => {
  const fetchContextValue = useFetch();

  return (
    <ProductContext.Provider value={fetchContextValue}>
      {children}
    </ProductContext.Provider>
  );
};