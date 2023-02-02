import { ReactNode } from 'react'

export type LinkProps = {
  href: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}
