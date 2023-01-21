import {
  FeaturedResponse,
  PopularResponse,
  Movie,
  FeaturedTransformedResults,
  PopularTransformedResults,
  MovieTransformed,
} from "@internal-types/movie";

const MovieTransform = (movie: Movie): MovieTransformed => ({
  id: movie.id.toString(),
  image: movie.poster_path,
  title: movie.original_title,
  description: movie.overview,
  date: movie.release_date,
  popularity: movie.popularity,
  vote_average: movie.vote_average,
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