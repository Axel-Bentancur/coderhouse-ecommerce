import { Link } from 'react-router-dom';

import useDrawer from '../../hooks/useDrawer';

import Drawer from '../drawer/Drawer';
import BurguerButton from './BurguerButton';
import CartWidget from './CartWidget';
import NavbarContainer from './NavbarContainer';

import { Nav_Links } from "../../utilities/Data";
import { Product_List } from "../../utilities/Data";

import Logo from '../Logo';
import './NavBar.scss';

const quantity = 9;

export default function NavBar ():JSX.Element {
  const [toggle, element, setDrawer] = useDrawer();

  return (
    <header className='px-0'>
      <NavbarContainer additionClass={'flex lg:px-20 xl:px-40'}>
        <Link to='/' >
          <Logo>quietform.</Logo>
        </Link>
        <div className='flex items-center'>
          {Nav_Links.map((e, idx) => (
            <Link to={e.path} key={idx} className="mt-4 lg:inline-block lg:mt-0 lg:mr-10 text-center active:text-gray-500 hidden 2xl:block">
              <span className='underline-hover-effect text-base text-gray-800'>{e.title}</span>
            </Link>
          ))}
          <CartWidget quantity={quantity} setIsOpen={setDrawer}/>
          <BurguerButton isOpen={toggle} setIsOpen={setDrawer}/>
        </div>
      </NavbarContainer>
      <Drawer isOpen={toggle} setIsOpen={setDrawer} navLinks={Nav_Links} element={element} Product_List={Product_List}/>
    </header>
  )
}