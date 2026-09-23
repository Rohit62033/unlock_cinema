import {
  useFormContext,
} from 'react-hook-form'
import { useGenres } from '../../hooks/useGenres'

// const availableGenres = [
//   {
//     _id: '6a11a535b6fafb2d4f8b5c90',

//     name: 'Sci-Fi',

//     slug: 'sci-fi',

//     color: '#3B82F6',
//   },

//   {
//     _id: '6a11a7d2b6fafb2d4f8b5cac',

//     name: 'Thriller',

//     slug: 'thriller',

//     color: '#EF4444',
//   },

//   {
//     _id: '6a154bb749d09683385cea43',

//     name: 'Drama',

//     slug: 'drama',

//     color: '#F59E0B',
//   },

//   {
//     _id: '6a11a92db6fafb2d4f8b5d55',

//     name: 'Comedy',

//     slug: 'comedy',

//     color: '#22C55E',
//   },
// ]

const certifications = [
  'U',
  'UA',
  'A',
]

const GenreChip = ({
  genre,
  onRemove,
}) => {
  return (
    <div
      className="
        flex
        items-center
        gap-2

        rounded-full

        bg-gray-100

        px-3
        py-1.5
      "
    >
      {/* COLOR */}

      <div
        style={{
          backgroundColor:
            genre.color,
        }}
        className="
          h-3
          w-3
          rounded-full
        "
      />

      {/* NAME */}

      <span
        style={{
          color:
            genre.color,
        }}
        className="
          text-xs
          font-medium
        "
      >
        {genre.name}
      </span>

      {/* REMOVE */}

      <button
        type="button"
        onClick={onRemove}
        className="
          text-gray-400
          hover:text-red-500
        "
      >
        ✕
      </button>
    </div>
  )
}

const ClassificationSection = () => {
  const {
    watch,
    setValue,
    register,
  } = useFormContext()

  const genres =
    watch('genres') || []

  const {
    data: availableGenres = [],

    isLoading,
  } = useGenres()

  /*
    UI DERIVES FULL OBJECTS
    FROM IDS
  */

  const selectedGenres =
    genres

      .map((genreId) =>
        availableGenres.find(
          (genre) =>
            genre.id ===
            genreId
        )
      )

      .filter(Boolean)

  /* ADD GENRE */

  const addGenre =
    (genreId) => {

      const exists =
        genres.includes(
          genreId
        )

      if (exists) return

      setValue(

        'genres',

        [...genres, genreId],

        {

          shouldDirty: true,

          shouldTouch: true,

          shouldValidate: true,
        }
      )
    }

  /* REMOVE GENRE */

  const removeGenre =
    (genreId) => {

      setValue(

        'genres',

        genres.filter(
          (id) => id !== genreId
        ),

        {

          shouldDirty: true,

          shouldTouch: true,

          shouldValidate: true,
        }
      )
    }

  return (
    <section
      className="
        rounded-2xl
        border
        bg-white
        p-6
      "
    >
      {/* HEADER */}

      <div
        className="
          mb-5
          flex
          items-center
          gap-2
        "
      >
        <span>🏷️</span>

        <h2 className="text-lg font-semibold">
          Classification
        </h2>
      </div>

      <div className="space-y-6">
        {/* GENRES */}

        <div>
          <label
            className="
              mb-3
              block
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-gray-500
            "
          >
            Genres
          </label>

          {/* CHIPS */}

          <div
            className="
              mb-4
              flex
              flex-wrap
              gap-2
            "
          >
            {selectedGenres.map(
              (genre) => (
                <GenreChip
                  key={genre.id}
                  genre={genre}
                  onRemove={() =>
                    removeGenre(
                      genre.id
                    )
                  }
                />
              )
            )}

            {/* ADD SELECT */}

            <div className="relative">
              <select
                defaultValue=""

                onChange={(
                  event
                ) => {

                  const genreId =
                    event.target.value

                  if (!genreId)
                    return

                  addGenre(
                    genreId
                  )

                  /*
                    RESET SELECT
                  */

                  event.target.value =
                    ''
                }}

                className="
                  rounded-full

                  border
                  border-dashed

                  bg-white

                  px-3
                  py-1.5

                  text-xs

                  outline-none

                  hover:border-red-400
                "
              >
                <option value="">
                  + Add
                </option>

                {availableGenres.map(
                  (genre) => (

                    <option
                      key={
                        genre.id
                      }

                      value={
                        genre.id
                      }
                    >
                      {genre.name}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>

        {/* CERTIFICATION */}

        <div>
          <label
            className="
              mb-3
              block
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-gray-500
            "
          >
            Certification
          </label>

          <select
            {...register(
              'certification'
            )}

            className="
              w-full

              rounded-xl
              border

              px-4
              py-3

              outline-none

              transition-all

              focus:border-red-400
            "
          >
            {certifications.map(
              (
                certification
              ) => (
                <option
                  key={
                    certification
                  }

                  value={
                    certification
                  }
                >
                  {certification}
                </option>
              )
            )}
          </select>
        </div>
      </div>
    </section>
  )
}

export default ClassificationSection