import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Subtotal } from "../utilities/Utilities";
import ItemCardWidget from "../components/drawer/ItemCardWidget";

export default function Checkout() {

  const CartProduct = useContext(CartContext);
  const total = Subtotal(CartProduct?.cart);

  return (
<div className="flex flex-grow flex-col lg:flex-row">
  <section aria-labelledby="summary-heading" className="w-full lg:w-1/2 bg-[#faf5ff] p-6 shadow-sm lg:order-2">
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">Order summary</h3>
    </div>
    <div className="mb-6">
      <ul role="list" className="mb-6">
        {CartProduct?.cart.map((product, idx) => (
          <ItemCardWidget key={idx} item={product} idx={idx} remove={CartProduct.removeFromCart} />
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
  </section>
  <section aria-labelledby="contact-info-heading" className="w-full lg:w-1/2 bg-white p-6 shadow-sm lg:order-1">
    <div className="mb-6">
      <div>
        <h3 className="text-lg font-bold mb-2">Contact information</h3>
        <div className="mb-4">
          <label htmlFor="email-address" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
          <input type="email" id="email-address" name="email-address" autoComplete="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-200" placeholder="Enter your email address" />
        </div>
      </div>
    </div>
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">Shipping address</h3>
      <div className="mb-4">
        <label htmlFor="full-name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
        <input type="text" id="full-name" name="full-name" autoComplete="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-200" placeholder="Enter your full name" />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
        <input type="text" id="address" name="address" autoComplete="street-address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-200" placeholder="Enter your address" />
      </div>
    </div>
    <div className="mb-6">
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Confirm order</button>
    </div>
  </section>
</div>
  )
}