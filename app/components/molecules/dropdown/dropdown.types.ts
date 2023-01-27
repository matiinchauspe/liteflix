export type Option = {
  value: string;
  label: string;
};

export interface DropdownProps {
  label?: string;
  selected: string;
  options: Option[];
  className?: string;
  onChange: (value: string) => void;
}
