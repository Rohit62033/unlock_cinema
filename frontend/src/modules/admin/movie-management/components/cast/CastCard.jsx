import { useFormContext } from 'react-hook-form'

const CastCard = ({
  actor,
  index,
  remove,
}) => {
  const { register } =
    useFormContext()

  return (
    <div
      className="
        rounded-2xl
        border
        bg-gray-50
        p-5
      "
    >
      {/* IMAGE */}

      <img
        src={actor.image}
        alt="actor"
        className="
          mb-4
          h-48
          w-full
          rounded-xl
          object-cover
        "
      />

      {/* FORM */}

      <div className="space-y-4">
        <input
          {...register(
            `cast.${index}.personName`
          )}
          placeholder="Actor Name"
          className="
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
          "
        />

        <input
          {...register(
            `cast.${index}.characterName`
          )}
          placeholder="Character Name"
          className="
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
          "
        />

        <select
          {...register(
            `cast.${index}.roleType`
          )}
          className="
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
          "
        >
          <option value="LEAD">
            Lead
          </option>

          <option value="SUPPORTING">
            Supporting
          </option>

          <option value="CAMEO">
            Cameo
          </option>
        </select>

        <button
          type="button"
          onClick={() => remove(index)}
          className="
            w-full
            rounded-xl
            border
            border-red-500
            py-3
            text-red-500
          "
        >
          Remove Actor
        </button>
      </div>
    </div>
  )
}

export default CastCard