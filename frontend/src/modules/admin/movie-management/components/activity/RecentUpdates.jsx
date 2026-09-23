import { recentUpdates } from '../../data/recentUpdatesDummyData'

import ActivityCard from './ActivityCard'

const RecentUpdates = () => {
  return (
    <section
      className="
        rounded-2xl
        border
        bg-white
        p-6
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Recent Updates
        </h2>

        <p className="text-sm text-gray-500">
          Latest admin activities.
        </p>
      </div>

      <div className="space-y-4">
        {recentUpdates.map((item) => (
          <ActivityCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

export default RecentUpdates