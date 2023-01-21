import { OPTIONS_KEY_MAP } from "@constants/menu";

// NOTE: This is a sample, you can add more languages and use them with a library like i18next, react-intl, etc.

export const Transcript = {
  es: {
    home: {
      menu: {
        options: {
          [OPTIONS_KEY_MAP.HOME]: "Inicio",
          [OPTIONS_KEY_MAP.SERIES]: "Series",
          [OPTIONS_KEY_MAP.MOVIES]: "Peliculas",
          [OPTIONS_KEY_MAP.ADDED_RECENTLY]: "Agregadas recientemente",
          [OPTIONS_KEY_MAP.POPULAR]: "Populares",
          [OPTIONS_KEY_MAP.MY_MOVIES]: "Mis peliculas",
          [OPTIONS_KEY_MAP.MY_LIST]: "Mi lista",
          [OPTIONS_KEY_MAP.ADD_MOVIE]: "Agregar pelicula",
          [OPTIONS_KEY_MAP.CLOSE_SESSION]: "Cerrar sesion",
        },
      },
    },
  },
};

export default Transcript;
