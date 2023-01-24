// Internal Dependencies
import { MoviesService } from "@services/index";

import { MovieList } from "./movie-list";

const MovieExplore = async () => {
  const popularMovies = await MoviesService.getPopularMovies();
  const fourFirstMovies = popularMovies.data.slice(0, 4);

  return (
    <section
      className="flex flex-col h-[750px] md:w-80 lg:w-80 gap-4 
     overflow-x-hidden"
    >
      <MovieList movies={fourFirstMovies} />
    </section>
  );
};

export default MovieExplore;
