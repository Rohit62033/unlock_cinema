const ActivityCard = ({
  item,
}) => {
  return (
    <div
      className="
        flex
        gap-4
        rounded-xl
        border
        p-4
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-red-50
          text-red-500
        "
      >
        🎬
      </div>

      {/* CONTENT */}

      <div className="flex-1">
        <h3 className="font-semibold">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500">
          {item.description}
        </p>
      </div>

      {/* TIME */}

      <p
        className="
          text-xs
          text-gray-400
        "
      >
        {item.time}
      </p>
    </div>
  )
}

export default ActivityCard