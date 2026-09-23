import { MdNotificationsNone } from "react-icons/md"
import GlobalSearch from "../../search/components/GlobalSearch"
import { IoSettingsOutline } from "react-icons/io5"


const TopHeader = () => {

  return (

    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-16
        items-center
        justify-between
        border-b
        bg-white
        px-6
      "
    >
      <GlobalSearch />

      {/* RIGHT */}

      <div className="flex items-center gap-5 ">
        <button><MdNotificationsNone size={20} />
        </button>

        <button><IoSettingsOutline size={20} />
        </button>

        <div className="flex items-center gap-3 ">
          <img
            src='https://i.pravatar.cc/100'
            alt='admin'
            className='h-9 w-9 rounded-full'
          />

          <div>
            <p className='text-sm font-semibold overflow-x-auto whitespace-nowrap'>
              Admin User
            </p>

            <p className='text-xs text-gray-500 overflow-x-auto'>
              Master Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopHeader