
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
