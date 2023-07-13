//Components
import ItemCardWidget from './ItemCardWidget';
//Types
import { CartContextType } from '../../interfaces/IProducts';

function CheckoutCartItems({productList, total}:{productList:CartContextType | undefined, total:string}) {

  return (
    <section aria-labelledby="summary-heading" className="w-full lg:w-1/2 bg-[#faf5ff] p-6 shadow-sm lg:order-2">
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">Order summary</h3>
    </div>
    {productList && productList?.cart.length > 0 ? (
      <>
        <div className="mb-6">
          <ul role="list" className="mb-6">
            {productList?.cart.map((product, idx) => (
              <ItemCardWidget key={idx} item={product} idx={idx} remove={productList.removeFromCart} />
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <div className="border-t border-gray-500 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total</p>
              <p>{total}</p>
            </div>
          </div>
        </div>
      </>
    ):(null)}
  </section>
  )
}

export default CheckoutCartItems