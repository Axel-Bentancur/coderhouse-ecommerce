import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
//Components
import Card from "./Card";
import Loader from "../product/Loader";
import CardCategory from "./CardCategory";
import NoProductsFound from "../product/NoProducts";
//Data
import { ProductContext } from "../../context/ProductContext";
//Others
import { getProductByCategory } from "../../utilities/Utilities";


export default function CardsContainer() {
  const [loading, setLoading] = useState(true);

  const Product_List = useContext(ProductContext);
  const location = useLocation();
  const path = location.pathname.split('/').filter(path => path !== '');
  const lastElement = path[path.length - 1];
  const list = getProductByCategory(lastElement, Product_List);

  useEffect(() => {
    if (list) {
      setLoading(false);
    }
  }, [list]);

  return (
    <>
      <CardCategory lastElement={lastElement} />
      {list && list?.length < 1 ? (
        <div className="mx-auto px-8 py-20 lg:px-20 xl:px-40">
        <NoProductsFound /></div>
      ) : (
        <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
          {loading ? (
            <Loader />
          ) : (
            list && list.map((product, idx) => (
              <Card key={idx} item={product} lastElement={lastElement} />
            ))
          )}
        </div>
      )}
    </>
  )
}