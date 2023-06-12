import { Route, Routes } from "react-router-dom";

import NavBar from './components/navbar/NavBar';
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ShopOnline from "./pages/ShopOnline";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";

import "./App.css";

export default function App(): JSX.Element {

  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<ShopOnline />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contacts />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      <Footer />
    </div>
  )
}