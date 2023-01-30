// External Dependencies
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
// Internal Dependencies
import { OPTIONS_KEY_MAP } from "@utils/menu";
import { PATH_NAMES } from "@/app/constants/route-path";
import { Transcript } from "@lang/es";
import { staggerAndVisibility } from "../menu.animations";

import { Link } from "@components/atoms/index";
import { PlusIcon } from "@components/atoms/icons";
import { MenuItem } from "./menu-item";

const Navigation = ({ onClose }: any) => (
  <motion.ul
    className="px-12 py-20 sm:px-20 absolute top-[100px] right-0 w-[100%] md:w-[760px] z-10"
    variants={staggerAndVisibility}
  >
    {Object.keys(OPTIONS_KEY_MAP).map((key: string) => {
      const isAddMovieItem = OPTIONS_KEY_MAP[key].path === PATH_NAMES.ADD_MOVIE;

      return (
        <MenuItem key={key}>
          <Link
            href={OPTIONS_KEY_MAP[key].path}
            disabled={OPTIONS_KEY_MAP[key].disabled}
            className={twMerge(`hover:scale-110 transition-all p-0 tracking-[4px] flex gap-2 items-center font-light
                ${classnames({
                  "font-bold my-5": isAddMovieItem,
                })}
              `)}
            onClick={onClose}
          >
            {isAddMovieItem && <PlusIcon svgClassName="-mt-[5px] stroke-2" />}
            {Transcript.es.home.menu.options[OPTIONS_KEY_MAP[key].name]}
          </Link>
        </MenuItem>
      );
    })}
  </motion.ul>
);

export default Navigation;
