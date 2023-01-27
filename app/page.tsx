// External or nextjs imports
import Image from "next/image";
// Internal imports
import { MoviesService } from "@services/index";
import { useBuildImageUrl } from "@hooks/index";
// Components
import { Text, Button } from "@components/atoms";
import { ReproduceSection } from "@components/molecules";

const InitialPage = () => {
  // const featuredMovies = await MoviesService.getFeaturedMovies();
  // const firstMovie = featuredMovies.data[0];

  return (
    <div className={`flex pt-20 h-100`}>
      {/*  TODO: fix this and pass into other wrap component */}
      <div className="fixed top-0 left-0 -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/original/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg`}
          alt="random image"
          height={1080}
          width={1920}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -10,
          }}
        />
      </div>
      {/* Title and reproduce section */}
      {/* <section className="absolute flex flex-col gap-2 left-10 bottom-[200px]">
        <Text variant="body1" color="text-white">
          Original de liteflix
        </Text>
        <Text variant="h1" color="text-aquaGreen">
          Megan
        </Text>
        <ReproduceSection />
      </section> */}
      {/* {featuredMovies.data.map((movie) => (
        <div key={movie.id.toString()}>{movie.title}</div>
      ))} */}
    </div>
  );
};

export default InitialPage;
