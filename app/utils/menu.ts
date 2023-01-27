import { PATH_NAMES } from "@constants/routes.constants";

interface Keys {
  [key: string]: {
    name: string;
    path: string;
    disabled: boolean;
  };
}

export const OPTIONS_KEY_MAP: Keys = {
  HOME: {
    name: "home",
    path: PATH_NAMES.HOME,
    disabled: false,
  },
  SERIES: {
    name: "series",
    path: PATH_NAMES.SERIES,
    disabled: true,
  },
  MOVIES: {
    name: "movies",
    path: PATH_NAMES.MOVIES,
    disabled: true,
  },
  ADDED_RECENTLY: {
    name: "`added_recently",
    path: PATH_NAMES.ADDED_RECENTLY,
    disabled: true,
  },
  POPULAR: {
    name: "popular",
    path: PATH_NAMES.POPULAR,
    disabled: true,
  },
  MY_MOVIES: {
    name: "my_movies",
    path: PATH_NAMES.MY_MOVIES,
    disabled: true,
  },
  MY_LIST: {
    name: "my_list",
    path: PATH_NAMES.MY_LIST,
    disabled: true,
  },
  ADD_MOVIE: {
    name: "add_movie",
    path: PATH_NAMES.ADD_MOVIE,
    disabled: false,
  },
  CLOSE_SESSION: {
    name: "close_session",
    path: "/close_session",
    disabled: true,
  },
};
