import { IProducts } from "../interfaces/IProducts";

export function CartItemsInIcon(quantity:number): string | null {
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

export function Subtotal(items: IProducts[] | undefined): string {
  if(items){
    const total = items.reduce((accumulator, currentObject) => {
      return accumulator + currentObject.price;
    }, 0);
    const formatedPrice = ToCurrency(total, 'ARSPESO');
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