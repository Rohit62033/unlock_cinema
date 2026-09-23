const castMembers = [
  {
    id: 1,
    name: 'Christopher Nolan',
    image:
      'https://i.pravatar.cc/100?img=1',
  },

  {
    id: 2,
    name: 'Cillian Murphy',
    image:
      'https://i.pravatar.cc/100?img=2',
  },

  {
    id: 3,
    name: 'Emily Blunt',
    image:
      'https://i.pravatar.cc/100?img=3',
  },
]

const QuickCastManagement = () => {
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

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Quick Cast Management
        </h2>

        <p className="text-sm text-gray-500">
          Manage featured cast members.
        </p>
      </div>

      {/* CAST LIST */}

      <div className="flex flex-wrap gap-3">
        {castMembers.map((member) => (
          <div
            key={member.id}
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              bg-gray-50
              px-3
              py-2
            "
          >
            {/* IMAGE */}

            <img
              src={member.image}
              alt={member.name}
              className="
                h-8
                w-8
                rounded-full
                object-cover
              "
            />

            {/* NAME */}

            <span className="text-sm font-medium">
              {member.name}
            </span>

            {/* REMOVE */}

            <button
              className="
                text-gray-400
                hover:text-red-500
              "
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* ACTION */}

      <button
        className="
          mt-5
          rounded-xl
          border
          border-dashed
          px-4
          py-3
          text-sm
          text-gray-500
          transition-all
          hover:border-red-400
          hover:text-red-500
        "
      >
        + Add Cast
      </button>
    </section>
  )
}

export default QuickCastManagement