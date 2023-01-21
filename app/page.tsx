// External or nextjs imports
import Image from "next/image";
// Internal imports
import { MoviesService } from "@services/index";
import { useBuildImageUrl } from "@hooks/index";

const Home = async () => {
  const featuredMovies = await MoviesService.getFeaturedMovies();
  const firstMovie = featuredMovies.data[0];

  return (
    <div className={`flex pt-20 h-100`}>
      {/*  TODO: fix this and pass into other wrap component */}
      <Image
        src={`https://image.tmdb.org/t/p/original/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg`}
        alt="random image"
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      {featuredMovies.data.map((movie) => (
        <div key={movie.id.toString()}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Home;
