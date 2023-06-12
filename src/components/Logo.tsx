import { WithChildren } from "../interfaces/Icontainer";

export default function Logo({children}: WithChildren) : JSX.Element {
  return (
    <>
      <span className="hidden md:inline-block md:font-bold md:text-2xl noto">{children}</span>
    </>
  )
}
