import { useState, useContext } from "react";
import CheckoutForm from "../components/Form/CheckoutForm";
import CheckoutCartItems from "../components/drawer/CheckoutCartItems";
import { CartContext } from "../context/CartContext";
import { Subtotal } from "../utilities/Utilities";
import SuccessfulOrder from "../components/Form/SuccessfulOrder";

export default function Checkout() {
  const [orderId, setOrderId] = useState<string | null>(null);
  const CartProduct = useContext(CartContext);
  const total = Subtotal(CartProduct?.cart);
  const productList = CartProduct;

  return (
  <>
    {orderId ? (
      <div className="flex flex-grow items-center justify-center">
        <SuccessfulOrder id={orderId}/>
      </div>
    ):(
      <div className="flex flex-grow flex-col lg:flex-row">
        <CheckoutCartItems productList={CartProduct} total={total}/>
        <CheckoutForm productList={productList?.cart} clean={CartProduct?.clearCart} total={total} setOrder={setOrderId}/>
      </div>
    )}
  </>
  )
}