import DateCard from "./DateCard";

const DateScroller = ({
  dates,
  selectedDate,
  setSelectedDate,
}) => {

  return (
    <div
      className="
        w-full
        overflow-x-auto
        no-scrollbar
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          min-w-max
          gap-1
        "
      >
        {
          dates.map((date) => (

            <DateCard
              key={date.id}
              date={date}
              isSelected={
                selectedDate === date.id
              }
              setSelectedDate={
                setSelectedDate
              }
            />

          ))
        }
      </div>
    </div>
  );
};

export default DateScroller;