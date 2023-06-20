import { IProducts } from '../interfaces/IProducts';
import { ICartProduct } from '../interfaces/ICart';

import Plates from '../assets/plates.jpg';
import Jar from '../assets/jar.jpg';
import D_cup from '../assets/double_cup.jpg';
import Pot from '../assets/pot.jpg';
import A_plate from '../assets/apple_plate.jpg';

export const Product_List: Array<IProducts> = [
  {
    id: 1,
    title: 'Serving pottery plate',
    description: 'This handmade pottery bowl boasts a smooth, round shape that tapers slightly towards the rim. Expertly crafted, it features a rustic, textured exterior that showcases the natural variations in the clay. Perfect for serving a hearty soup or salad, this unique piece is both functional and beautiful, making it a must-have for any home.',
    price: 58,
    rating: 4.69,
    stock: 7,
    category: 'Plates',
    thumbnail: Plates,
    colors:['White', 'Gray', 'Black'],
    images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    id: 2,
    title: 'Serving cup',
    description: 'The ceramic plate is a beautiful piece of handcrafted art. It has a silky texture and features intricate floral designs in soft hues of blue and green. The plate is slightly curved, creating an elegant shape that adds dimension to any table setting. It is sturdy and durable, perfect for serving meals or displaying decorative items. The ceramic material allows for easy cleaning and makes it dishwasher and microwave safe. This plate is not only functional but also a stunning addition to any kitchen or dining room.',
    price: 45,
    rating: 4.69,
    stock: 1,
    category: 'Cups',
    thumbnail: D_cup,
    colors:['White', 'Gray', 'Black'],
    images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    id: 3,
    title: 'Stoneware jar',
    description: "The stoneware plate is a durable and versatile ceramic piece that is perfect for everyday use. Made from natural clay and fired at a high temperature, it is dense, strong, and chip-resistant, making it ideal for serving hot or cold food. Its earthy texture and subtle variations in tone give it a rustic yet elegant look that complements any table setting. The plate's glazed finish not only adds a protective layer but also enhances its natural beauty, making it a practical and stylish addition to your dinnerware collection.",
    price: 48,
    rating: 4.69,
    stock: 15,
    category: 'Cups',
    thumbnail: Jar,
    colors:['White', 'Gray', 'Black'],
    images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    id: 4,
    title: 'Candy cup',
    description: "The candy dish is a beautiful glass bowl with a wide opening. It sits on a sturdy pedestal giving it a graceful look. The dish is filled with an array of brightly colored candies, ranging from gummies to hard candies. The sweet smell of the candies wafts from the dish, tempting anyone nearby to take a sample. It's perfect for welcoming guests into your home or adding a touch of whimsy to any room.",
    price: 40,
    rating: 4.69,
    stock: 36,
    category: 'Cups',
    thumbnail: Pot,
    colors:['White', 'Gray', 'Black'],
    images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    id: 5,
    title: 'Wedding Ring Holder',
    description: "The candy dish is a beautiful glass bowl with a wide opening. It sits on a sturdy pedestal giving it a graceful look. The dish is filled with an array of brightly colored candies, ranging from gummies to hard candies. The sweet smell of the candies wafts from the dish, tempting anyone nearby to take a sample. It's perfect for welcoming guests into your home or adding a touch of whimsy to any room.",
    price: 72,
    rating: 4.69,
    stock: 3,
    category: 'Plates',
    thumbnail: A_plate,
    colors:['White', 'Gray', 'Black'],
    images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  }
]

export const Cart_List: Array<ICartProduct> = [
  {
    id: 1,
    category: 'Plates',
    title: 'Serving pottery plate',
    price: 58,
    quantity: 3,
    thumbnail: Plates,
    color:'Gray',
  },
  {
    id: 2,
    category: 'Cups',
    title: 'Serving cup',
    price: 45,
    quantity: 3,
    thumbnail: D_cup,
    color:'White',
  },
  {
    id: 5,
    category: 'Plates',
    title: 'Wedding Ring Holder',
    price: 45,
    quantity: 6,
    thumbnail: A_plate,
    color:'Black',
  }
]