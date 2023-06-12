import { useEffect, useState } from "react";

export default function useFetch<T,>(url: string, initialState: T){
  const [fetchData, setFetchData] = useState<T>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((productData) => {
        setFetchData(productData)
      })
      .finally(() => setLoading(false));
  }, [url])

  return [fetchData, loading];
}
