import { useFormContext } from 'react-hook-form'

const statuses = [
  {
    label: 'Draft',
    value: 'DRAFT',
    styles:
      'border-gray-300 hover:border-gray-500',
  },

  {
    label: 'Live',
    value: 'LIVE',
    styles:
      'border-green-500 bg-green-50 text-green-700',
  },

  {
    label: 'Archived',
    value: 'ARCHIVED',
    styles:
      'border-red-500 bg-red-50 text-red-600',
  },
]

const statusBadgeStyles = {
  LIVE:
    'bg-green-100 text-green-700',

  DRAFT:
    'bg-yellow-100 text-yellow-700',

  ARCHIVED:
    'bg-red-100 text-red-700',
}

const PublishingStatusSection = () => {
  const {
    watch,
    setValue,
    formState: { isSubmitting },
  } = useFormContext()

  const status = watch('status')

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
        <span>🌍</span>

        <h2 className="text-lg font-semibold">
          Publishing Status
        </h2>
      </div>

      {/* CURRENT STATUS */}

      <div className="space-y-4">
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <p className="text-sm text-gray-500">
            Current Status
          </p>

          <span
            className={`
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold

              ${statusBadgeStyles[
              status
              ]
              }
            `}
          >
            {status}
          </span>
        </div>

        {/* LAST EDIT */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <p className="text-sm text-gray-500">
            Last Edited
          </p>

          <p
            className="
              text-xs
              text-gray-400
            "
          >
            2026-05-23 14:30
          </p>
        </div>
      </div>

      {/* WORKFLOW */}

      <div className="mt-6 space-y-3">
        {statuses.map((item) => {
          const active =
            status === item.value

          return (
            <button
              key={item.value}
              type="button"
              onClick={() =>
                setValue(
                  'status',
                  item.value
                )
              }
              className={`
                flex
                w-full
                items-center
                justify-between

                rounded-xl
                border

                px-4
                py-3

                transition-all

                ${active
                  ? item.styles
                  : 'hover:bg-gray-50'
                }
              `}
            >
              <span className="font-medium">
                {item.label}
              </span>

              {active && (
                <span>✓</span>
              )}
            </button>
          )
        })}
      </div>

      {/* ACTIONS */}

      <div
        className="
          mt-6
          flex
          gap-3
          border-t
          pt-5
        "
      >



      </div>
    </section>
  )
}

export default PublishingStatusSection