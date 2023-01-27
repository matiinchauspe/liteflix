// External dependencies
import { create } from "zustand";
// Internal dependencies
import { MovieTransformed } from "@internal-types/movie";

interface MovieState {
  movieSelected: MovieTransformed | null;
  setMovieSelected: (movie: MovieTransformed) => void;
}

const useMovieStore = create<MovieState>((set) => ({
  movieSelected: null,
  setMovieSelected: (movie: MovieTransformed) =>
    set(() => ({
      movieSelected: movie,
    })),
}));

export default useMovieStore;
