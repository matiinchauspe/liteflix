export interface ButtonProps {
  variant?: "filled" | "outlined" | "text";
  onClick: () => void;
  children: React.ReactNode;
}
