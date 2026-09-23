import { useFilterParams } from "../../hooks/useFilterParams";
import FilterChip from "./FilterChip";
import FilterSection from "./FilterSection";



const GENRES = [
  "Action",
  "Drama",
  "Comedy",
  "Horror"
];

const GenreFilter = () => {

  const { getValues, toggleValue, clearValues } = useFilterParams()

  const selectedGenres = getValues('genres')

  return (
    <FilterSection
      title="Genres"
      onClear={() => { clearValues('genres') }}
    >

      {
        GENRES.map((genre) => (

          <FilterChip
            key={genre}
            label={genre}
            selected={selectedGenres.includes(genre)}
            onClick={() => { toggleValue('genres', genre) }}
          />

        ))
      }

    </FilterSection>
  )
}

export default GenreFilter