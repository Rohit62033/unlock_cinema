import TopNavbar from "@/components/layout/admin/TopNavbar";
import { useState } from "react";
import { IoIosTrendingUp } from "react-icons/io";
import TopHeader from "../shared/layout/components/TopHeader";

const recentBookings = [
  {
    id: "#BK-9021",
    customer: "Alex Smith",
    movie: "Interstellar",
    seats: "H12, H13",
    status: "Confirmed",
  },
  {
    id: "#BK-9018",
    customer: "Maya Williams",
    movie: "Deep Sea Echo",
    seats: "A5",
    status: "Pending",
  },
  {
    id: "#BK-8995",
    customer: "James Knight",
    movie: "Cyberpunk 2099",
    seats: "D10, D11",
    status: "Cancelled",
  },
];

const trendingMovies = [
  {
    id: 1,
    title: "Interstellar",
    occupancy: 85,
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500",
  },
  {
    id: 2,
    title: "Deep Sea Echo",
    occupancy: 72,
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=500",
  },
  {
    id: 3,
    title: "Cyberpunk 2099",
    occupancy: 91,
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=500",
  },
];


const DashboardPage = () => {

  const [search, setSearch] =
    useState('')

  return (
   <>
      {/* <TopNavbar searchPlaceholder='Search movies, booking, or resources'
        searchValue={search}
        onSearchChange={setSearch} /> */}

        <TopHeader/>
    <div className="p-6 overflow-auto flex-1 bg-slate-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-end mb-8">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Operational Overview
          </h2>

          <p className="text-slate-500 mt-1">
            Live performance data for Oct 24, 2026
          </p>
        </div>

        <div className="flex gap-3">

          <button
            className="
              bg-white
              border border-slate-200
              px-4 py-2
              rounded-xl
              text-sm font-medium
              hover:bg-slate-50
              transition-all
            "
          >
            Last 24 Hours
          </button>

          <button
            className="
              bg-rose-600
              text-white
              px-4 py-2
              rounded-xl
              text-sm font-medium
              hover:bg-rose-700
              transition-all
            "
          >
            Export Report
          </button>

        </div>
      </div>

      {/* STATS */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-8
        "
      >

        {/* CARD */}
        <div
          className="
            bg-white
            border border-slate-200
            p-6
            rounded-2xl
            shadow-sm
          "
        >

          <div className="flex justify-between items-start mb-4">

            <div
              className="
                w-12 h-12 text-xl
                rounded-xl
                bg-emerald-100
                flex items-center justify-center
              "
            >
              🎟️

            </div>

            <span className="text-green-600 text-sm font-medium">
              +12.5%
            </span>

          </div>

          <h3 className="text-slate-500 text-sm mb-1">
            Total Bookings
          </h3>

          <p className="text-3xl font-bold text-slate-900">
            2,482
          </p>

        </div>

        {/* CARD */}
        <div
          className="
            bg-white
            border border-slate-200
            p-6
            rounded-2xl
            shadow-sm
          "
        >

          <div className="flex justify-between items-start mb-4">

            <div
              className="
                w-12 h-12 text-xl 
                rounded-xl
                bg-rose-100
                flex items-center justify-center
              "
            >
              💳
            </div>

            <span className="text-green-600 text-sm font-medium">
              +8.2%
            </span>

          </div>

          <h3 className="text-slate-500 text-sm mb-1">
            Revenue Today
          </h3>

          <p className="text-3xl font-bold text-slate-900">
            ₹42,105
          </p>

        </div>

        {/* CARD */}
        <div
          className="
            bg-white
            border border-slate-200
            p-6
            rounded-2xl
            shadow-sm
          "
        >

          <div className="flex justify-between items-start mb-4">

            <div
              className="
                w-12 h-12 text-xl
                rounded-xl
                bg-violet-100
                flex items-center justify-center
              "
            >
              🎬
            </div>

            <span className="text-red-600 text-sm font-medium">
              -2.1%
            </span>

          </div>

          <h3 className="text-slate-500 text-sm mb-1">
            Active Shows
          </h3>

          <p className="text-3xl font-bold text-slate-900">
            156
          </p>

        </div>

        {/* CARD */}
        <div
          className="
            bg-white
            border border-slate-200
            p-6
            rounded-2xl
            shadow-sm
          "
        >

          <div className="flex justify-between items-start mb-4">

            <div
              className="
                w-12 h-12 text-xl
                rounded-xl
                bg-blue-100
                flex items-center justify-center
              "
            >
              💺
            </div>

            <span className="text-green-600 text-sm font-medium">
              +4.7%
            </span>

          </div>

          <h3 className="text-slate-500 text-sm mb-1">
            Occupancy Rate
          </h3>

          <p className="text-3xl font-bold text-slate-900">
            78.4%
          </p>

        </div>

      </div>

      {/* MAIN GRID */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
      >

        {/* RECENT BOOKINGS */}
        <div
          className="
            xl:col-span-2
            bg-white
            border border-slate-200
            rounded-2xl
            overflow-hidden
            shadow-sm
          "
        >

          {/* TOP */}
          <div
            className="
              px-6 py-4
              border-b border-slate-200
              flex items-center justify-between
            "
          >

            <h3 className="text-lg font-semibold">
              Recent Bookings
            </h3>

            <button
              className="
                text-rose-600
                text-sm
                font-semibold
              "
            >
              View All
            </button>

          </div>

          {/* TABLE */}

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-50">
                <tr>

                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                    Booking ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                    Movie
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                    Seats
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">

                {recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-slate-50"
                  >

                    <td className="px-6 py-4 text-sm">
                      {booking.id}
                    </td>

                    <td className="px-6 py-4">
                      {booking.customer}
                    </td>

                    <td className="px-6 py-4">
                      {booking.movie}
                    </td>

                    <td className="px-6 py-4">
                      {booking.seats}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`
                          px-3 py-1
                          rounded-full
                          text-xs
                          font-semibold

                          ${booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {booking.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* TRENDING MOVIES */}
        <div
          className="
            bg-white
            border border-slate-200
            rounded-2xl
            shadow-sm
            overflow-hidden
          "
        >

          {/* HEADER */}
          <div
            className=" flex flex-row items-center justify-between 
              px-6 py-4
              border-b border-slate-200
            "
          >
            <h3 className="text-lg font-semibold">
              Trending Movies
            </h3>
            <IoIosTrendingUp size={24}/>
          </div>

          {/* MOVIES */}
          <div className="p-6 space-y-5">

            {trendingMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex gap-4"
              >

                {/* POSTER */}
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="
                    w-16 h-20
                    rounded-xl
                    object-cover
                  "
                />

                {/* INFO */}
                <div className="flex-1">

                  <h4 className="font-semibold">
                    {movie.title}
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    {movie.occupancy}% Occupancy
                  </p>

                  {/* PROGRESS */}
                  <div
                    className="
                      w-full
                      h-2
                      bg-slate-200
                      rounded-full
                      mt-3
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        h-full
                        bg-rose-500
                      "
                      style={{
                        width: `${movie.occupancy}%`,
                      }}
                    />
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
   </>
  );
};

export default DashboardPage;