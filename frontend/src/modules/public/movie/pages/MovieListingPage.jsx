import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieLayout from "../components/movieList/MovieLayout";
import BannerCarousel from "@/modules/public/home/components/BannerCarousel";

const MovieListingPage = () => {

  const { city } = useParams();

  const banners = [
    {
      "_id": "1",
      "image": "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776147441443_popwebnew.jpg",
      "type": "movie",
      "targetId": "movie123",
      "title": "Avengers Special",
      "redirectUrl": "/movie/movie123"
    },
    {
      "_id": "2",
      "image": "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1778222235183_theyweb.jpg",
      "type": "event",
      "targetId": "event456",
      "title": "Live Concert",
      "redirectUrl": "/event/event456"
    },

  ]

  const selectedCity = useSelector(
    (state) => state.location.city
  );

  const activeCity = city || selectedCity;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <BannerCarousel banners={banners} />
      <MovieLayout />
    </div>
  );
};

export default MovieListingPage;