export interface Movie {
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
}

export interface MovieTransformed {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  popularity: number;
  vote_average: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}

export interface FeaturedResponse {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface PopularResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface FeaturedTransformedResults {
  data: MovieTransformed[];
}

export interface PopularTransformedResults {
  data: MovieTransformed[];
}
