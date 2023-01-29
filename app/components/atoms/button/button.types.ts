export interface ButtonProps {
  variant?: "filled" | "outlined" | "text";
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}
