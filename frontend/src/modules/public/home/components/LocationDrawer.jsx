import { closeLocationDrawer, setLocation } from "@/store/location/locationSlice";
import api from "@/config/axios";
import { useDispatch, useSelector } from "react-redux";
import { Loader2, Search, Target, X } from "lucide-react";
import { BiTargetLock } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import useDebounce from "@/hooks/useDebouce";
import { searchCity } from "@/store/location/locationThunk";
import { useNavigate } from "react-router-dom";

const popularCities = [
  { id: 1, name: "Mumbai", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/mumbai.png" },
  { id: 2, name: "Delhi-NCR", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/ncr.png" },
  { id: 3, name: "Bengaluru", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/bang.png" },
  { id: 4, name: "Hyderabad", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/hyd.png" },
  { id: 5, name: "Chandigarh", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/chd.png" },
  { id: 6, name: "Ahmedabad", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/ahd.png" },
  { id: 7, name: "Pune", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/pune.png" },
  { id: 8, name: "Chennai", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/chen.png" },
  { id: 9, name: "Kolkata", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/kolk.png" },
  { id: 10, name: "Kochi", iconUrl: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/koch.png" },
];

const LocationDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const locationDrawerRef = useRef();

  const { city, isDrawerOpen, loading, suggestions } = useSelector((state) => state.location);
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')


  const debouncedQuery = useDebounce(query, 400)

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(searchCity(debouncedQuery));
    }
  }, [debouncedQuery]);


  const handleClickOutside = (e) => {
    //Close cart drawer when clicked outside
    if (locationDrawerRef.current && city && !locationDrawerRef.current.contains(e.target)) {


      dispatch(closeLocationDrawer())
    }
  }

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const handleSelect = async (city) => {
    try {

      await api.post("/api/location/set", { city });

      dispatch(setLocation(city));
      //  navigate(`/movies/${city.toLowerCase()}`);

    } catch (err) {
      console.error(err);
    }
  };

  const handleLocationDetection = () => {

    setIsLoading(true)
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await api.post("/api/location/auto-detect", {
            latitude,
            longitude
          });

          const city = res.data.city;
          console.log(city);

          dispatch(setLocation(city)); // Redux update
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false)
        }
      },
      (error) => {
        alert("Location permission denied");
      }
    );
  };


  return (
    <div
      className="fixed inset-0  bg-black/40 z-51 flex justify-center items-start  md:pt-30 xl:pt-40 ">


      <div
        ref={locationDrawerRef}
        className="flex flex-col md:justify-center w-full md:items-center  bg-[#f5f5f5] rounded-md overflow-hidden  max-w-3xl h-full md:h-auto ">

        {/* selected city and close btn */}
        <div className="md:hidden relative flex items-center justify-center bg-white p-4 border-b">
          <button
            onClick={() => dispatch(closeLocationDrawer())}
            className="absolute left-4"
          >
            <X className=" text-gray-500" />
          </button>
          <p className="font-semibold">{city}</p>

        </div>

        {/* Search location */}
        <div className="bg-white my-2  max-w-4xl  md:wd-100 lg:wd-125 border p-2 rounded-full md:rounded-lg w-full ">
          <div
            className=" flex items-center justify-cenfter gap-1 px-3 "
          > <Search
              size={18}
              className="text-gray-500  " />
            <input
              className="flex flex-1"
              placeholder="Search for your city"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>



        </div>

        <div className="mt-3 space-y-2 flex items-start w-full px-5 md:px-9 lg:px-10 flex-col">
          {loading && <p>Searching</p>}

          {suggestions.map((city, index) => (
            <div
              key={index}
              onClick={() => handleSelect(city.name)}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded text-start"
            >
              {city.name}
            </div>
          ))}

          {!loading && query && suggestions.length === 0 && (
            <p className="p-2 text-gray-500">No city found</p>
          )}
        
      </div>


      {/* auto detect location */}
      <div className="flex flex-1 bg-white my-2 max-w-3xl   border p-2 text-primary w-full gap-1 " >
        <button
          onClick={() => handleLocationDetection()}
          className="flex items-center px-3 gap-1 flex-1"
        >
          <BiTargetLock />Detect my location
          {isLoading && (<Loader2 className="animate-spin" size={16} />
          )}
        </button>

      </div>


      <div className="mt-2 bg-white mb-2">
        <h2 className="text-start md:text-center px-5">Popular cities</h2>
        <div className="grid grid-cols-4 md:grid-cols-10 whitespace-nowrap px-2">
          {popularCities.map((city) => (
            <button
              key={city.id}
              onClick={() => handleSelect(city.name)}
              className="group flex flex-col items-center justify-center p-4 border-r border-b border-gray-100 hover:bg-red-50 transition-colors last:border-r-0"
            >
              {/* City Icon - Backend Driven */}
              <div className="mb-2 w-12 h-12 flex items-center justify-center">
                <img
                  src={city.iconUrl}
                  alt={city.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>

              <span className="text-xs md:text-sm font-medium text-gray-700 text-center">
                {city.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* for now view all cities is not implemented */}
      <div className="bg-white  w-full text-center pt-1">
        <h2 className="text-md text-primary  pb-2 ">View all cities</h2>

      </div>
    </div>


    </div >
  );
};

export default LocationDrawer;