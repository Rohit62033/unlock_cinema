import { useFormContext } from 'react-hook-form'

import MediaUploadCard from './MediaUploadCard'
import { FaImages } from 'react-icons/fa'

const MediaUploadsSection = () => {
  const { watch, setValue } =
    useFormContext()

  const poster = watch('poster')
  
  
  const banner = watch('banner')
 

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
          mb-6
          flex
          items-center
          gap-2
          border-b
          pb-4
        "
      >
        <span><FaImages /></span>

        <h2 className="text-xl font-semibold">
          Media Uploads
        </h2>
      </div>

      {/* GRID */}

      <div
        className="
          grid
          grid-cols-3
          gap-4
        "
      >
        {/* POSTER */}

        <MediaUploadCard
          title="Main Poster (2:3)"
          aspect="aspect-[2/3]"
          image={poster?.url}
          onChange={(data) =>
            setValue('poster', data)
          }
        />

        {/* BANNER */}

        <div className="col-span-2">
          <MediaUploadCard
            title="Main Banner (16:9)"
            aspect="aspect-video"
            image={banner?.url}
            onChange={(data) =>
              setValue(
                'banner',
                data
              )
            }
          />
        </div>
      </div>
    </section>
  )
}

export default MediaUploadsSection