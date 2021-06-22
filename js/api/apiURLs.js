/**
 * Get genre of movies
 * @returns {string}
 */

export const getGenreURL = () => `/genre/movie/list`

/**
 * Get details of a movie
 * @param movie_id
 * @returns {string}
 */
export const getMovieDetailsURL = (movie_id) => `/movie/${movie_id}`                   //Get the primary information about a movie.
export const getMovieCreditsURL = (movie_id) => `/movie/${movie_id}/credits`           //Get the cast and crew for a movie.
export const getMovieImagesURL = (movie_id) => `/movie/${movie_id}/images`             //Get the images that belong to a movie.
export const getMovieReleaseDateURL = (movie_id) => `/movie/${movie_id}/release_dates`             //Get the release date along with the certification for a movie.
export const getMovieReviewsURL = (movie_id) => `/movie/${movie_id}/reviews`             //Get the user reviews for a movie
export const getSimilarMovieURL = (movie_id) => `/movie/${movie_id}/similar`             //Get a list of similar movies.
export const getMovieVideosURL = (movie_id) => `/movie/${movie_id}/videos`             //Get the videos that have been added to a movie.

/**
 * Get Other movie categories
 * @returns {string}
 */

export const getNowPlayingMoviesURL = () => `/movie/now_playing`             //Get a list of movies in theatres.
export const getPopularMoviesURL = () => `/movie/popular`             //Get a list of the current popular movies on TMDB. This list updates daily.
export const getUpcomingMoviesURL = () => `/movie/upcoming`             //Get a list of upcoming movies in theatres.
export const getDiscoverMovieByGenre = (genre) => `/discover/movie`             //Get a list of upcoming movies in theatres.

