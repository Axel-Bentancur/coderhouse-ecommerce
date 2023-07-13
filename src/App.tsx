import { Navigate, Route, Routes } from "react-router-dom";
//Components
import NavBar from './components/navbar/NavBar';
import Footer from "./components/footer/Footer";
//Context
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ShopOnline from "./pages/ShopOnline";
import Contacts from "./pages/Contacts";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import LoginScreen from "./components/auth/LoginScreen";
import RegisterScreen from "./components/auth/RegisterScreen";

export default function App(): JSX.Element {
  const auth = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavBar />
      <Breadcrumbs />
        {auth?.user.logged ? (
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Shop' element={<ShopOnline />}/>
            <Route path='/Shop/:category' element={<ShopOnline />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contacts />}/>
            <Route path='/Shop/:category/:title' element={<Product />}/>
            <Route path='/Checkout' element={<Checkout />}/>
            <Route path='*' element={<Navigate to='/Shop' />}/>
          </Routes>
        ): (
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Shop' element={<ShopOnline />}/>
            <Route path='/Shop/:category' element={<ShopOnline />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contacts />}/>
            <Route path='/Shop/:category/:title' element={<Product />}/>
            <Route path='/login' element={<LoginScreen />}/>
            <Route path='/register' element={<RegisterScreen />}/>
            <Route path='*' element={<Navigate to='/login' />}/>
          </Routes>
        )}
      <Footer />
    </div>
  )
}