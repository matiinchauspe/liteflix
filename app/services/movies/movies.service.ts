// Internal Dependencies
import { UrlConstants } from "@constants/index";
import {
  FeaturedMoviesTransformResponse,
  PopularMoviesTransformResponse,
} from "./movies.adapter";

export const getPopularMovies = async () => {
  try {
    const res = await fetch(UrlConstants.POPULAR_MOVIES_URL);
    const result = PopularMoviesTransformResponse(await res.json());

    return result;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getFeaturedMovies = async () => {
  try {
    const res = await fetch(UrlConstants.FEATURED_MOVIES_URL);
    const result = FeaturedMoviesTransformResponse(await res.json());

    return result;
  } catch (error) {
    throw new Error(error as string);
  }
};
