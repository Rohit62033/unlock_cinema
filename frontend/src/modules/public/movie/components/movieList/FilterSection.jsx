import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const FilterSection = ({
  title, children, onClear
}) => {

  const [open, setOpen] = useState(true)

  return (

    <div
      className='bg-white r p-4 mb-4'
    >

      {/* Header */}
      <div
        className='flex items-center justify-between cursor-pointer'
      >

        <div
          onClick={() => setOpen(!open)}
          className='flex items-center gap-2'
        >
          {open ? <ChevronUp size={18} /> :
            <ChevronDown size={18} />}

          <h3 className='text-sm text-primary font-medium'> {title}</h3>
        </div>

        <button
          onClick={onClear}
          className='text-xs  text-gray-500'
        >
          Clear
        </button>

      </div>

      {/* content */}

      {open && (
        <div className='flex flex-wrap gap-2   mt-4'>
          {children}
        </div>
      )}

    </div>
  )
}

export default FilterSection