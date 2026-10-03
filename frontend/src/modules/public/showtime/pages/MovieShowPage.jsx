import MovieInfoHeader from
  "@/modules/public/showtime/components/MovieInfoHeader";

import StickyHeader from
  "@/modules/public/showtime/components/StickyHeader";
import TheatreList from "../components/TheatreList ";
import EmptyShows from "../components/EmptyShows ";
import AvailabilityLegend from "../components/AvailabilityLegend ";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMovieShowtimes } from "../hooks/useMovieShowtime";

const MovieShowPage = () => {

  const { movieId } =
    useParams();

  const { city } = useSelector((state) => state.location)

  const [selectedDate, setSelectedDate] =
    useState(null);

  const {
    data: response,
    isLoading,
    isFetching,
    error,
  } = useMovieShowtimes({
    movieId,
    city,
    date: selectedDate,
  });

  const pageData =
    response?.data;

  useEffect(() => {
    if (
      pageData?.selectedDate &&
      !selectedDate
    ) {
      setSelectedDate(
        pageData.selectedDate
      );
    }
  }, [
    pageData?.selectedDate,
    selectedDate,
  ]);

 if (isLoading) {
    return <div>Loading showtimes...</div>;
  }

  if (error) {
    return <div>Unable to load showtimes.</div>;
  }

  if (!pageData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      <MovieInfoHeader
        movie={pageData.movie}
      />

      <StickyHeader
        dates={pageData.dates}
        selectedDate={
          pageData.selectedDate
        }
        setSelectedDate={
          setSelectedDate
        }
      />

      <AvailabilityLegend />

      {pageData.theatres.length > 0 ? (
        <TheatreList
          theatres={
            pageData.theatres
          }
        />
      ) : (
        <EmptyShows />
      )}

    </div>
  );
};

export default MovieShowPage;