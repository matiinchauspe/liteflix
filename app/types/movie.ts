export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieTransformed = {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  popularity: number;
  vote_average: number;
};

export type MyMovie = {
  id: string;
  title: string;
  image: {
    data: {
      type: string;
      data: Buffer;
    };
    contentType: string;
  };
  updatedAt: string;
};

export type MyMovieTransformed = {
  id: string;
  title: string;
  image: string;
  vote_average: number;
  date: string;
};

type Dates = {
  maximum: string;
  minimum: string;
};

export type FeaturedResponse = {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type PopularResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MyMoviesResponse = {
  status: number;
  data: MyMovie[];
};

export type FeaturedTransformedResults = {
  data: MovieTransformed[];
};

export type PopularTransformedResults = {
  data: MovieTransformed[];
};

export type MyMoviesTransformedResults = {
  data: MyMovieTransformed[];
};
