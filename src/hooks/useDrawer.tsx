import { useState } from "react";

import useToggle from "./useToggle";

import { ITargetWidget } from "../interfaces/ITargetWidget";

const useDrawer = () : [boolean, ITargetWidget, (el: ITargetWidget) => void] => {
  const [toggle, setToggle] = useToggle();
  const [component, setComponent] = useState<ITargetWidget>("empty");

  const setDrawer = (el: ITargetWidget) :void => {
    setToggle();
    setComponent(el);
  }

  return [toggle, component, setDrawer];
}

export default useDrawer;
