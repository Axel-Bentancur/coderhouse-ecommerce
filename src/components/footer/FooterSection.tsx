//Types
import { WithChildren } from "../../interfaces/Icontainer"

export default function FooterSection({children, additionClass}:WithChildren) {
  return (
    <div className={`gap-1 justify-items-center items-start justify-center py-4 ${additionClass}`}>
      {children}
    </div>
  )
}