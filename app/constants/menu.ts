type Keys = {
  [key: string]: {
    name: string;
    path: string;
    disabled: boolean;
  };
}

export const OPTIONS_KEY_MAP: Keys = {
  HOME: {
    name: "home",
    path: "/",
    disabled: false,
  },
  SERIES: {
    name: "series",
    path: "/series",
    disabled: true,
  },
  MOVIES: {
    name: "movies",
    path: "/movies",
    disabled: true,
  },
  ADDED_RECENTLY: {
    name: "`added_recently",
    path: "/added_recently",
    disabled: true,
  },
  POPULAR: {
    name: "popular",
    path: "/popular",
    disabled: true,
  },
  MY_MOVIES: {
    name: "my_movies",
    path: "/my_movies",
    disabled: true,
  },
  MY_LIST: {
    name: "my_list",
    path: "/my_list",
    disabled: true,
  },
  ADD_MOVIE: {
    name: "add_movie",
    path: "/add_movie",
    disabled: false,
  },
  CLOSE_SESSION: {
    name: "close_session",
    path: "/close_session",
    disabled: true,
  },
};
