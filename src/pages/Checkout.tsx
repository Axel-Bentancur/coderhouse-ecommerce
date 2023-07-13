import { useState, useContext } from "react";
//Components
import CheckoutForm from "../components/Form/CheckoutForm";
import CheckoutCartItems from "../components/drawer/CheckoutCartItems";
import SuccessfulOrder from "../components/Form/SuccessfulOrder";
//Context
import { CartContext } from "../context/CartContext";
//Others
import { Subtotal } from "../utilities/Utilities";

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