import ItemCardWidget from "./ItemCardWidget";
import NavbarContainer from "../navbar/NavbarContainer";
import CloseButton from "../buttons/CloseButton";

import { ITargetWidget } from "../../interfaces/ITargetWidget";
import { INavLinks } from "../../interfaces/INavLinks";
import { IProducts } from "../../interfaces/IProducts";

export default function CartItemsWidget({ setIsOpen, navLinks, element, Product_List}: { setIsOpen: (el: ITargetWidget) => void; navLinks: INavLinks[]; element: ITargetWidget; Product_List: IProducts[]}): JSX.Element {

  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white">
      <div className="flex-1 overflow-y-auto">
      <NavbarContainer additionClass={'flex'}>
        <CloseButton setIsOpen={setIsOpen} element={element} title={'Shopping cart'}/>
      </NavbarContainer>
        <div className="px-4">
          <ul role="list" className="divide-y divide-gray-200">
            {Product_List.map((product, idx)=> (
              <ItemCardWidget key={idx} item={product}/>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$999.00</p>
        </div>
        <div className="mt-6">
          <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-purple-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700">Checkout</a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <button type="button" className="font-medium text-purple-600 hover:text-purple-500">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}