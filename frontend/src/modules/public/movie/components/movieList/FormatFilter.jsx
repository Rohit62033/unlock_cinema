import { useFilterParams } from "../../hooks/useFilterParams";
import FilterChip from "./FilterChip";
import FilterSection from "./FilterSection";


const FORMATS = [
  "2D",
  "3D",
  "IMAX"
];

const FormatFilter = () => {


  const { getValues, toggleValue, clearValues } = useFilterParams()

  const selectedFormats = getValues('formats')

  return (
    <FilterSection
      title="Format"
      onClear={() => { clearValues('formats') }}
    >

      {
        FORMATS.map((format) => (

          <FilterChip
            key={format}
            label={format}
            selected={selectedFormats.includes(format)}
            onClick={() => { 
              console.log(format);
              
              toggleValue('formats', format) }}
          />

        ))
      }

    </FilterSection>
  )
}

export default FormatFilter