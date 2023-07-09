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
import Checkout from "./pages/Checkout";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";

export default function App(): JSX.Element {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavBar />
      <Breadcrumbs />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Shop' element={<ShopOnline />}/>
          <Route path='/Shop/:category' element={<ShopOnline />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contacts />}/>
          <Route path='/Checkout' element={<Checkout />}/>
          <Route path='/Shop/:category/:title' element={<Product />}/>
        </Routes>
      <Footer />
    </div>
  )
}