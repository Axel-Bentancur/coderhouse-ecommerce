import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//Types
import { IProducts, FetchContextType } from "../interfaces/IProducts";
//Data
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/config';
//Others
import { getLastPathSegment } from "../utilities/Utilities";

const useFetch = (): FetchContextType => {
  const [fetchData, setFetchData] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(false);

  const categoryId = getLastPathSegment(useLocation().pathname)

  useEffect(() => {
    const products = collection(db, 'products');
    const product =
      categoryId === null
        ? products
        : categoryId.includes("%20")
        ? query(products, where('title', '==', decodeURIComponent(categoryId)))
        : query(products, where('category', '==', categoryId));

    setLoading(true);
    getDocs(product)
      .then((res) => {
        const product_list = res.docs.map((doc) => doc.data()) as IProducts[];
        setFetchData(product_list);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return [fetchData, loading];
};

export default useFetch;
