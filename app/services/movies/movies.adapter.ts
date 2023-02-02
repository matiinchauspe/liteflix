import { Date } from "@utils/index";

import {
  FeaturedResponse,
  FeaturedTransformedResults,
  PopularResponse,
  PopularTransformedResults,
  Movie,
  MovieTransformed,
  MyMovie,
  MyMovieTransformed,
  MyMoviesResponse,
  MyMoviesTransformedResults,
} from "@internal-types/movie";

import { IMAGE_BASE_URL } from "@/app/constants/url";

const MovieTransform = (movie: Movie): MovieTransformed => ({
  id: movie.id.toString(),
  image: `${IMAGE_BASE_URL}/original${movie.poster_path}`,
  title: movie.original_title,
  description: movie.overview,
  date: Date.getYear(movie.release_date).toString(),
  popularity: movie.popularity,
  vote_average: movie.vote_average,
});

const MyMovieTransform = (movie: MyMovie): MyMovieTransformed => ({
  id: movie.id,
  image: `data:${movie.image.contentType};base64,${Buffer.from(
    // @ts-ignore 
    movie.image.data,
    "binary"
  ).toString("base64")}`,
  title: movie.title,
  vote_average: 0.0,
  date: Date.getYear(movie.updatedAt).toString(),
});

export const FeaturedMoviesTransformResponse = (
  req: FeaturedResponse
): FeaturedTransformedResults => ({
  data: req.results.map(MovieTransform),
});

export const PopularMoviesTransformResponse = (
  req: PopularResponse
): PopularTransformedResults => ({
  data: req.results.map(MovieTransform),
});

export const MyMoviesTransformResponse = (
  req: MyMoviesResponse
): MyMoviesTransformedResults => ({
  data: req.data.map(MyMovieTransform),
});
