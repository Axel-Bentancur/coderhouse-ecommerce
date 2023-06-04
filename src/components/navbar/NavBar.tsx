import './NavBar.scss';
import { Link } from 'react-router-dom';
import useDrawer from '../../hooks/useDrawer';
import Drawer from '../drawer/Drawer';
import BurguerButton from './BurguerButton';
import CartWidget from './CartWidget';
import Logo from '../Logo';

interface Props {
  navLinks: {
    title: string,
    path: string,
    show?: boolean,
  }[],
  itemList: {
    image: string,
    title: string,
    description: string,
    price: number,
    quantity: number,
  }[]
}

const quantity = 9;

export default function NavBar (props:Props):JSX.Element {

  const { navLinks, itemList } = props
  const [toggle, element, setDrawer] = useDrawer();

  return (
    <header className='px-0'>
      <nav className="flex items-center justify-between bg-white px-8 py-4 lg:px-20 xl:px-40 shadow-lg">
        <Link to='/' >
          <Logo>quietform.</Logo>
        </Link>
        <div className='flex items-center'>
        {navLinks.map((e, idx) => (
            <Link to={e.path} key={idx} className="mt-4 lg:inline-block lg:mt-0 lg:mr-10 text-center active:text-gray-500 hidden 2xl:block">
              <span className='underline-hover-effect text-base text-gray-800'>{e.title}</span>
            </Link>
          ))}
          <CartWidget quantity={quantity} setIsOpen={setDrawer}/>
          <BurguerButton isOpen={toggle} setIsOpen={setDrawer}/>
        </div>
      </nav>
      <Drawer isOpen={toggle} setIsOpen={setDrawer} navLinks={navLinks} element={element} itemList={itemList}/>
    </header>
  )
}