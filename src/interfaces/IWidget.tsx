import { ITargetWidget } from "./ITargetWidget";

export type IWidget = {
  setIsOpen: (el: ITargetWidget) => void,
  element: ITargetWidget
}