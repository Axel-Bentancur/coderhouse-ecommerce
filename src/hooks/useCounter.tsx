import { useState} from "react";

const useCounter = ():[number, () => void, () => void, () => void] => {
  const [state, setState] = useState(0);

  const increment = ():void => setState((state) => state + 1);
  const decrement = ():void => setState((state) => state - 1);
  const reset = ():void => setState(0);
  return [state, increment, decrement, reset];
};

export default useCounter;
