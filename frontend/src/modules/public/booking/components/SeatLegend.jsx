const legends = [
  {
    label: "Available",
    className: "border border-slate-400 bg-white",
  },
  {
    label: "Selected",
    className: "bg-green-600",
  },
  {
    label: "Locked",
    className: "bg-amber-500",
  },
  {
    label: "Booked",
    className: "bg-slate-500",
  },
  {
    label: "Unavailable",
    className: "bg-slate-200",
  },
];

const SeatLegend = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {legends.map((legend) => (
        <div
          key={legend.label}
          className="flex items-center gap-2"
        >
          <span
            className={`h-5 w-5 rounded-md ${legend.className}`}
          />

          <span className="text-sm text-slate-600">
            {legend.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SeatLegend;