import { useContext } from "react";
import { Link } from "react-router-dom";
//Components
import ItemCardWidget from "./ItemCardWidget";
import NavbarContainer from "../navbar/NavbarContainer";
import CloseButton from "../buttons/CloseButton";
//Data
import { CartContext } from "../../context/CartContext";
//Types
import { ITargetWidget } from "../../interfaces/ITargetWidget";
//Others
import { Subtotal } from "../../utilities/Utilities";

export default function CartItemsWidget({ setIsOpen, element}: {setIsOpen: (el: ITargetWidget) => void; element: ITargetWidget}): JSX.Element {

  const CartProduct = useContext(CartContext);
  const total = Subtotal(CartProduct?.cart);

  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white">
      <div className="flex-1 overflow-y-auto">
      <NavbarContainer additionClass={'flex min-h-[8vh]'}>
        <CloseButton setIsOpen={setIsOpen} element={element} title={'Shopping cart'}/>
      </NavbarContainer>
        <div className="px-4">
          <ul role="list" className="divide-y divide-gray-200">
            {CartProduct?.cart.map((product, idx)=> (
              <ItemCardWidget key={idx} item={product} remove={CartProduct.removeFromCart} />
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{total}</p>
        </div>
        <div className="mt-6">
          <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-purple-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700">Checkout</a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <Link to={'/Shop'}>
            <button type="button" onClick={() => setIsOpen(element)} className="font-medium text-purple-600 hover:text-purple-500">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}