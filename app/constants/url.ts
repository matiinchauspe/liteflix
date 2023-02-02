export const API_KEY = process.env.MOVIE_DB_API_KEY;
export const BASE_EXTERNAL_URL = process.env.BASE_EXTERNAL_URL;
export const BASE_LITEFLIX_API_URL = process.env.BASE_LITEFLIX_API_URL;

// Movie urls
export const FEATURED_MOVIES_URL = `${BASE_EXTERNAL_URL}movie/now_playing?api_key=${API_KEY}`;
export const POPULAR_MOVIES_URL = `${BASE_EXTERNAL_URL}movie/popular?api_key=${API_KEY}`;

// Liteflix-API url
export const UPLOAD_MOVIE_URL = `${BASE_LITEFLIX_API_URL}/upload-movie`;

// Image base url
export const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;
