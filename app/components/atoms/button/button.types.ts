export interface ButtonProps {
  variant?: "filled" | "outlined" | "text";
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}
