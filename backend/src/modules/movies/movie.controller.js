import { HTTP_STATUS } from '../../constants/httpStatus.js'
import * as movieService from './movie.service.js'

export const createMovie = async (req, res, next) => {
  try {
    const movie = await movieService.createMovie(req.user._id, req.body)

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      data: movie
    })
  } catch (error) {
    next(error)
  }
}
 
export const getMovies = async (req, res, next) => {
  try {
    const response = await movieService.getMovies(req.query)

    res.status(HTTP_STATUS.OK).json({
      success: true,
      movies:response.movies,
      totalMovies:response.totalMovies,
      page:response.page,
      totalPages:response.totalPage
    })
  } catch (error) {
    next(error)
  }
}

export const updateMovie = async (req, res, next) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body)
    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: movie
    })
  } catch (error) {
    next(error)
  }
}

export const getMovieById = async (req, res, next) => {
  try {

    const { id } = req.params
    const movie = await movieService.getMovieById(id)

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: movie
    })
  } catch (error) {
    next(error)
  }
}

export const deleteMovie = async (req, res, next) => {
  try {
    await movieService.deleteMovie(req.params.id)

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: "Movie deleted successfully"
    })
  } catch (error) {
    next(error)
  }
}

export const getTrendingMovies = async (req, res, next) => {
  try {
    const movies = movieService.getTrendingMovies()

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: movies
    })
  } catch (error) {
    next(error)
  }
}

export const getTrendingSearch = async (req, res, next) => {
  try {
    const trendingSearch = await movieService.getTrendingSearchService()

    return res.status(HTTP_STATUS.OK).json({
      success: true,
      trendingSearch
    })
  } catch (error) {
    next(error)
  }
}

export const searchMovies = async (req, res, next) => {
  try {
    const { q } = req.query

    if (!q) {return res.status(401).json({ message: 'Query required' })}

  const result = await movieService.searchMoviesService(q)

  res.json(result)

  } catch (error) {
    next(error)
  }
}

export const getMovieDetails =
  async (
    req,
    res,
    next
  ) => {

    try {

      const { movieId } =
        req.params;

      const data =
        await movieService.getMovieDetailsService(
          movieId
        );

      res.status(200).json({
        success: true,
        data,
      });

    } catch (error) {
      next(error);
    }
  };