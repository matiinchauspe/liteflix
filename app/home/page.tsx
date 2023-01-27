// Internal imports
import { MoviesService } from "@services/index";
import { MovieExplore, InfoActions, BackgroundImage } from "./components/index";

const HomePage = async () => {
  const featuredMovies = await MoviesService.getFeaturedMovies();
  const firstOne = featuredMovies.data[0];

  return (
    <div
      className={`flex flex-1 md:flex-row justify-between sm:flex-col xs:flex-col pt-10 h-100`}
    >
      {/* Background image of movie selected */}
      <BackgroundImage imageUrl={firstOne.image_url} title={firstOne.title} />
      {/* Title and reproduce section */}
      <InfoActions movieTitle={firstOne.title} />
      {/* Movie list */}
      {/* @ts-expect-error Server Component */}
      <MovieExplore />
    </div>
  );
};

export default HomePage;
