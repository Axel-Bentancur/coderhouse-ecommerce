//Components
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/NavbarContainer";

export default function CardCategory({lastElement}:{lastElement:string | undefined}) {
  return (
    <NavbarContainer additionClass={'flex py-0 lg:px-20 xl:px-40 min-h-[5vh] justify-around'}>
      <Link to={"/shop"} className={`text-lg ${lastElement === 'shop' ? 'text-purple-500' : ''}`}>All</Link>
      <Link to={"/shop/Plates"} className={`text-lg ${lastElement === 'Plates' ? 'text-purple-500' : ''}`}>Plates</Link>
      <Link to={"/shop/Cups"} className={`text-lg ${lastElement === 'Cups' ? 'text-purple-500' : ''}`}>Cups</Link>
      <Link to={"/shop/Jars"} className={`text-lg ${lastElement === 'Jars' ? 'text-purple-500' : ''}`}>Jars</Link>
    </NavbarContainer>
  )
}
