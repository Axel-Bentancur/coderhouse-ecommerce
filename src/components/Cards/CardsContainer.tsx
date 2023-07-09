import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// Components
import Card from "./Card";
import Loader from "../product/Loader";
import CardCategory from "./CardCategory";
import NoProductsFound from "../product/NoProducts";
// Interfaces
import { IProducts } from "../../interfaces/IProducts";
// Data
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase/config";
// Others
import { getLastPathSegment } from "../../utilities/Utilities";

export default function CardsContainer() {
  const categoryId = getLastPathSegment(useLocation().pathname);
  const [fetchData, setFetchData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      setLoading(true);
      const products = collection(db, 'products');
      const product =
        categoryId === null
          ? products
          : query(products, where('category', '==', categoryId));

      try {
        const querySnapshot = await getDocs(product);
        const product_list = querySnapshot.docs.map((doc) => doc.data()) as IProducts[];
        setFetchData(product_list);
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      setLoading(false);
    };

    fetchDataFromFirestore();
  }, [categoryId]);

  return (
    <>
      <CardCategory lastElement={categoryId} />
      {loading ? (
        <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
          <Loader />
        </div>
      ) : (
        <>
          {fetchData && fetchData.length > 0 ? (
            <div className="mx-auto px-8 py-20 grid grid-cols-2 gap-y-16 gap-8 lg:px-20 lg:grid-cols-3 lg:gap-8 xl:px-40 xl:grid-cols-4 xl:gap-16">
              {fetchData.map((product, idx) => (
                <Card key={idx} item={product} lastElement={categoryId} />
              ))}
            </div>
          ) : (
            <div className="mx-auto px-8 py-20 lg:px-20 xl:px-40">
              <NoProductsFound />
            </div>
          )}
        </>
      )}
    </>
  );
}
