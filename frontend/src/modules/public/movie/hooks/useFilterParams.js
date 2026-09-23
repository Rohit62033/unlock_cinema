import { useSearchParams } from "react-router-dom"

export const useFilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()


  //Get array values
  const getValues = (key) => {
    const value = searchParams.get(key)

    return value ? value.split(',') : []
  }

  //Toggle filter value
  const toggleValue = (key, value) => {

    const currentValues = getValues(key)

    let updatedValues

    if (currentValues.includes(value)) {
      updatedValues = currentValues.filter((item) => item !== value)
    } else {
      updatedValues = [...currentValues, value]
    }

 const newSearchParams = new URLSearchParams(searchParams);

    if (updatedValues.length === 0) {
    newSearchParams.delete(key);
  } else {
    newSearchParams.set(key, updatedValues.join(","));
  }

  setSearchParams(newSearchParams);
};

  //clear full filter section 
  const clearValues = (key) => {
    searchParams.delete(key)
    setSearchParams(searchParams)
  }

  return {
    getValues,
    toggleValue,
    clearValues
  };
}

