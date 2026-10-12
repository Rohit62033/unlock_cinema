const formatShowTime = (date) => {
  if (!date || Number.isNaN(new Date(date).getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(date));
};

const formatShowDate = (date) => {
  if (!date || Number.isNaN(new Date(date).getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

const ShowInfoHeader = ({ show }) => {
  if (!show) return null;

  const showTime = formatShowTime(show.startTime);
  const showDate = formatShowDate(show.startTime);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5">
        {show.movie?.poster?.url && (
          <img
            src={show.movie.poster.url}
            alt={show.movie.title ?? "Movie poster"}
            className="h-24 w-16 rounded-md object-cover"
          />
        )}

        <div className="min-w-0">
          <h1 className="text-xl font-bold text-slate-900">
            {show.movie?.title ?? "Movie"}
          </h1>

          <p className="mt-1 text-sm text-slate-600">
            {show.theatre?.name ?? "Theatre"}
            {show.screen?.name
              ? ` · ${show.screen.name}`
              : ""}
          </p>

          <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-500">
            {showDate && <span>{showDate}</span>}
            {showTime && <span>· {showTime}</span>}
            {show.language && <span>· {show.language}</span>}
            {show.format && <span>· {show.format}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShowInfoHeader;