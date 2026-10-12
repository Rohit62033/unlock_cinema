import React from 'react'

const FloatingSaveButton = ({ isSubmitting }) => {

  return (

    <button
      type="buuton"

      disabled={isSubmitting}

      className="
   fixed
  bottom-8
   right-8
   flex
  h-10
  w-24
  text-sm
  items-center
 justify-center
 rounded-lg
   bg-red-500
    text-white
  shadow-2xl
  "
    >
      {
        isSubmitting

          ? 'Saving...'

          : 'Save'
      }
    </button>
    //    <button
    //   type="submit"
    //   className="
    //     fixed
    //     bottom-8
    //     right-8
    //     flex
    //     h-14
    //     w-14
    //     items-center
    //     justify-center
    //     rounded-2xl
    //     bg-red-500
    //     text-white
    //     shadow-2xl
    //   "
    // >
    //   <FaRegSave />
    // </button>
  )
}

export default FloatingSaveButton