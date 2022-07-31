interface ButtonProps {
  styles: React.CSSProperties
  onClick?: () => void
  children: React.ReactNode
}

export default function Button({ styles, onClick, children }: ButtonProps) {
  return (
    <button style={styles} className="w-[160px] h-[48px]" onClick={onClick}>
      {children}
    </button>
  )
}

{
  /* <span className="text-white text-[13px] font-bold">SEE PRODUCT</span> */
}
