import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from './components/navbar/NavBar';
import Home from "./pages/Home";
import About from "./pages/About";
import ShopOnline from "./pages/ShopOnline";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Image from './assets/ceramic-bowl.jpeg';


const navLinks = [
  {
    title: 'Shop online',
    path: '/shop',
    show: true
  },
  {
    title: 'About',
    path: '/about',
    show: true
  },
  {
    title: 'Contacts',
    path: '/contact',
    show: true
  },
  {
    title: 'Cart',
    path: '/cart',
    show: false
  },
]

const itemList = [
  {
    image: Image,
    title: 'Serving pottery bowls',
    description: 'This handmade pottery bowl boasts a smooth, round shape that tapers slightly towards the rim. Expertly crafted, it features a rustic, textured exterior that showcases the natural variations in the clay. The glaze, in a deep, earthy brown, pools beautifully in the deep curve of the bowl, creating a stunning gradient effect. Perfect for serving a hearty soup or salad, this unique piece is both functional and beautiful, making it a must-have for any home.',
    price: 58,
    quantity: 7,
  },{
    image: Image,
    title: 'Model ceramic plates',
    description: 'The ceramic plate is a beautiful piece of handcrafted art. It has a silky texture and features intricate floral designs in soft hues of blue and green. The plate is slightly curved, creating an elegant shape that adds dimension to any table setting. It is sturdy and durable, perfect for serving meals or displaying decorative items. The ceramic material allows for easy cleaning and makes it dishwasher and microwave safe. This plate is not only functional but also a stunning addition to any kitchen or dining room.',
    price: 45,
    quantity: 3,
  },{
    image: Image,
    title: 'Stoneware set',
    description: "The stoneware plate is a durable and versatile ceramic piece that is perfect for everyday use. Made from natural clay and fired at a high temperature, it is dense, strong, and chip-resistant, making it ideal for serving hot or cold food. Its earthy texture and subtle variations in tone give it a rustic yet elegant look that complements any table setting. The plate's glazed finish not only adds a protective layer but also enhances its natural beauty, making it a practical and stylish addition to your dinnerware collection.",
    price: 48,
    quantity: 15,
  },{
    image: Image,
    title: 'Candy dish',
    description: "The candy dish is a beautiful glass bowl with a wide opening. It sits on a sturdy pedestal giving it a graceful look. The dish is filled with an array of brightly colored candies, ranging from gummies to hard candies. The sweet smell of the candies wafts from the dish, tempting anyone nearby to take a sample. It's perfect for welcoming guests into your home or adding a touch of whimsy to any room.",
    price: 40,
    quantity: 36,
  },
]

export default function App(): JSX.Element {

  return (
    <>
    <NavBar navLinks={navLinks} itemList={itemList}/>
      <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<ShopOnline />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contacts />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </>
    </>
  )
}