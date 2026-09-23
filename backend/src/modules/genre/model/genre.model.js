import mongoose from 'mongoose'

const genreSchema =
  new mongoose.Schema(
    {
      /* DISPLAY NAME */

      name: {
        type: String,

        required: true,

        unique: true,

        trim: true,
      },

      /* SEO + ROUTING */

      slug: {
        type: String,

        required: true,

        unique: true,

        lowercase: true,

        trim: true,
      },

      /* UI COLOR */

      color: {
        type: String,

        default: '#EF4444',
      },

      /* OPTIONAL ICON */

      icon: {
        type: String,

        default: '',
      },

      /* DESCRIPTION */

      description: {
        type: String,

        default: '',
      },

      /* ACTIVE STATE */

      isActive: {
        type: Boolean,

        default: true,
      },

      /* SORTING */

      displayOrder: {
        type: Number,

        default: 0,
      },

      /* ANALYTICS */

      totalMovies: {
        type: Number,

        default: 0,
      },

      /* SEO */

      seo: {
        metaTitle: String,

        metaDescription: String,

        keywords: [String],
      },

      /* AUDIT */

      createdBy: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: 'User',
      },
    },

    {
      timestamps: true,
    }
  )

/* INDEXES */

genreSchema.index({
  name: 'text',
})

genreSchema.index({
  isActive: 1,
})

genreSchema.index({
  displayOrder: 1,
})

export const Genre =
  mongoose.model(
    'Genre',
    genreSchema
  )