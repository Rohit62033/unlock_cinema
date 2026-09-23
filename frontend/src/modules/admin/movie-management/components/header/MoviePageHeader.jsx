import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MoviePageHeader = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 mb-5">
      <div>
        <h1 className="text-3xl font-bold">
          Movie Management
        </h1>

        <p className="mt-1 text-gray-500">
          Manage cinema catalog and movies.
        </p>
      </div>

      <button
        onClick={() =>
          navigate('/admin/movies/create')
        }
        className="
        flex flex-row items-center gap-1
          rounded-sm
          bg-primary
          px-6
          py-3
          font-medium
          text-white
        "
      >
        <Plus size={25}/>Add Movie
      </button>
    </div>
  )
}

export default MoviePageHeader