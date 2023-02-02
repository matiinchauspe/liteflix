// pass this to the env file
export const API_KEY = "6f26fd536dd6192ec8a57e94141f8b20";
export const BASE_EXTERNAL_URL = "https://api.themoviedb.org/3/";
export const BASE_LITEFLIX_API_URL = "https://liteflix-api.vercel.app/api/v1/movies";

// Movie urls
export const FEATURED_MOVIES_URL = `${BASE_EXTERNAL_URL}movie/now_playing?api_key=${API_KEY}`;
export const POPULAR_MOVIES_URL = `${BASE_EXTERNAL_URL}movie/popular?api_key=${API_KEY}`;

// Liteflix-API url
export const UPLOAD_MOVIE_URL = `${BASE_LITEFLIX_API_URL}/upload-movie`;

// Image base url
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
