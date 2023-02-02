// Internal Dependencies
import { MoviesService } from "@services/index";

import { MovieExplore, InfoActions, BackgroundImage } from "./components/index";

const HomePage = async () => {
  const featuredMovies = await MoviesService.getFeaturedMovies();
  const firstOne = featuredMovies.data[0];
  // Popular - First four
  const popularMovies = await MoviesService.getPopularMovies();
  const fourFirstPopularMovies = popularMovies.data.slice(0, 4);
  // My Movies - First four
  const myMovies = await MoviesService.getMyListOfMovies();
  const fourFirstMyMovies = myMovies.data.slice(0, 10);

  return (
    <div className={`flex flex-1 flex-col md:flex-row justify-between pt-10`}>
      <BackgroundImage image={firstOne.image} title={firstOne.title} />
      <InfoActions movieTitle={firstOne.title} />
      <MovieExplore
        popularMovies={fourFirstPopularMovies}
        myMovies={fourFirstMyMovies}
      />
    </div>
  );
};

export default HomePage;

