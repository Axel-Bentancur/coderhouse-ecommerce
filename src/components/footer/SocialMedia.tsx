import { Link } from "react-router-dom";
//Types
import { WithChildren } from "../../interfaces/Icontainer";

export default function SocialMedia({children, path} : { children: React.ReactElement<WithChildren>; path: string }) {
  return (
     <Link to={path} target="_blank" rel="noopener noreferrer" className="m-2">
      {children}
    </Link>
  )
}
