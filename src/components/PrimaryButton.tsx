import { ButtonProps } from '../interfaces/button';

function PrimaryButton(props: any) {
  const { children, onClick, className } = props as ButtonProps;

  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

export default PrimaryButton;
