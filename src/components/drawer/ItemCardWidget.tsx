//Types
import { IProductWithQuantity } from "../../interfaces/IProducts";
//Others
import { ToCurrency } from "../../utilities/Utilities";

export default function ItemCardWidget({item, idx, remove}: {item:IProductWithQuantity, idx: number, remove:(productId: number) => void}): JSX.Element {
  const {title, price, quantity, thumbnail, colors} = item;
  
  const formatedPrice = ToCurrency(price, 'ARSPESO');
  const formatedTotal = ToCurrency(price * quantity, 'ARSPESO');

  const handleRemoveFromCart = () => {
    remove(idx);
  };

  return (
    <li className="flex p-4">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={thumbnail} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <span>{title}</span>
            </h3>
            <p className="ml-4">{formatedTotal}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500 block">
            <span className="block">Color: {colors.chosenColor}</span>
            <span className="block">Quantity: {quantity}</span>
            <span className="block">Price per unit: {formatedPrice}</span>
          </p>
          <div className="flex">
            <button onClick={handleRemoveFromCart} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
          </div>
        </div>
      </div>
  </li>
  )
}
