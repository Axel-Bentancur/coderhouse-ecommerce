import { Link } from "react-router-dom";
//Components
import NavbarContainer from "../navbar/NavbarContainer";

export default function CardCategory({lastElement}:{lastElement:string | undefined}) {
  return (
    <NavbarContainer additionClass={'flex py-0 lg:px-20 xl:px-40 min-h-[5vh] justify-around bg-[#fdf4ff]'}>
      <Link to={"/Shop"} className={`text-lg ${lastElement === 'Shop' ? 'text-purple-500' : ''}`}>All</Link>
      <Link to={"/Shop/Plates"} className={`text-lg ${lastElement === 'Plates' ? 'text-purple-500' : ''}`}>Plates</Link>
      <Link to={"/Shop/Cups"} className={`text-lg ${lastElement === 'Cups' ? 'text-purple-500' : ''}`}>Cups</Link>
      <Link to={"/Shop/Jars"} className={`text-lg ${lastElement === 'Jars' ? 'text-purple-500' : ''}`}>Jars</Link>
    </NavbarContainer>
  )
}
