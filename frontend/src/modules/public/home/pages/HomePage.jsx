import React, { useEffect } from 'react'
import Section from '../components/Section';
import BannerCarousel from '../components/BannerCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendedMovies } from '@/store/movie/movieThunk';
import RecommendedSectionSkeleton from '../skeleton/RecommendedSectionSkeleton';

const HomePage = () => {

    const { city } = useSelector((state) => state.location)


  const banners = [
    {
      "_id": "1",
      "image": "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1776147441443_popwebnew.jpg",
      "type": "movie",
      "targetId": "movie123",
      "title": "Avengers Special",
      "redirectUrl": `movie/${city}`
    },
    {
      "_id": "2",
      "image": "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1789630089549_residentevilweb.jpg",
      "type": "event",
      "targetId": "event456",
      "title": "Live Concert",
      "redirectUrl": `movie/${city}`
    },
    {
      "_id": "3",
      "image": "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1789628030482_daayraweb.jpg",
      "type": "external",
      "redirectUrl": "https://paytm.com/offer/upto-rs1500-cashback"
    }
  ]
  const dispatch = useDispatch()

  const { recommendedMovies, recommendedMoviesLoading } = useSelector((state) => state.movies)

  useEffect(() => {

    if (city) {

      dispatch(
        fetchRecommendedMovies(city)
      )
    }

  }, [
    city,
    dispatch
  ])

  

  return (
    <div className='flex-1 w-full '>
      <BannerCarousel banners={banners} />

      <div className='max-w-7xl mx-auto px-4'>
        {
          recommendedMoviesLoading
            ? (
              <RecommendedSectionSkeleton />
            )
            : (
              <Section
                title="Recommended Movies"
                items={recommendedMovies}
              />

            )
        }

      </div>

      <div className='w-full max-w-7xl px-5 mx-auto'>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage