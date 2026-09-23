import {
  useForm,
  FormProvider,
} from 'react-hook-form'

import {
  zodResolver
} from '@hookform/resolvers/zod'

import {
  movieSchema
} from '../../validations/movieSchema'

import {
  useCreateMovie
} from '../../hooks/useCreateMovie'

import {
  useUpdateMovie
} from '../../hooks/useUpdateMovie'



/* SECTIONS */

import BasicInformationSection
  from './BasicInformationSection'

import MediaUploadsSection
  from '../edit/MediaUploadsSection'

import PublishingStatusSection
  from '../edit/PublishingStatusSection'

import CastCrewManagementSection
  from '../edit/CastCrewManagementSection'

import ClassificationSection
  from '../edit/ClassificationSection'

import EngagementPreviewSection
  from '../edit/EngagementPreviewSection'

import MovieLanguageSection
  from '../edit/MovieLanguageSection'
import { useCloudinaryUpload } from '@/modules/upload/hooks/useCloudinaryUpload'
import FloatingSaveButton from '../edit/FloatingSaveButton'
import { useState } from 'react'
import { toast } from 'sonner'

const defaultValues = {

  title: '',

  description: '',

  duration: 0,

  releaseDate: '',

  certification: '',

  status: 'DRAFT',

  genres: [],

  languages: [],

  subtitleLanguages: [],

  formats: [],

  cast: [],

  crew: [],

  poster: null,

  banner: null,
}

const MovieForm = ({


  mode = 'create',

  initialData,
}) => {

  const [isUploading, setIsUploading] = useState(false)


  /* FORM */


  const normalizedInitialData =
    initialData
      ? {

        ...initialData,

        releaseDate:
          initialData.releaseDate
            ?.split('T')[0],

        genres:
          initialData.genres?.map(
            (genre) =>

              genre._id
          ) || [],

      }

      : defaultValues

  const methods = useForm({

    resolver:
      zodResolver(
        movieSchema
      ),

    defaultValues:
      normalizedInitialData,
  })

  /* MUTATIONS */

  const createMovieMutation =
    useCreateMovie()

  const updateMovieMutation =
    useUpdateMovie()

  /* UPLOAD */

  const { upload } =
    useCloudinaryUpload()

  /* SUBMIT */

  const onSubmit = async (values) => {
    let loadingToastId

    try {
      let poster = values.poster || null
      let banner = values.banner || null

      const hasPosterUpload = !!values.poster?.file
      const hasBannerUpload = !!values.banner?.file

      /*
       * =========================
       * START UPLOAD STATE
       * =========================
       */

      if (hasPosterUpload || hasBannerUpload) {
        setIsUploading(true)

        loadingToastId = toast.loading(
          'Uploading images...'
        )
      }

      /*
       * =========================
       * POSTER
       * =========================
       */

      if (hasPosterUpload) {
        try {
          poster = await upload({
            file: values.poster.file,
            type: 'moviePoster',
          })
        } catch (error) {
          console.error(error)

          toast.error(
            'Failed to upload poster image'
          )

          return
        }
      }

      /*
       * =========================
       * BANNER
       * =========================
       */

      if (hasBannerUpload) {
        try {
          banner = await upload({
            file: values.banner.file,
            type: 'movieBanner',
          })
        } catch (error) {
          console.error(error)

          toast.error(
            'Failed to upload banner image'
          )

          return
        }
      }

      /*
       * =========================
       * PAYLOAD
       * =========================
       */

      const payload = {
        ...values,
        poster,
        banner,
      }

      /*
       * Remove File objects
       */

      delete payload.poster?.file
      delete payload.banner?.file

      /*
       * =========================
       * CREATE
       * =========================
       */

      if (mode === 'create') {
        await createMovieMutation.mutateAsync(
          payload
        )

        /*
         * IMPORTANT:
         * Replace RHF values containing File
         * with uploaded Cloudinary data.
         */

        methods.setValue(
          'poster',
          poster
        )

        methods.setValue(
          'banner',
          banner
        )

        toast.success(
          'Movie created successfully!'
        )

        return
      }

      /*
       * =========================
       * UPDATE
       * =========================
       */

      await updateMovieMutation.mutateAsync({
        movieId: initialData.id,
        payload,
      })

      /*
       * IMPORTANT:
       * Remove File objects from RHF state
       * after successful update.
       */

      methods.setValue(
        'poster',
        poster
      )

      methods.setValue(
        'banner',
        banner
      )

      toast.success(
        'Movie updated successfully!'
      )

    } catch (error) {
      console.error(error)

      toast.error(
        'An unexpected error occurred'
      )

    } finally {
      setIsUploading(false)

      if (loadingToastId) {
        toast.dismiss(loadingToastId)
      }
    }
  }

  const isSubmitting =

    isUploading ||

    createMovieMutation.isPending ||

    updateMovieMutation.isPending

  return (

    <FormProvider
      {...methods}
    >

      <form

        onSubmit={methods.handleSubmit(
          onSubmit
        )}

        onKeyDown={(event) => {

          if (

            event.key === 'Enter' &&

            event.target.tagName !== 'TEXTAREA'
          ) {

            event.preventDefault()
          }
        }}

        className="
          grid
          grid-cols-12
          gap-6
          mx-4
        "
      >

        {/* LEFT */}

        <div
          className="
            col-span-12
            lg:col-span-8
            space-y-6
          "
        >

          <BasicInformationSection />

          <MediaUploadsSection />

          <CastCrewManagementSection />

        </div>

        {/* RIGHT */}

        <div
          className="
            col-span-12
            lg:col-span-4
            space-y-6
          "
        >

          <PublishingStatusSection />

          <ClassificationSection />

          <MovieLanguageSection />

          {
            mode === 'edit' && (
              <>
                <EngagementPreviewSection />

              </>
            )
          }

          <FloatingSaveButton
            isSubmitting={
              isSubmitting
            }
          />
        </div>


      </form>

    </FormProvider>
  )
}

export default MovieForm