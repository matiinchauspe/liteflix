import { ReactNode } from 'react'

export type ButtonProps = {
  variant?: "filled" | "outlined" | "text";
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}
