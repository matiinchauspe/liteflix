import { POPULAR_MOVIES_URL, FEATURED_MOVIES_URL } from "@constants/url";
import {
  FeaturedMoviesTransformResponse,
  PopularMoviesTransformResponse,
} from "./movies.adapter";

export const getPopularMovies = async () => {
  try {
    const res = await fetch(POPULAR_MOVIES_URL);
    const result = PopularMoviesTransformResponse(await res.json());

    return result;
  } catch (error) {
    throw error;
  }
};

export const getFeaturedMovies = async () => {
  try {
    const res = await fetch(FEATURED_MOVIES_URL);
    const result = FeaturedMoviesTransformResponse(await res.json());

    return result;
  } catch (error) {
    throw error;
  }
};
