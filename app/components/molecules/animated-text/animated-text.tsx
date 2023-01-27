"use client";
// External dependencies
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
// Internal dependencies
import { AnimatedCharactersProps } from "./animated-text.types";
import { containerVariants, itemVariants } from "./animations";

import { Text } from "@components/atoms";

// Word wrapper
const Wrapper = (props: any) => {
  return <span className="whitespace-nowrap">{props.children}</span>;
};

// NOTE: The animations are not passed as props for the moment
const AnimatedText = ({
  text,
  variant = "body1",
  color = "black",
  weight = "regular",
  className = "",
}: AnimatedCharactersProps) => {
  //  Split each word of props.text into an array
  const splitWords: string[] = text.split(" ");
  // Create storage array
  const words: any[] = [];
  splitWords.forEach((item: any) => {
    words.push(item.split(""));
  });

  // Add a space ("\u00A0") to the end of each word
  words.map((word: any) => {
    return word.push("\u00A0");
  });

  const classes = twMerge(`drop-shadow-lg shadow-black ${className}`);

  return (
    <motion.div animate="visible" variants={containerVariants} initial="hidden">
      <Text variant={variant} color={color} weight={weight} className={classes}>
        {words.map((_, index) => (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element: any, index: number) => (
              <span className="inline-block overflow-hidden" key={index}>
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={itemVariants}
                >
                  {element}
                </motion.span>
              </span>
            ))}
          </Wrapper>
        ))}
      </Text>
    </motion.div>
  );
};

export default AnimatedText;
