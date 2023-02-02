export type Option = {
  value: string;
  label: string;
};

export type DropdownProps = {
  label?: string;
  selected: string;
  options: Option[];
  className?: string;
  onChange: (value: string) => void;
}
