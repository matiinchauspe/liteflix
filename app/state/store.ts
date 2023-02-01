// External dependencies
import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
// Internal dependencies
import { MovieTransformed } from "@internal-types/movie";

type MovieState = {
  movieSelected: MovieTransformed | null;
  setMovieSelected: (movie: MovieTransformed) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  movieSelected: null,
  setMovieSelected: (movie: MovieTransformed) =>
    set(() => ({
      movieSelected: movie,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Movie Store", useMovieStore);
}
