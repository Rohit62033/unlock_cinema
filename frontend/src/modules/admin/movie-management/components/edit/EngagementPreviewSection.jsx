import { GoGraph } from "react-icons/go";

const EngagementPreviewSection = () => {
  const engagementScore = 75

  const performance = 'Strong'

  const growth = '+12.5%'

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
          justify-between
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <span><GoGraph />
</span>

          <h2 className="text-lg font-semibold">
            Engagement Preview
          </h2>
        </div>

        {/* GROWTH */}

        <span
          className="
            rounded-full
            bg-green-100
            px-3
            py-1

            text-xs
            font-semibold
            text-green-700
          "
        >
          {growth}
        </span>
      </div>

      {/* PROGRESS */}

      <div className="mb-4">
        <div
          className="
            h-3
            overflow-hidden
            rounded-full
            bg-gray-100
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-red-500
              transition-all
            "
            style={{
              width: `${engagementScore}%`,
            }}
          />
        </div>
      </div>

      {/* SCORE */}

      <div
        className="
          mb-3
          flex
          items-center
          justify-between
        "
      >
        <p className="text-sm text-gray-500">
          Audience Interest
        </p>

        <p className="text-sm font-semibold">
          {engagementScore}%
        </p>
      </div>

      {/* INSIGHT */}

      <div
        className="
          rounded-xl
          bg-gray-50
          p-4
        "
      >
        <p
          className="
            text-sm
            leading-6
            text-gray-600
          "
        >
          Ticket conversion strength:{' '}
          <span
            className="
              font-semibold
              text-black
            "
          >
            {performance}
          </span>
        </p>

        <p
          className="
            mt-2
            text-xs
            text-gray-400
          "
        >
          Based on current genre trends,
          cast popularity, and engagement
          metrics.
        </p>
      </div>
    </section>
  )
}

export default EngagementPreviewSection