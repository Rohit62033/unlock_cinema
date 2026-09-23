import { useFormContext } from 'react-hook-form'
import { IoTrashBin } from 'react-icons/io5'

const roleOptions = [
  'LEAD',
  'SUPPORTING',
  'CAMEO',
]

const CastRow = ({
  actor,
  index,
  remove,
}) => {
  const { register } =
    useFormContext()

    
  return (
    <div
      className="
        group

        flex
        flex-col
        gap-4

        rounded-md
        border
        bg-gray-50

        p-2

        transition-all
        hover:border-red-200

        md:flex-row
        md:items-center
      "
    >
      {/* DRAG */}

      <div
        className="
          hidden
          cursor-grab
          text-gray-400

          md:block
        "
      >
        ⋮⋮
      </div>

      {/* IMAGE */}

      <div
        className="
          h-12
          w-12
          overflow-hidden
          rounded-full
          border
          bg-gray-200
        "
      >
        <img
          src={actor.person.profileImage}
          alt={actor.personName}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>

      {/* PERSON */}

      <div className="flex-1">
        <input
          {...register(
            `cast.${index}.characterName`
          )}
          placeholder="Actor Name"
          className="
            w-full
            border-none
            bg-transparent
            p-0
            text-sm
            font-semibold

            outline-none
            ring-0
          "
        />

        <p
          className="
            mt-1
            text-xs
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          {actor.profession}
        </p>
      </div>

      {/* CHARACTER */}

      <div className="flex-2">
        <input
          {...register(
            `cast.${index}.characterName`
          )}
          placeholder="Character Name"
          className="
            w-full

            border-b
            border-gray-300

            bg-transparent

            px-1
            py-2

            text-sm

            outline-none
            transition-all

            focus:border-red-400
          "
        />
      </div>

      {/* ROLE */}

      <div className="w-full md:w-32">
        <select
          {...register(
            `cast.${index}.roleType`
          )}
          className="
            w-full
            rounded-lg
            border
            bg-white
            px-3
            py-2
            text-sm
          "
        >
          {roleOptions.map((role) => (
            <option
              key={role}
              value={role}
            >
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* REMOVE */}

      <button
        type="button"
        onClick={() => remove(index)}
        className="
          text-gray-400
          transition-all
          hover:text-red-500
        "
      >
        <IoTrashBin />

      </button>
    </div>
  )
}

export default CastRow