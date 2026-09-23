import React from 'react'

const BookTicketButton = () => {
  return (
     <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        bg-white
        border-t
        p-3
        md:hidden
        z-50
      "
    >

      <button
        className="
          w-full
          bg-[#F84464]
          text-white
          py-2.5
          rounded-xl
          font-bold
        "
      >
        Book tickets
      </button>

    </div>
  )
}

export default BookTicketButton