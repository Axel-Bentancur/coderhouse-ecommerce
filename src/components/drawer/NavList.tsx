import { Link } from "react-router-dom";
//Components
import NavbarContainer from "../navbar/NavbarContainer";
import CloseButton from "../buttons/CloseButton";
//Types
import { ITargetWidget } from "../../interfaces/ITargetWidget";
//Context
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
//Data
import { Nav_Links } from "../../utilities/staticData";


export default function NavList({ setIsOpen, element}: { setIsOpen: (el: ITargetWidget) => void; element: ITargetWidget}): JSX.Element {
  const user = useContext(AuthContext);

  const handleLogout = () => {
    if(user){
      user?.logout();
    }
  }

  return (
    <>
      <NavbarContainer additionClass={'flex min-h-[8vh]'}>
        <CloseButton setIsOpen={setIsOpen} element={element} title={null}/>
      </NavbarContainer>
      <div className="px-4">
        {Nav_Links.map((el, idx) => (
          <Link key={idx} to={el.path} onClick={() => setIsOpen(element)} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <span>
              {el.title}
            </span>
          </Link>
        ))}
        { user && user.user.logged &&
          <button type="button" onClick={handleLogout} className="w-full rounded-md border bg-purple-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700">Logout</button>
        }
      </div>
    </>
  )
}
