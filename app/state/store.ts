// External dependencies
import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
// Internal dependencies
import { MovieTransformed, MyMovieTransformed } from "@internal-types/movie";

type MovieState = {
  movieSelected: MovieTransformed | MyMovieTransformed | null;
  setMovieSelected: (movie: MovieTransformed | MyMovieTransformed) => void;
};

export const useMovieStore = create<MovieState>((set) => ({
  movieSelected: null,
  setMovieSelected: (movie: MovieTransformed | MyMovieTransformed) =>
    set(() => ({
      movieSelected: movie,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Movie Store", useMovieStore);
}
