import { MovieTransformed, MyMovieTransformed } from "@internal-types/movie";

export type MovieListProps = {
  movies: MovieTransformed[] | MyMovieTransformed[];
};
