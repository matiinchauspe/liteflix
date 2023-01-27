export interface MenuItemProps {
  navPath: string;
  disable?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
