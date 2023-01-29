// Internal Dependencies
import { UrlConstants } from "@constants/index";
import { getRequest, postRequest } from "@api/index";
import {
  FeaturedMoviesTransformResponse,
  PopularMoviesTransformResponse,
} from "./movies.adapter";
// FIXME: TEMPORAL
import { PostMock } from "./mock";

export const getPopularMovies = async () => {
  try {
    const { data: response } = await getRequest({
      url: UrlConstants.POPULAR_MOVIES_URL,
    });

    debugger;
    const result = PopularMoviesTransformResponse(response);

    return result;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getFeaturedMovies = async () => {
  try {
    const { data: response } = await getRequest({
      url: UrlConstants.FEATURED_MOVIES_URL,
    });
    debugger;
    const result = FeaturedMoviesTransformResponse(response);

    return result;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const uploadMovie = async (data: FormData) => {
  try {
    // FIXME: TEMPORAL - ADD MY API endpoint here
    // const { data: response } = await postRequest({
    //   url: UrlConstants.UPLOAD_MOVIE_URL,
    //   data,
    // });
    const response = Promise.resolve(PostMock);

    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};
