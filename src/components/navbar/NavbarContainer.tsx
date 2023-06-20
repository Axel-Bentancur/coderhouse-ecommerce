//Types
import { WithChildren } from "../../interfaces/Icontainer"

export default function NavbarContainer({children, additionClass} : WithChildren) : JSX.Element {
  return (
    <nav className={`items-center justify-between px-8 py-4 ${additionClass}`}>
      {children}
    </nav>
  )
}
