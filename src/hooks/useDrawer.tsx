import { useState } from "react";
import useToggle from "./useToggle";

enum Target {
  list,
  cart,
  empty
}

const useDrawer = () : [boolean, Target, (el: Target) => void] => {
  const [toggle, setToggle] = useToggle();
  const [component, setComponent] = useState<Target>(Target.empty);

  const setDrawer = (el: Target) :void => {
    setToggle();
    setComponent(el);
  }

  return [toggle, component, setDrawer];
}

export default useDrawer;
