import { Link } from "react-router-dom";
//Components
import ItemCardWidget from "./ItemCardWidget";
import NavbarContainer from "../navbar/NavbarContainer";
import CloseButton from "../buttons/CloseButton";
//Types
import { ITargetWidget } from "../../interfaces/ITargetWidget";
//Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
//Others
import { Subtotal } from "../../utilities/Utilities";
import emptyCartImage from '../../assets/bag-404.svg';

export default function CartItemsWidget({ setIsOpen, element}: {setIsOpen: (el: ITargetWidget) => void; element: ITargetWidget}): JSX.Element {

  const CartProduct = useContext(CartContext);
  const total = Subtotal(CartProduct?.cart);

  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white">
      {CartProduct && CartProduct?.cart.length > 0 ? (
        <>
          <div className="flex-1 overflow-y-auto">
            <NavbarContainer additionClass={'flex min-h-[8vh]'}>
              <CloseButton setIsOpen={setIsOpen} element={element} title={'Shopping cart'}/>
            </NavbarContainer>
            <div className="px-4">
              <ul role="list" className="divide-y divide-gray-200">
                {CartProduct?.cart.map((product, idx)=> (
                  <ItemCardWidget key={idx} item={product} idx={idx} remove={CartProduct.removeFromCart} />
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{total}</p>
            </div>
            <div className="mt-6 flex justify-center text-center">
              <Link to={'/Checkout'} className="w-full">
                <button type="button" onClick={() => setIsOpen(element)} className="w-full rounded-md border bg-purple-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700">Checkout</button>
              </Link>
            </div>

            <div className="mt-6 flex justify-center text-center">
              <Link to={'/Shop'}>
                <button type="button" onClick={() => setIsOpen(element)} className="font-medium text-purple-600 hover:text-purple-500">
                  Go back to Product Section
                </button>
              </Link>
            </div>
          </div>
        </>
      ):(
        <div className="flex-1 overflow-y-auto">
          <NavbarContainer additionClass={'flex min-h-[8vh]'}>
            <CloseButton setIsOpen={setIsOpen} element={element} title={'Shopping cart'}/>
          </NavbarContainer>
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={emptyCartImage} alt="Empty Cart" className="mb-4 w-40 h-40" />
              <h2 className="text-2xl lg:text-4xl mb-2 font-bold text-[#9c9fa3]">Your Cart is Empty</h2>
              <p className="text-base lg:text-lg font-light text-[#9c9fa3]">You have no items in your cart.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}