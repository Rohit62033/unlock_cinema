import {
  useFieldArray,
  useFormContext,
} from 'react-hook-form'


import { IoPeopleSharp } from 'react-icons/io5'
import { Plus } from 'lucide-react'
import CastRow from './CastRow'

const CastCrewManagementSection = () => {
  const { control } =
    useFormContext()

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'cast',
  })

  

  const handleAddActor = () => {
    append({
      id: crypto.randomUUID(),

      personName: '',

      characterName: '',

      roleType: 'LEAD',

      profession: 'ACTOR',

      image:
        'https://i.pravatar.cc/100',
    })
  }

  return (
    <section
      className="
        rounded-2xl
        border
        bg-white
        p-6
          mb-15
      "
    >
      {/* HEADER */}

      <div
        className="
          mb-6
          flex
          items-center
          justify-between
          border-b
          pb-4
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <span><IoPeopleSharp size={24} /></span>

          <h2 className="text-xl font-semibold">
            Cast & Crew Management
          </h2>
        </div>

        <button
          type="button"
          onClick={handleAddActor}
          className="
            flex
            items-center
            gap-2

            rounded-sm
            bg-red-500

            px-4
            py-2

            text-sm
            font-medium
            text-white

            transition-all
            hover:bg-red-600
          "
        >
          <span><Plus size={18} /></span>

          ADD ACTOR
        </button>
      </div>

      {/* CAST LIST */}

      <div className="space-y-4">
        {fields.map(
          (actor, index) => (
            <CastRow
              key={actor.id}
              actor={actor}
              index={index}
              remove={remove}
            />
          )
        )}
      </div>
    </section>
  )
}

export default CastCrewManagementSection