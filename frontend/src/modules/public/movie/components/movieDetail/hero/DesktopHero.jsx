import React from 'react'
import MovieInfo from './MovieInfo'
import MoviePoster from './MoviePoster'

const DesktopHero = ({movie}) => {
  return (
     <section className="relative h-120 overflow-hidden ">

      {/* Background */}
      <img
        src={movie?.banner}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center gap-10">

        <MoviePoster poster={movie.poster} />

        <MovieInfo movie={movie} />

      </div>

      {/* <ShareButton /> */}

    </section>
  )
}

export default DesktopHero