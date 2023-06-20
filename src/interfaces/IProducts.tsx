export type IProducts = {
  id: number,
  title: string,
  description: string,
  price: number,
  rating: number,
  stock: number,
  category: string,
  thumbnail: string,
  colors: string[]
  images: string[]
}

export type IProductWithQuantity = IProducts & {
  quantity: number;
};

export type CartContextType = {
  cart: IProductWithQuantity[],
  addToCart: (product: IProductWithQuantity) => void,
  removeFromCart: (productId: number) => void,
  clearCart: () => void,
};