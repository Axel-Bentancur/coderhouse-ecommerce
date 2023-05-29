import { Link } from "react-router-dom";

enum Target {
  list,
  cart
}

interface Props {
  setIsOpen: (el: Target) => void,
  element: number,
  navLinks: {
    title: string,
    path: string,
    show?: boolean,
  }[]
}

export default function NavList(props: Props): JSX.Element {
  const {setIsOpen, navLinks, element} = props;

  return (
    <>
      <div className="p-4 mt-16">
        {navLinks.map((el, idx) => (
          <Link key={idx} to={el.path} onClick={() => setIsOpen(Target.list)} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <span>
              {el.title}
            </span>
          </Link>
        ))}
        <div onClick={() => setIsOpen(element)} className="group relative flex gap-x-6 rounded-lg p-4 mt-16 hover:bg-gray-50 lg:hidden justify-center bg-purple-200">
          <span>
            Close
          </span>
        </div>
      </div>
    </>
  )
}
