export interface ButtonProps {
  styles?: React.CSSProperties;
  className?: string;
	href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
