import {
  FeaturedResponse,
  PopularResponse,
  Movie,
  FeaturedTransformedResults,
  PopularTransformedResults,
} from "@internal-types/movie";

// TODO: add transform type for movie result later
const MovieTransform = (movie: Movie): Movie => ({
  ...movie,
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
