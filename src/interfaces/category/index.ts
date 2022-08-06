export interface CategoryProps {
  id?: number;
  name: string;
  path: string;
  position?: number;
  onClick?: () => void;
}
