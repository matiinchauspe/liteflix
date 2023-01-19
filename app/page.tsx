// External or nextjs imports
import Image from "next/image";
// Internal imports
import { MoviesService } from "@services/index";

const Home = async () => {
  const featuredMovies = await MoviesService.getFeaturedMovies();

  return (
    <main className="pt-20">
      {featuredMovies.data.map((movie) => (
        <div key={movie.id.toString()}>{movie.title}</div>
      ))}
    </main>
  );
};

export default Home;
