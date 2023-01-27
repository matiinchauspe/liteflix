"use client";

// Internal Dependencies
import { Transcript } from "@lang/es";
import { useMediaQuery } from "@hooks/index";
import { InfoProps } from "./info.types";

import { Text } from "@components/atoms";
import { AnimatedText } from "@components/molecules";

const Info = ({ title }: InfoProps) => {
  const { isLargest, isLarge } = useMediaQuery();

  const textSizesTitle = () => {
    if (isLargest) return "h1";
    if (isLarge) return "h2";

    return "h3";
  };

  return (
    <>
      <div className="flex gap-2">
        <Text variant="body1" color="text-white" weight="light">
          {Transcript.es.home.infoActions.by}
        </Text>
        <Text variant="body1" color="text-white" inline>
          {Transcript.es.global.liteflix}
        </Text>
      </div>
      <AnimatedText
        text={title}
        color="text-aquaGreen"
        weight="bold"
        variant={textSizesTitle()}
      />
    </>
  );
};

export default Info;
