// Internal Dependencies
import { UrlConstants } from "@constants/index";
import { getRequest, postRequest } from "@api/index";
import {
  FeaturedMoviesTransformResponse,
  PopularMoviesTransformResponse,
} from "./movies.adapter";

export const getPopularMovies = async () => {
  try {
    const { data: response } = await getRequest({
      url: UrlConstants.POPULAR_MOVIES_URL,
    });
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
    const result = FeaturedMoviesTransformResponse(response);

    return result;
  } catch (error) {
    throw new Error(error as string);
  }
};

// TODO: We should use a better way to handle the upload and use this
export const uploadMovie = async (data: FormData) => {
  const image = data.get("image");
  const title = data.get("title");

  try {
    const { data: response } = await postRequest({
      url: UrlConstants.UPLOAD_MOVIE_URL,
      headers: { "Content-Type": "multipart/form-data" },
      data: {
        image,
        title,
      },
    });

    return {
      success: response.status === "OK",
      error: response.status === "ERROR",
    };
  } catch (error) {
    return {
      success: false,
      error: true,
    };
  }
};
