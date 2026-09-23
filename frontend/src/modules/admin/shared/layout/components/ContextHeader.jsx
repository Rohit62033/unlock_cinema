import { FaArrowLeft }
from 'react-icons/fa'

import {
  useNavigate
} from 'react-router-dom'

const ContextHeader = ({
  label,
  backTo,
}) => {

  const navigate =
    useNavigate()

  return (

    <div
      className="
        mb-6
        flex
        items-center
        gap-3
        pt-5
        px-5
      "
    >
      <button

        type="button"

        onClick={() =>
          navigate(backTo)
        }
      >
        <FaArrowLeft />
      </button>

      <h1
        className="
          text-xl
          font-semibold
        "
      >
        {label}
      </h1>
    </div>
  )
}

export default ContextHeader