import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './movies/imagesSlice'
import topRatedReducer from './movies/topRatedSlice'
export default configureStore({
  reducer: {
    movieImages: imagesReducer,
    movieTopRated: topRatedReducer
  },
})