import { useParams }
  from 'react-router-dom'



import {
  useMovie
}
  from '../hooks/useMovie'
import MovieForm from '../components/form/MovieForm'
import EditMovieHeader from '../components/header/EditMovieHeader'
import { useState } from 'react'
import ContextHeader from '../../shared/layout/components/ContextHeader'


const EditMoviePage =
  () => {

    const { movieId } =
      useParams()

    const [searchValue, setSearchValue] =
      useState('')

    const {
      data,
      isLoading,
    } = useMovie(movieId)



    if (isLoading) {

      return <p>Loading...</p>
    }



    return (
      <>
        <EditMovieHeader
          label={'Edit movie'} 
          
          searchPlaceholder={'search resources'}

          searchValue=
          {searchValue}

          onSearchChange=
          {setSearchValue}
        />

          <ContextHeader

    label="Edit Movie"

    backTo="/admin/movies"
  />

        <MovieForm

          mode="edit"

          initialData={data}
        />

      </>
    )
  }

export default EditMoviePage