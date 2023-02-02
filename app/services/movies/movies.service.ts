// Internal Dependencies
import { UrlConstants } from "@constants/index";
import { getRequest } from "@api/index";
import {
  FeaturedMoviesTransformResponse,
  PopularMoviesTransformResponse,
  MyMoviesTransformResponse,
} from "./movies.adapter";

export const getPopularMovies = async () => {
  try {
    const { data: response } = await getRequest({
      url: UrlConstants.POPULAR_MOVIES_URL,
    });
    const result = PopularMoviesTransformResponse(response);

    return result;
  } catch (error: any) {
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
  } catch (error: any) {
    throw new Error(error as string);
  }
};

// TO BE CONSIDER:
// In this case we use the Web fetch() API and not Axios (our set API in api/index) since Next.js extended the native functionality
// to allow dynamic data from the server - Similar to `getServerSideProps`
export const getMyListOfMovies = async () => {
  try {
    const response = await fetch(UrlConstants.BASE_LITEFLIX_API_URL, {
      // cache: "no-store",
    });
    const result = await response.json();

    return MyMoviesTransformResponse(result);
  } catch (error: any) {
    throw new Error(error as string);
  }
};
