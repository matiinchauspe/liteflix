import Image from "next/image";

import { BellIcon } from "@components/atoms/icons";

const UserSelect = () => (
  <section className="flex flex-1 gap-10 items-center">
    <BellIcon svgClassName="hidden md:flex z-10" />
    <Image
      src="/images/avatar.png"
      alt="user avatar"
      width={40}
      height={40}
      className="rounded-full object-cover aspect-auto z-10"
      priority
    />
  </section>
);

export default UserSelect;
