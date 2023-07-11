export type ColorOptions = {
  hex: string,
  name: string,
}

type ProductColors = {
  options: ColorOptions[],
  chosenColor: string | undefined,
}

export type IProducts = {
  id: string,
  title: string,
  description: string,
  price: number,
  rating: number,
  stock: number,
  category: string,
  thumbnail: string,
  colors: ProductColors,
  images: string[]
}

export type IProductWithQuantity = IProducts & {
  quantity: number;
};

export type IProductSummary = {
  id: string;
  title: string;
  chosenColor: string | undefined;
  quantity: number;
}


export type CartContextType = {
  cart: IProductWithQuantity[],
  addToCart: (product: IProductWithQuantity) => void,
  removeFromCart: (productId: number) => void,
  clearCart: () => void,
};