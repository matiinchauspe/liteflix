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

// TODO: modify this later
export interface MovieTransformed {}

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

// TODO: modify this later - maybe use MovieTransformed later
export interface FeaturedTransformedResults {
  data: Movie[];
}

export interface PopularTransformedResults {
  data: Movie[];
}
