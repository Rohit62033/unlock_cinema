const MediaUploadCard = ({
  title,
  image,
  aspect,
  onChange,
}) => {
  const handleFileChange = (
    event
  ) => {
    const file =
      event.target.files?.[0]

    if (!file) return

    const url =
      URL.createObjectURL(file)

    onChange({
      file,
      url,
    })
  }

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        bg-gray-100
        group

        ${aspect}
      `}
    >
      {/* IMAGE */}

      {image ? (
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
          "
        />
      ) : (
        <div
          className="
            flex
            h-full
            items-center
            justify-center
            text-gray-400
          "
        >
          No Image
        </div>
      )}

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center
          gap-3

          bg-black/40

          opacity-0
          transition-opacity

          group-hover:opacity-100
        "
      >
        {/* EDIT */}

        <label
          className="
            cursor-pointer
            rounded-full
            bg-white
            p-3
          "
        >
          ✏️

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={
              handleFileChange
            }
          />
        </label>

        {/* DELETE */}

        <button
          type="button"
          onClick={() =>
            onChange({
              file: null,
              url: '',
            })
          }
          className="
            rounded-full
            bg-white
            p-3
          "
        >
          🗑️
        </button>
      </div>

      {/* LABEL */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          bg-linear-to-t
          from-black/80
          to-transparent

          p-4
        "
      >
        <p
          className="
            text-sm
            font-medium
            text-white
          "
        >
          {title}
        </p>
      </div>
    </div>
  )
}

export default MediaUploadCard