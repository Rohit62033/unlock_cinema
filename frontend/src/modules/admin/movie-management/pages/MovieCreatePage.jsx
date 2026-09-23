import ContextHeader from "../../shared/layout/components/ContextHeader"
import MovieForm from "../components/form/MovieForm"


const CreateMoviePage =
  () => {

    return (
<>

 <ContextHeader

    label="Create Movie"

    backTo="/admin/movies"
  />
      <MovieForm
        mode="create"
      />

      </>
    )
  }

export default CreateMoviePage