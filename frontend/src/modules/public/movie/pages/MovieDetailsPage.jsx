import { useParams } from "react-router-dom";
import AboutMovie from "../components/movieDetail/about/AboutMovie";
import CastSection from "../components/movieDetail/cast/CastSection";
import BookTicketButton from "../components/movieDetail/hero/BookTicketButton";
import HeroSection from "../components/movieDetail/hero/HeroSection";
import OffersSection from "../components/movieDetail/offers/OfferSection";
import ReviewsSection from "../components/movieDetail/review/ReviewSection";
import StickyMovieBar from "../components/movieDetail/sticky/StickyMovieBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieDetails } from "@/store/movie/movieThunk";
import MovieDetailsSkeleton from "../skeletons/MovieDetailsSkeleton";



const MovieDetailsPage = () => {

  // const movie = {
  //   title: "Krishnavataram Part 1: The Heart",
  //   description:
  //     "A grcggand retelling of Krishna's journey, told on a breathtaking scale.",
  //   poster:
  //     "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/krishnavataram-part-1-the-heart-et00495498-1777879506.jpg",
  //   banner:
  //     "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/krishnavataram-part-1-the-heart-et00495498-1777879506.jpg",
  //   rating: 9.2,
  //   votes: "5.2K",
  //   duration: "2h 29m",
  //   genres: ["Adventure", "Drama", "Romantic"],
  //   languages: ["Hindi", "Tamil"],
  //   releaseDate: "7 May, 2026",
  // };

  const { movieId } = useParams()


  const dispatch = useDispatch()

  const { movieDetails, movieDetailsLoading, error } = useSelector((state) => state.movies)

  useEffect(() => {

    if (!movieId) return;

    dispatch(
      fetchMovieDetails(movieId)
    );

  }, [movieId, dispatch]);


  if (movieDetailsLoading) {
    return <div><MovieDetailsSkeleton/></div>;
  }

  if (error) {
    return <div>Error loading movie</div>;
  }

  if (!movieDetails) {
    return null;
  }



  return (
    <div className="bg-white min-h-screen">

      <StickyMovieBar
        movie={movieDetails.movie}
      />

      <HeroSection
        movie={movieDetails.movie}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">

        <AboutMovie
          description={movieDetails?.movie.description}
        />

        <BookTicketButton />

        <OffersSection />

        <CastSection
          cast={movieDetails.cast}
        />

        <ReviewsSection
          reviews={movieDetails.reviews}
        />

      </div>
    </div>
  );
};

export default MovieDetailsPage;