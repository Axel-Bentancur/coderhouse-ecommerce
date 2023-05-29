import { useState} from "react";

const useCounter = ():[number, () => void, () => void] => {
  const [state, setState] = useState(1);

  const increment = ():void => setState((state) => state + 1);
  const decrement = ():void => setState((state) => state - 1);
  return [state, increment, decrement];
};

export default useCounter;
