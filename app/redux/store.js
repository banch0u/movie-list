import { configureStore } from '@reduxjs/toolkit'
import movieImagesReducer from './movies/imagesSlice'
import topRatedMoviesReducer from './movies/topRatedSlice'
import trendingMoviesReducer from './trending/moviesSlice'
import trendingTvShowsReducer from './trending/tvShowsSlice'
import upcomingMoviesReducer from './movies/upcomingSlice'
import movieVideosReducer from './movies/videosSlice'
import onTheAirTvShowsReducer from './tvShows/onTheAirSlice'
export default configureStore({
  reducer: {
    movieImages: movieImagesReducer,
    movieTopRated: topRatedMoviesReducer,
    trendingMovies: trendingMoviesReducer,
    trendingTvShows: trendingTvShowsReducer,
    upcomingMovies: upcomingMoviesReducer,
    movieVideos: movieVideosReducer,
    onTheAirTvShows: onTheAirTvShowsReducer,
  },
})