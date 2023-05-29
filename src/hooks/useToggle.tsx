import { useState } from "react";

const useToggle = (initialState = false) : [boolean, () => void] => {
  const [ state, setState ] = useState(initialState);

  const toggleState = ():void => {
    setState((state) => !state);
  }
  return [state, toggleState];
}

export default useToggle;

