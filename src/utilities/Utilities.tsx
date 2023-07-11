import { IProductSummary, IProductWithQuantity, IProducts } from "../interfaces/IProducts";

export function CartItemsInIcon(quantity:number | undefined): string | null {
  if(quantity){
    if(quantity > 0 && quantity <= 99){
      return String(quantity);
    } else {
      return '+99'
    }
  }
  return null;
}

export function ToCurrency(price: number, currency: string): string {

  // format number to US dollar
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // format number to AR peso
const ARSPeso = new Intl.NumberFormat('es-AR', {
  style: 'currency',
    currency: 'ARS',
});

  switch (currency) {
    case 'USDOLLAR':
      return USDollar.format(price);
      break;
    case 'ARSPESO':
      return ARSPeso.format(price)
      break;
    default:
      return 'wrong currency string'
  }
}

export function Subtotal(items: IProductWithQuantity[] | undefined): string {
  if(items){
    const totalPrice = items.reduce((total, product) => {
      const productTotal = product.quantity * product.price;
      return total + productTotal;
    }, 0);
    const formatedPrice = ToCurrency(totalPrice, 'ARSPESO');
    return formatedPrice;
  }
  return 'No Items'
}

export function getProductByIdAndCategory(category: string | undefined, title: string | undefined, list: IProducts[]): IProducts | undefined {
  const product = list.find((item: IProducts) => item.category === category && item.title === title);
  return product;
}

export function getProductByCategory(category: string | undefined, list: IProducts[]): IProducts[] | undefined {
  if(category !== 'Shop'){
    const product = list.filter((item: IProducts) => item.category === category);
    return product;
  }else{
    return list;
  }
}

export function disableButtonState(stock:number | undefined){
  if(stock === 0){
    return true;
  }
  return false;
}

export function checkstock(product: IProducts | undefined, cart: IProductWithQuantity[] | undefined){
  if(product && cart){
    const id = product.id;
    const stock = product.stock;

    const filteredProducts = cart.filter(item => item.id === id);
    const totalQuantity = filteredProducts.reduce((total, objeto) => total + objeto.quantity, 0);
    return stock - totalQuantity;
  }
}

export function getLastPathSegment(location: string) {
  const segments = location.split("/");
  const lastSegment = segments[segments.length - 1];

  if (lastSegment === "Shop") {
    return null;
  }

  return lastSegment;
}

export function cleanOrderSummary(ProductArr: IProductWithQuantity[] | undefined): IProductSummary[] {
  const total: Record<string, IProductSummary> = {};
  if(ProductArr) {
    ProductArr.forEach(producto => {
      const clave = `${producto.id}_${producto.colors.chosenColor}`;

      if (total[clave]) {
        total[clave].quantity += producto.quantity;
      } else {
        total[clave] = {
          id: producto.id,
          title: producto.title,
          chosenColor: producto.colors.chosenColor,
          quantity: producto.quantity
        };
      }
    });
  }

  return Object.values(total);
}