import React from 'react'

const FilterChip = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 border  text-sm  transition-all ${selected ? 'bg-primary border-red-500 text-white' : 'bg-white border-gray-200 text-primary'}`}
    >
      {label}
    </button>
  )
}

export default FilterChip