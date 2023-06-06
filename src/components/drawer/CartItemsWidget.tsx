import ItemCardWidget from "./ItemCardWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

enum Target {
  list,
  cart
}

interface Props {
  setIsOpen: (el: Target) => void,
  element: number,
  navLinks: {
    title: string,
    path: string,
    show?: boolean,
  }[],
  itemList: {
    image: string,
    title: string,
    price: number,
    quantity: number,
  }[]
}

export default function CartItemsWidget(props: Props): JSX.Element {
  const {setIsOpen, navLinks, itemList, element} = props;

  return (
    <>
      <div >
          <div className="flex h-full flex-col overflow-y-scroll bg-white">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button onClick={() => setIsOpen(element)} type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                    <FontAwesomeIcon icon={faXmark} size="xl"/>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {itemList.map((el, idx)=> (
                      <ItemCardWidget key={idx} item={el}/>
                    ))}
                  </ul>
                </div>
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
        </div>
    </>
  )
}


/* 

<div classNameName="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div classNameName="flex items-start justify-between">
          <h2 classNameName="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
          <div classNameName="ml-3 flex h-7 items-center">
            <button onClick={() => setIsOpen(element)}  type="button" classNameName="-m-2 p-2 text-gray-400 hover:text-gray-500">
              <FontAwesomeIcon icon={faXmark} size="xl"/>
            </button>
          </div>
        </div>
        {itemList.map((el, idx)=> (
          <ItemCardWidget key={idx} item={el}/>
        ))}
        <div classNameName="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div classNameName="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p classNameName="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div classNameName="mt-6">
            <a href="#" classNameName="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
          </div>
          <div classNameName="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button type="button" classNameName="font-medium text-indigo-600 hover:text-indigo-500">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>

{navLinks.map((el, idx) => (
          <Link key={idx} to={el.path} onClick={() => setIsOpen(Target.list)} classNameName="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <span>
              {el.title}
            </span>
          </Link>
        ))}
*/