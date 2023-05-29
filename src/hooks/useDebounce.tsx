import { useEffect, useState } from "react";

const useDebounce = (value: string | number, delay:number) => {
  const [debaunceValue, setDebaunceValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebaunceValue(value)
    }, delay);

    return ():void => {
      clearTimeout(timeoutId)
    }
  }, [value, delay])

  return debaunceValue;
}

export default useDebounce;
