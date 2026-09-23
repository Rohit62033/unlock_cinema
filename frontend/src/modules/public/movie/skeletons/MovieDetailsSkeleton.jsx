import React from 'react'

const MovieDetailsSkeleton = () => {
  return (
    <div className='min-h-screen text-white'>
      {/* Desktop Layout */}
      <div className='hidden md:block'>
        {/* Hero Backdrop Banner */}
        <div className='relative h-120 bg-gray-200 animate-pulse flex items-center'>

          {/* Overlay content */}
          <div className='relative w-full z-10 max-w-7xl mx-auto px-6 flex items-cneter gap-10'>

            {/* Movie Poster */}
            <div className='w-full md:w-65 h-[40vh] bg-gray-300 rounded-2xl shrink-0 shadow-2xl shimmer' />

            {/* Movie Information */}
            <div className='flex-1 space-y-4'>

              {/* Title */}
              <div className='h-10 bg-gray-300 rounded-md w-3/4 ' />

              {/* Rating */}
              <div className="bg-gray-200 rounded-xl px-6 py-3.5 flex items-center justify-between max-w-xl border border-gray-400 animate-pulse w-full ">
                {/* Left section: Star & Rating info */}
                <div className="flex items-center gap-3">
                  {/* Star Icon Skeleton */}
                  <div className="w-5 h-5 bg-[#616161]/30 rounded-full" />

                  {/* Rating text and Votes Skeleton */}
                  <div className="flex items-center gap-2">
                    {/* Rating (e.g., 8.5/10) */}
                    <div className="h-6 bg-[#616161]/30 rounded w-16" />

                    {/* Votes & Chevron Icon */}
                    <div className="h-5 bg-[#616161]/30 rounded w-28" />
                  </div>
                </div>

                {/* Right section: Button Skeleton */}
                <div className="h-8 bg-gray-300 rounded-sm w-20" />

              </div>

              {/* Movie metadata */}
              <div className="animate-pulse w-full">
                {/* Duration, Genres, Certification, and Release Date line */}
                <div className="h-7 bg-[#616161]/30 rounded w-4/5" />

                {/* Badges Container */}
                <div className="flex gap-3 mt-5 flex-row">
                  {/* Formats Badges */}
                  <div className="flex gap-3">
                    <div className="h-8 bg-[#616161]/30 rounded w-12" />
                    <div className="h-8 bg-[#616161]/30 rounded w-12" />
                  </div>

                  {/* Languages Badge */}
                  <div className="h-8 bg-[#616161]/30 rounded w-28" />
                </div>
              </div>
            </div>

          </div>


        </div>


      </div>

      {/* About movie */}
      <div className='hidden md:block w-full mt-5'>
        <div className='h-10 md:mx-60 max-w-40  bg-[#616161]/30 rounded-sm animate-pulse' />

        <div className="flex items-center gap-3">


          {/* Rating text and Votes Skeleton */}
          <div className="w-full flex flex-col px-60 mt-5 items-start justify-start gap-2">
            <div className="h-6 bg-[#616161]/30 rounded w-full" />
            <div className="h-5 bg-[#616161]/30 rounded w-full px-5" />
            <div className="h-5 bg-[#616161]/30 rounded w-[50%]" />
          </div>
        </div>


      </div>

      {/* Mobile Layout */}
      <div className='block md:hidden'>
        {/* Content */}
        <div className=' inset-0 relative  '>

          {/* Top Navigation */}
          <div className='flex items-center gap-3'>
            <div className='w-4 bg-green-200' />

          </div>

          {/* Poster */}
          <div className=''>
            <div className='rounded relative'>
              <div className='w-full h-[30vh] bg-red-300 shimmer' />

            </div>


            {/* Rating */}
            <div className='mt-3'>

              <div className="bg-gray-200 rounded-xl px-6 py-3.5 flex items-center justify-between max-w-xl  w-full animate-pulse ">
                {/* Left section: Star & Rating info */}
                <div className="flex items-center gap-3">
                  {/* Star Icon Skeleton */}
                  <div className="w-5 h-5 bg-gray-300 rounded-full" />

                  {/* Rating text and Votes Skeleton */}
                  <div className="flex items-center gap-2">
                    {/* Rating (e.g., 8.5/10) */}
                    <div className="h-6 bg-gray-300 rounded w-16" />

                    {/* Votes & Chevron Icon */}
                    <div className="h-5 bg-gray-300 rounded w-28" />
                  </div>
                </div>

                {/* Right section: Button Skeleton */}
                <div className="h-8 bg-gray-300 rounded-sm w-20" />

              </div>
            </div>

            {/* Metadata and description */}
            <div className="animate-pulse w-full">
              {/* Metadata Skeleton */}
              <div className="px-3 mt-4">
                {/* Duration, Genres, and Release Date line */}
                <div className="h-4 bg-gray-300 rounded w-2/3" />

                {/* Formats and Languages Badges */}
                <div className="flex gap-2 mt-3">
                  <div className="h-6 bg-gray-300 rounded w-10" />
                  <div className="h-6 bg-gray-300 rounded w-24" />
                </div>
              </div>

              {/* Description Skeleton */}
              <div className="px-3 mt-5 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full" />
                <div className="h-4 bg-gray-300 rounded w-full" />
                <div className="h-4 bg-gray-300 rounded w-3/4" />
              </div>

            </div>


          </div>


        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 md:hidden z-50 animate-pulse">
          {/* Button Skeleton */}
          <div className="w-full h-[44px] bg-gray-200 rounded-xl" />
        </div>
      </div >
    </div>
  )
}

export default MovieDetailsSkeleton