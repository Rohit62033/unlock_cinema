import { useFormContext } from 'react-hook-form'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const BasicInformationSection = () => {
  const { register } =
    useFormContext()




  return (
    <section
      className="
        rounded-2xl
        border
        bg-white
        p-6
      "
    >
      <div
        className="
          mb-6
          flex
          items-center
          gap-2
          border-b
          pb-4
        "
      >
        <span><IoIosInformationCircleOutline size={23} /></span>

        <h2 className="text-xl font-semibold">
          Basic Information
        </h2>
      </div>

      <div className="space-y-6">
        {/* TITLE */}

        <div>
          <label
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-gray-500
            "
          >
            Movie Title
          </label>

          <input
            {...register('title')}
            className="
              w-full
              rounded-xl
              border
              px-4
              py-3
            "
          />
        </div>

        {/* DESCRIPTION */}

        <div>
          <label
            className="
              mb-2
              block
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-gray-500
            "
          >
            Description
          </label>

          <textarea
            {...register(
              'description'
            )}
            rows={5}
            className="
              w-full
              rounded-xl
              border
              px-4
              py-3
            "
          />
        </div>

        {/* ROW */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          <div>
            <label
              className="
                mb-2
                block
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-gray-500
              "
            >
              Duration
            </label>

            <input
              type="number"
              {...register(
                'duration',

                {
                  valueAsNumber: true,
                }
              )}
              className="
                w-full
                rounded-xl
                border
                px-4
                py-3
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2
                block
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-gray-500
              "
            >
              Release Date
            </label>

            <input
              type="date"
              {...register(
                'releaseDate'
              )}
              className="
                w-full
                rounded-xl
                border
                px-4
                py-3
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicInformationSection