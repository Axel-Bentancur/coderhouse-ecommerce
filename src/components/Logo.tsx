//Types
import { WithChildren } from "../interfaces/Icontainer";

export default function Logo({ children, className }: WithChildren & { className?: string }): JSX.Element {
  return (
    <span className={`hidden md:inline-block md:font-bold md:text-2xl noto ${className}`}>{children}</span>
  );
}

