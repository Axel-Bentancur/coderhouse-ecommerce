//Types
import { IWidget } from "../../interfaces/IWidget";
import { WithChildren } from "../../interfaces/Icontainer";

type IWidgetWithChildren = IWidget & WithChildren;

export default function IconsButton({children, additionClass = '', setIsOpen, element} : IWidgetWithChildren) {

  return (
    <button onClick={() => setIsOpen(element)} type="button" className={`pl-3 py-1 text-gray-800 relative ${additionClass}`}>
      {children}
    </button>
  )
}
