import CartItemsWidget from "./CartItemsWidget";
import NavList from "./NavList";

enum Target {
  list,
  cart
}

interface Props {
  setIsOpen: (el: Target) => void,
  isOpen: boolean,
  element: number,
  navLinks: {
    title: string,
    path: string,
    show?: boolean,
  }[],
  itemList: {
    image: string,
    title: string,
    price: number,
    quantity: number,
  }[]
}


export default function Drawer(props:Props): JSX.Element {
  const {setIsOpen, isOpen, element, navLinks, itemList} = props;

  return (
    <main className={`z-20 fixed inset-0 ${isOpen ? 'backdrop-blur-sm translate-x-0' : 'delay-500 translate-x-full' }`}>
      <section className={`absolute w-screen max-w-lg right-0 bg-white h-full shadow-xl transition duration-300 delay-300 ease-in-out transition-all transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        { element === 0 ?
        <NavList navLinks={navLinks} setIsOpen={setIsOpen} element={element}/>
        :
        <CartItemsWidget navLinks={navLinks} setIsOpen={setIsOpen} element={element} itemList={itemList}/>
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