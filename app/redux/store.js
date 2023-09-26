import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './movies/imagesSlice'
import topRatedReducer from './movies/topRatedSlice'
import moviesReducer from './trending/moviesSlice'
import tvShowsReducer from './trending/tvShowsSlice'
export default configureStore({
  reducer: {
    movieImages: imagesReducer,
    movieTopRated: topRatedReducer,
    trendingMovies: moviesReducer,
    trendingTvShows: tvShowsReducer,
  },
})