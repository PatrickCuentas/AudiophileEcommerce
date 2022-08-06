import { ButtonProps } from "../interfaces/button";

export default function Button({
  styles,
  className,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button style={styles} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

{
  /* <span className="text-white text-[13px] font-bold">SEE PRODUCT</span> */
}
