import {
  POPULAR_MOVIES_URL,
  FEATURED_MOVIES_URL,
  IMAGE_BASE_URL,
} from "@constants/url";
import {
  FeaturedMoviesTransformResponse,
  PopularMoviesTransformResponse,
} from "./movies.adapter";
import { MovieImageReqProps } from "./movies.types";

export const getPopularMovies = async () => {
  try {
    const res = await fetch(POPULAR_MOVIES_URL);
    const result = PopularMoviesTransformResponse(await res.json());

    return result;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getFeaturedMovies = async () => {
  try {
    const res = await fetch(FEATURED_MOVIES_URL);
    const result = FeaturedMoviesTransformResponse(await res.json());

    return result;
  } catch (error) {
    throw new Error(error as string);
  }
};

// export const getMovieImage = async ({ image, size }: MovieImageReqProps) => {
//   try {
//     const res = await fetch(
//       `${IMAGE_BASE_URL}${Boolean(size) ? `/${size}` : "/original"}/${image}}`
//     );
//     const result = await res.blob();

//     return result;
//   } catch (error) {
//     throw new Error(error as string);
//   }
// };
