import { Route, Routes } from "react-router-dom";
//Components
import NavBar from './components/navbar/NavBar';
import Footer from "./components/footer/Footer";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ShopOnline from "./pages/ShopOnline";
import Contacts from "./pages/Contacts";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";

export default function App(): JSX.Element {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavBar />
      <Breadcrumbs />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<ShopOnline />}/>
          <Route path='/shop/:category' element={<ShopOnline />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contacts />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/shop/:category/:title' element={<Product />}/>
        </Routes>
      <Footer />
    </div>
  )
}