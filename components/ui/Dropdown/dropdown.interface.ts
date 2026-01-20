export interface DropdownProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}