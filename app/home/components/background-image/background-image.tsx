"use client";
// External dependencies
import Image from "next/image";
// import { twMerge } from "tailwind-merge";
// Internal dependencies
import { translateYDownToUp } from "@animations/index";
import { useMediaQuery } from "@hooks/index";

import { WrappedAnimate } from "@components/molecules";

interface BackgroundImageProps {
  imageUrl: string;
  title: string;
}

const BackgroundImage = ({ imageUrl, title }: BackgroundImageProps) => {
  const { isLarge, isMedium, isSmall } = useMediaQuery();

  console.log({ isLarge, isMedium, isSmall });
  // const mediaQueryStyle = () => {
  //   if (isLarge) {
  //     // return "object-center";
  //     return "center";
  //   }
  //   // return "object-top";
  //   return "top";
  // };

  return (
    <div className="fixed top-0 left-0 -z-10">
      <WrappedAnimate
        animation={translateYDownToUp}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={imageUrl}
          alt={title}
          height={1080}
          width={isSmall ? 1000 : 1920}
          style={{
            objectFit: "cover",
            aspectRatio: "1/1",
            // objectPosition: mediaQueryStyle(),
          }}
          // hardcoded
          // className={twMerge(
          //   `object-cover object-center aspect-[1/1] ${mediaQueryStyle()}`
          // )}
        />
      </WrappedAnimate>
    </div>
  );
};

export default BackgroundImage;
