import MovieInfoHeader from
  "@/modules/public/showtime/components/MovieInfoHeader";

import StickyHeader from
  "@/modules/public/showtime/components/StickyHeader";

import {
  dummyShowtimeData,
} from
  "@/modules/public/showtime/constants/dummyShowtimeData";
import TheatreList from "../components/TheatreList ";
import EmptyShows from "../components/EmptyShows ";
import AvailabilityLegend from "../components/AvailabilityLegend ";
import { useState } from "react";

const MovieShowPage = () => {

  const pageData =
    dummyShowtimeData;
  const [selectedDate, setSelectedDate] =
    useState(pageData.dates[0]?.id);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      <MovieInfoHeader
        movie={pageData.movie}
      />

      <StickyHeader
        dates={pageData.dates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <AvailabilityLegend />

      {
        pageData.theatres.length > 0
          ? (
            <TheatreList
              theatres={
                pageData.theatres
              }
            />
          )
          : (
            <EmptyShows />
          )
      }

    </div>
  );
};

export default MovieShowPage;