import { Check, Pencil } from "lucide-react";

const EditableContactField = ({
  label,
  value,
  verified = false,
  onEdit,
}) => {

  return (

    <div>

      <div className="flex justify-between items-center mb-2">

        <label
          className="
            text-sm
            text-slate-700
            font-medium
          "
        >

          {label}

        </label>

        <button

          type="button"

          onClick={onEdit}

          className="
            flex
            items-center
            gap-1
            text-xs
            font-medium
            text-red-500
            hover:text-red-600
          "

        >

          <Pencil size={12} />

          Edit

        </button>

      </div>

      <div
        className="
          h-11
          rounded-lg
          border
          px-4
          flex
          items-center
          justify-between
          bg-white
        "
      >

        <span className="text-slate-700">

          {value || "-"}

        </span>

        {

          verified && (

            <Check
              size={16}
              className="text-green-500"
            />

          )

        }

      </div>

    </div>

  );

};

export default EditableContactField;