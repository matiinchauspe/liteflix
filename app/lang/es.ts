import { OPTIONS_KEY_MAP } from "@utils/menu";

export const Transcript = {
  es: {
    home: {
      menu: {
        options: {
          [OPTIONS_KEY_MAP.HOME.name]: "Inicio",
          [OPTIONS_KEY_MAP.SERIES.name]: "Series",
          [OPTIONS_KEY_MAP.MOVIES.name]: "Peliculas",
          [OPTIONS_KEY_MAP.ADDED_RECENTLY.name]: "Agregadas recientemente",
          [OPTIONS_KEY_MAP.POPULAR.name]: "Populares",
          [OPTIONS_KEY_MAP.MY_MOVIES.name]: "Mis peliculas",
          [OPTIONS_KEY_MAP.MY_LIST.name]: "Mi lista",
          [OPTIONS_KEY_MAP.ADD_MOVIE.name]: "Agregar película",
          [OPTIONS_KEY_MAP.CLOSE_SESSION.name]: "Cerrar sesion",
        },
      },
      infoActions: {
        by: "Original de",
        actions: {
          play: "Reproducir",
          myList: "Mi lista",
        },
      },
      movies: {
        label: "Ver:",
      },
    },
    addMovie: {
      form: {
        dropzone: {
          title: "Agrega un archivo o arrastralo y soltalo aqui",
        },
        inputPlaceholder: "Título",
        error: "Error, no se pudo cargar la película",
        loadingText: "Cargado",
        successText: "Listo!",
        retryText: "Reintentar",
        actions: {
          submit: "Subir película",
          change: "Cambiar",
        },
      },
      successNotice: 'La película fue subida correctamente',
      errorNotice: 'Hubo un error al subir la película',
    },
    global: {
      addMovie: "Agregar película",
      liteflix: "Liteflix",
      goHome: "Ir al home",
    },
  },
};

export default Transcript;
