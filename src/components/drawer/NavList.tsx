import { Link } from "react-router-dom";
//Components
import NavbarContainer from "../navbar/NavbarContainer";
import CloseButton from "../buttons/CloseButton";
//Data
import { Nav_Links } from "../../utilities/staticData";
//Types
import { ITargetWidget } from "../../interfaces/ITargetWidget";


export default function NavList({ setIsOpen, element}: { setIsOpen: (el: ITargetWidget) => void; element: ITargetWidget}): JSX.Element {

  return (
    <>
      <NavbarContainer additionClass={'flex'}>
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
      </div>
    </>
  )
}
