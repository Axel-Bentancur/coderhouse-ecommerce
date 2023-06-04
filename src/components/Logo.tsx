interface Props{
  children: string
}

export default function Logo({children}: Props) {
  return (
    <>
      <span className="hidden md:inline-block md:font-bold md:text-2xl noto">{children}</span>
    </>
  )
}
