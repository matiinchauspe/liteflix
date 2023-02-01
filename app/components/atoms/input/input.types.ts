export type InputProps = {
  placeholder?: string;
  name?: string;
  type?: string;
  className?: string;
  value?: string;
  disabled?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
