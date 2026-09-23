import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    description: {
      type: String
    },
    genres: [

      {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: 'Genre',
      }
    ],
    languages: [
      {
        type: String,
        required: true
      }
    ],
    subtitleLanguages: [

      {
        type: String
      }
    ],
    duration: {
      type: Number,
      required: true
    },
    releaseDate: {
      type: Date,
      required: true
    },
    poster: {
      url: String,
      public_id: String,
    },
    banner: {
      url: String,
      public_id: String
    },
    certification: {
      type: String // U, UA, A
    },
    formats: [
      {
        type: String
      }
    ],
    status: {
      type: String,

      enum: [
        'DRAFT',
        'LIVE',
        'ARCHIVED'
      ],

      default: 'DRAFT'
    },

    publishedAt: {
      type: Date,
      default: null
    },
    updatedAt: {
      type: Date,
      default: null
    },

    averageRating: {
      type: Number,
      default: 0
    },

    totalReviews: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }, 
    isDeleted: {
      type: Boolean,
      default: false
    },

    deletedAt: {
      type: Date,
      default: null
    },
  },

  { timestamps: true }

)

movieSchema.index({
  title: 'text',
  description: 'text',
})

movieSchema.index({
  slug: 1,
})

movieSchema.index({
  status: 1,
})

movieSchema.index({
  genres: 1,
})

movieSchema.index({
  releaseDate: -1,
})

export const Movie = mongoose.model("Movie", movieSchema)

















// const movieSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true
//     },
//     description: {
//       type: String
//     },
//     genres: [
//       { type: String }
//     ],
//     languages: [
//       {
//         type: String,
//         required: true
//       }
//     ],
//     duration: {
//       type: Number,
//       required: true
//     },
//     releaseDate: {
//       type: Date,
//       required: true
//     },
//     poster: {
//       url: String,
//       public_id: String,
//     },
//     banner: {
//       url: String,
//       public_id: String
//     },
//     certification: {
//       type: String // U, UA, A
//     },
//     formats: [
//       {
//         type: String
//       }
//     ],

//     averageRating: {
//       type: Number,
//       default: 0
//     },

//     totalReviews: {
//       type: Number,
//       default: 0
//     },
//     isActive: {
//       type: Boolean,
//       default: true
//     },
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true
//     }
//   },

//   { timestamps: true }

// )