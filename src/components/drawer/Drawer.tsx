import CartItemsWidget from "./CartItemsWidget";
import NavList from "./NavList";

import { ITargetWidget } from '../../interfaces/ITargetWidget';
import { INavLinks } from "../../interfaces/INavLinks";
import { IProducts } from "../../interfaces/IProducts";

export default function Drawer({ isOpen, setIsOpen, navLinks, element, Product_List }: { isOpen: boolean; setIsOpen: (el: ITargetWidget) => void; navLinks: INavLinks[]; element: ITargetWidget, Product_List: IProducts[] }): JSX.Element {

  return (
    <main className={`z-20 fixed inset-0 ${isOpen ? 'backdrop-blur-sm translate-x-0' : 'delay-500 translate-x-full' }`}>
      <section className={`absolute w-screen max-w-lg right-0 bg-white h-full shadow-xl transition duration-300 delay-300 ease-in-out transition-all transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        { element === 'list' ?
        <NavList navLinks={navLinks} setIsOpen={setIsOpen} element={element}/>
        :
        <CartItemsWidget navLinks={navLinks} setIsOpen={setIsOpen} element={element} Product_List={Product_List}/>
        }
      </section>
      <section className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(element);
        }}
      />
    </main>
  );
}