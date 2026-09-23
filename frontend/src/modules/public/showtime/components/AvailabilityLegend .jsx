const AvailabilityLegend = () => {

  return (
    <div
      className="
        bg-white
        border-b
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          py-2.5
          flex
          justify-end
          gap-5
        "
      >
        <LegendItem
          color="bg-green-500"
          label="AVAILABLE"
        />

        <LegendItem
          color="bg-yellow-500"
          label="FAST FILLING"
        />
      </div>
    </div>
  );
};

export default AvailabilityLegend;

function LegendItem({
  color,
  label,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <div
        className={`
          w-1.5
          h-1.5
          rounded-full
          ${color}
        `}
      />

      <span
        className="
          text-[8px]
          text-gray-600
        "
      >
        {label}
      </span>
    </div>
  );
}