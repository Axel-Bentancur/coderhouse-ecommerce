import { Link } from "react-router-dom"

interface Props {
  children: React.ReactNode,
  path: string
}

export default function SocialMedia({children, path}:Props) {
  return (
    <>
     <Link to={path} target="_blank" rel="noopener noreferrer" className="m-2">
      {children}
    </Link>
    </>
  )
}
