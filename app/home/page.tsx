// Internal Dependencies
import { MoviesService } from "@services/index";

import { MovieExplore, InfoActions, BackgroundImage } from "./components/index";

const HomePage = async () => {
  const featuredMovies = await MoviesService.getFeaturedMovies();
  const firstOne = featuredMovies.data[0];
  // Popular
  const popularMovies = await MoviesService.getPopularMovies();
  const fourFirstPopularMovies = popularMovies.data.slice(0, 4);
  // FIXME:Temporal - four first featured movies
  // TODO: Get movies from my own API here
  const fourFirstFeaturedMovies = featuredMovies.data.slice(5, 9);

  return (
    <div className={`flex flex-1 flex-col md:flex-row justify-between pt-10`}>
      {/* Background image of movie selected */}
      <BackgroundImage imageUrl={firstOne.image_url} title={firstOne.title} />
      {/* Title and reproduce section */}
      <InfoActions movieTitle={firstOne.title} />
      {/* Movie list */}
      <MovieExplore
        popularMovies={fourFirstPopularMovies}
        myMovies={fourFirstFeaturedMovies}
      />
    </div>
  );
};

export default HomePage;
