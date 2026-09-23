import {
  useFormContext,
} from 'react-hook-form'

const languages = [
  'English',
  'Hindi',
  'Spanish',
  'French',
  'Japanese',
  'Korean',
  'Tamil',
  'Telugu',
]

const LanguageChip = ({
  label,
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
      <span
        className="
          text-xs
          font-medium
        "
      >
        {label}
      </span>

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

const LanguageSelector = ({
  title,
  value,
  onAdd,
  onRemove,
}) => {
  return (
    <div>
      {/* LABEL */}

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
        {title}
      </label>

      {/* CHIPS */}

      <div
        className="
          mb-3
          flex
          flex-wrap
          gap-2
        "
      >
        {value.map((language) => (
          <LanguageChip
            key={language}
            label={language}
            onRemove={() =>
              onRemove(language)
            }
          />
        ))}
      </div>

      {/* SELECT */}

      <select
        onChange={(event) => {
          if (!event.target.value)
            return

          onAdd(event.target.value)

          event.target.value = ''
        }}
        className="
          w-full

          rounded-xl
          border

          px-4
          py-3

          text-sm

          outline-none

          focus:border-red-400
        "
      >
        <option value="">
          Add Language
        </option>

        {languages.map((language) => (
          <option
            key={language}
            value={language}
          >
            {language}
          </option>
        ))}
      </select>
    </div>
  )
}

const MovieLanguageSection = () => {
  const {
    watch,
    setValue,
    register,
  } = useFormContext()

  const audioLanguages =
    watch('languages') || []

  const subtitleLanguages =
    watch(
      'subtitleLanguages'
    ) || []

  const addLanguage = (
    field,
    value
  ) => {
    const current =
      watch(field) || []

    if (current.includes(value))
      return

    setValue(

      field,

      [
        ...current,
        value,
      ],

      {

        shouldDirty: true,

        shouldTouch: true,

        shouldValidate: true,
      }
    )
  }

  const removeLanguage = (
    field,
    value
  ) => {
    const current =
      watch(field) || []

    setValue(

  field,

  current.filter(
    (item) => item !== value
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
        <span>🌐</span>

        <h2 className="text-lg font-semibold">
          Language Settings
        </h2>
      </div>

      <div className="space-y-6">
        {/* PRIMARY */}

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
            Primary Language
          </label>

          <select
            {...register(
              'primaryLanguage'
            )}
            className="
              w-full

              rounded-xl
              border

              px-4
              py-3

              outline-none

              focus:border-red-400
            "
          >
            {languages.map(
              (language) => (
                <option
                  key={language}
                  value={language}
                >
                  {language}
                </option>
              )
            )}
          </select>
        </div>

        {/* AUDIO */}

        <LanguageSelector
          title="Audio Languages"
          value={audioLanguages}
          onAdd={(value) =>
            addLanguage(
              'languages',
              value
            )
          }
          onRemove={(value) =>
            removeLanguage(
              'languages',
              value
            )
          }
        />

        {/* SUBTITLES */}

        <LanguageSelector
          title="Subtitle Languages"
          value={
            subtitleLanguages
          }
          onAdd={(value) =>
            addLanguage(
              'subtitleLanguages',
              value
            )
          }
          onRemove={(value) =>
            removeLanguage(
              'subtitleLanguages',
              value
            )
          }
        />
      </div>
    </section>
  )
}

export default MovieLanguageSection