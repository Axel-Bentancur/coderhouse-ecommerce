interface Props {
  children: React.ReactNode,
  sm_cols: number,
  md_cols: number
}

export default function FooterSection({children, sm_cols, md_cols}:Props) {
  return (
    <div className={`grid grid-cols-${sm_cols} md:grid-cols-${md_cols} gap-1 justify-items-center items-start justify-center py-4`}>
      {children}
    </div>
  )
}