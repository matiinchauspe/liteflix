"use client";

import { useEffect, useState } from "react";

import { MovieTransformed } from "@internal-types/movie";
// import { MoviesService } from "@services/index";
import { IMAGE_BASE_URL } from "@constants/url";

// TODO: review this later
export const useBuildImageUrl = (pathImage: string, size?: string) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(
      `${IMAGE_BASE_URL}${
        Boolean(size) ? `/${size}` : "/original"
      }/${pathImage}}`
    );
  }, [pathImage, size]);

  return url;
};
