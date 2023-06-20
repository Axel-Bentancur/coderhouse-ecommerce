//Components
import CartItemsWidget from "./CartItemsWidget";
import NavList from "./NavList";
//Types
import { ITargetWidget } from '../../interfaces/ITargetWidget';

export default function Drawer({ isOpen, setIsOpen, element }: { isOpen: boolean; setIsOpen: (el: ITargetWidget) => void; element: ITargetWidget}): JSX.Element {
  return (
    <main className={`z-20 fixed inset-0 ${isOpen ? 'backdrop-blur-sm translate-x-0' : 'delay-500 translate-x-full' }`}>
      <section className={`absolute w-screen max-w-lg right-0 bg-white h-full shadow-xl transition duration-300 delay-300 ease-in-out transition-all transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        { element === 'list' ?
        <NavList setIsOpen={setIsOpen} element={element}/>
        :
        <CartItemsWidget setIsOpen={setIsOpen} element={element}/>
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