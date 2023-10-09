import { configureStore } from '@reduxjs/toolkit'
import movieImagesReducer from './movies/imagesSlice'
import topRatedMoviesReducer from './movies/topRatedSlice'
import trendingMoviesReducer from './trending/moviesSlice'
import trendingTvShowsReducer from './trending/tvShowsSlice'
import upcomingMoviesReducer from './movies/upcomingSlice'
import movieVideosReducer from './movies/videosSlice'
import onTheAirTvShowsReducer from './tvShows/onTheAirSlice'
import popularMoviesReducer from './movies/popularSlice'
import popularTvShowsReducer from './tvShows/popularSlice'
import popularPeopleReducer from './people/popularSlice'
import multiSearchReducer from './search/multiSlice'
import movieSearchReducer from './search/movieSlice'
import tvShowSearchReducer from './search/tvShowSlice'
import personSearchReducer from './search/personSlice'
import multiBarSearchReducer from './search/multiBarSlice'
import movieDetailsReducer from './movies/detailsSlice'
import movieExternalLinksReducer from './movies/externalLinksSlice'
import movieCreditsReducer from './movies/creditsSlice'
import movieReviewsReducer from './movies/reviewsSice'
import similarMoviesReducer from './movies/similarSlice'
import personDetailsReducer from './people/detailsSlice'
import personExternalLinksReducer from './people/externalLinksSlice'
import personCombinedCreditsReducer from './people/combinedCreditsSlice'
import personImagesReducer from './people/imagesSlice'
import tvShowDetailsReducer from './tvShows/detailsSlice'

export default configureStore({
  reducer: {
    movieImages: movieImagesReducer,
    movieTopRated: topRatedMoviesReducer,
    trendingMovies: trendingMoviesReducer,
    trendingTvShows: trendingTvShowsReducer,
    upcomingMovies: upcomingMoviesReducer,
    movieVideos: movieVideosReducer,
    onTheAirTvShows: onTheAirTvShowsReducer,
    popularMovies: popularMoviesReducer,
    popularTvShows: popularTvShowsReducer,
    popularPeople: popularPeopleReducer,
    multiSearch: multiSearchReducer,
    movieSearch: movieSearchReducer,
    tvShowSearch: tvShowSearchReducer,
    personSearch: personSearchReducer,
    multiBarSearch: multiBarSearchReducer,
    movieDetails: movieDetailsReducer,
    movieExternalLinks: movieExternalLinksReducer,
    movieCredits: movieCreditsReducer,
    movieReviews: movieReviewsReducer,
    similarMovies: similarMoviesReducer,
    personDetails: personDetailsReducer,
    personExternalLinks: personExternalLinksReducer,
    personCombinedCredits: personCombinedCreditsReducer,
    personImages: personImagesReducer,
    tvShowDetails: tvShowDetailsReducer

  },
})