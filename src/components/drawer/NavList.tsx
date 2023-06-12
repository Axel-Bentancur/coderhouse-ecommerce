import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/NavbarContainer";
import CloseButton from "../buttons/CloseButton";
import { ITargetWidget } from "../../interfaces/ITargetWidget";
import { INavLinks } from "../../interfaces/INavLinks";

export default function NavList({ setIsOpen, navLinks, element}: { setIsOpen: (el: ITargetWidget) => void; navLinks: INavLinks[]; element: ITargetWidget}): JSX.Element {

  return (
    <>
      <NavbarContainer additionClass={'flex'}>
        <CloseButton setIsOpen={setIsOpen} element={element} title={null}/>
      </NavbarContainer>
      <div className="px-4">
        {navLinks.map((el, idx) => (
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
