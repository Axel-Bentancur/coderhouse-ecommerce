import { useContext } from "react";
import { useParams } from "react-router-dom";
//Components
import Card from "./Card";
import Loader from "../product/Loader";
import CardCategory from "./CardCategory";
import NoProductsFound from "../product/NoProducts";
//Data
import { ProductContext } from "../../context/ProductContext";


export default function CardsContainer() {
  const Data = useContext(ProductContext);
  const Products = Data[0];
  const loading = Data[1]
  const lastElement = useParams().category;

  return (
    <>
      <CardCategory lastElement={lastElement} />
      { loading ? (
          <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
            <Loader />
          </div>
        ) : (
          <>
            { Products && Products.length > 0 ? (
                <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
                  {Products.map((product, idx) => (
                    <Card key={idx} item={product} lastElement={lastElement} />
                  ))}
                </div>
              ):(
                <div className="mx-auto px-8 py-20 lg:px-20 xl:px-40">
                  <NoProductsFound />
                </div>
              )
            }
          </>
        )
      }
    </>
  )
}
/* 
return (
    <>
      <CardCategory lastElement={lastElement} />
      { Poducts && Poducts.length < 1 ? (
          <div className="mx-auto px-8 py-20 lg:px-20 xl:px-40">
            <NoProductsFound />
          </div>
        ) : (
          <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
            { loading ? (
                <Loader />
              ) : (
                Poducts && Poducts.map((product, idx) => (
                  <Card key={idx} item={product} lastElement={lastElement} />
                ))
              )
            }
          </div>
        )
      }
    </>
  )
*/