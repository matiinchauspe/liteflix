"use client";
// External Dependencies
import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
// Internal Dependencies
import { DropdownProps, Option as OptionType } from "./dropdown.types";
import { fadeInOut } from "./dropdown.animations";

import { Button, Text } from "@components/atoms/index";
import { ArrowIcon, CheckIcon } from "@components/atoms/icons";

const Dropdown = ({
  label = "",
  selected,
  options,
  className = "",
  onChange,
}: DropdownProps) => {
  const [shown, setShown] = useState(false);

  const showSelectedLabel = () => {
    const [option] = options.filter((opt) => opt.value === selected);

    return option.label;
  };

  const handleChange = (option: OptionType) => () => {
    onChange(option.value);
    setShown(false);
  };

  const handleOver = (value: boolean) => () => {
    setShown(value);
  };

  const containerClasses = twMerge(`relative ${className}`);

  return (
    <motion.div
      className={containerClasses}
      onHoverStart={handleOver(true)}
      onHoverEnd={handleOver(false)}
    >
      <div className={`flex ${label ? "gap-2" : ""} text-white`}>
        <Text className="font-light">{label}</Text>
        <motion.div
          className="cursor-pointer flex gap-2 items-center"
          // NOTE: This is for mobile
          onClick={handleOver(!shown)}
        >
          <Text>{showSelectedLabel()}</Text>
          <ArrowIcon svgClassName="-mt-[5px]" />
        </motion.div>
      </div>
      <motion.ul
        variants={fadeInOut}
        animate={shown ? "enter" : "exit"}
        initial="exit"
        className="absolute w-[95%] bg-grayBlack mt-1 border-opacity-50 p-2 z-20 rounded-md shadow-lg shadow-grayBlack"
      >
        {options.map((option) => {
          const isSelected = option.value === selected;

          return (
            <Button
              key={option.value}
              variant="text"
              onClick={handleChange(option)}
              className="block w-[100%] p-2 max-w-[100%]"
            >
              <motion.li
                whileHover={{
                  x: 2,
                }}
                className={twMerge(`
                  cursor-pointer p-2 text-white font-light
                  ${classnames({
                    "font-bold": isSelected,
                  })}
                `)}
              >
                <div className="flex flex-1 justify-between items-center">
                  {option.label}
                  {isSelected && <CheckIcon svgClassName="-mt-[5px]" />}
                </div>
              </motion.li>
            </Button>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Dropdown;
