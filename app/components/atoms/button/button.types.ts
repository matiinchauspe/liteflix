export type ButtonProps = {
  variant?: "filled" | "outlined" | "text";
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}
