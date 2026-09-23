import { useFilterParams } from "../../hooks/useFilterParams";
import FilterChip from "./FilterChip";
import FilterSection from "./FilterSection";


const LANGUAGES = [
  "Hindi",
  "English",
  "Nagpuri"
];

const LanguageFilter = () => {

  const {
    getValues,
    toggleValue,
    clearValues
  } = useFilterParams();


  const selectedLanguages =
    getValues("languages");


  return (
    <FilterSection
      title="Languages"
      onClear={() => clearValues("languages")}
    >

      {
        LANGUAGES.map((language) => (

          <FilterChip
            key={language}
            label={language}
            selected={
              selectedLanguages.includes(language)
            }
            onClick={() =>
              toggleValue("languages", language)
            }
          />

        ))
      }

    </FilterSection>
  )
}

export default LanguageFilter