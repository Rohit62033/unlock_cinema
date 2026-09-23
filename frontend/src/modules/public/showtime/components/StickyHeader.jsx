import DateScroller from "./DateScroller";
import FiltersBar from "./FiltersBar";
// import FiltersBar from "./FiltersBar";

const StickyHeader = ({ dates, selectedDate, setSelectedDate }) => {

  return (
    <div
      className="
        md:sticky
        top-0
        z-49
        bg-white
        border-b
        shadow-sm
       
      "
    >
      <div className="flex justify-between  px-4
        py-2">

        <DateScroller
          dates={dates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />



      </div>
      <FiltersBar />
    </div>
  );
};

export default StickyHeader;