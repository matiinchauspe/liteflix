// Internal Dependencies
import { MoviesService } from "@services/index";

import { MovieExplore, InfoActions, BackgroundImage } from "./components/index";

const HomePage = async () => {
  const featuredMovies = await MoviesService.getFeaturedMovies();
  const firstOne = featuredMovies.data[0];
  // Popular - Slice
  const popularMovies = await MoviesService.getPopularMovies();
  const popularMoviesSlice = popularMovies.data.slice(0, 4);
  // My Movies - Slice
  const myMovies = await MoviesService.getMyListOfMovies();
  // FIXME: I put 20 for my movies limit  - hardcoded
  const myMoviesSlice = myMovies.data.slice(0, 30);

  return (
    <div className={`flex flex-1 flex-col md:flex-row justify-between pt-10`}>
      <BackgroundImage image={firstOne.image} title={firstOne.title} />
      <InfoActions movieTitle={firstOne.title} />
      <MovieExplore
        popularMovies={popularMoviesSlice}
        myMovies={myMoviesSlice}
      />
    </div>
  );
};

export default HomePage;

