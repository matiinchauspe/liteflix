import { MenuToggleProps } from "./menu-toggle.types";

import { MenuIcon, CloseIcon } from "@components/atoms/icons";
import { Button } from "@components/atoms";

const MenuToggle = ({ opened, toggle }: MenuToggleProps) => (
  <Button
    variant="text"
    className="outline-none cursor-pointer top-[18px] right-[10px] z-10"
    onClick={toggle}
  >
    {opened ? <CloseIcon /> : <MenuIcon />}
  </Button>
);

export default MenuToggle;
