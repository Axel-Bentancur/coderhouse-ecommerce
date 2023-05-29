
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
