export type LinkProps = {
  href: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
