import { Genre }
  from '../model/genre.model.js'

export const genreRepository = {

  createGenre:
    async (payload) => {

      return Genre.create(
        payload
      )
    },

  findGenreBySlug:
    async (slug) => {

      return Genre.findOne({
        slug
      })
    },

  findGenreById:
    async (genreId) => {

      return Genre.findById(
        genreId
      )
    },

  getGenres:
    async () => {

      return Genre.find({

        isActive: true,


      }).sort({

        displayOrder: 1,
      }).limit(20)
    },

  updateGenre:
    async (
      genreId,
      payload
    ) => {

      return Genre.findByIdAndUpdate(

        genreId,

        payload,

        {
          new: true,
        }
      )
    },

  softDeleteGenre:
    async (genreId) => {

      return Genre.findByIdAndUpdate(

        genreId,

        {
          isActive: false,
        },

        {
          new: true,
        }
      )
    },
  getGenresNameById:
    async (genres) => {
      return Genre.find({
        _id: { $in: genres }
      }).select(name)
    }
}