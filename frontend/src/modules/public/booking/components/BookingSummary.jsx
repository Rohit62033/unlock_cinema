const BookingSummary = ({
  selectedSeats,
  totalAmount,
  onContinue,
  isContinuing = false,
}) => {
  const seatNames = selectedSeats
    .map((seat) => seat.seatNumber)
    .join(", ");

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">
            Selected seats ({selectedSeats.length})
          </p>

          <p className="mt-1 break-words font-semibold text-slate-900">
            {seatNames || "Select your seats"}
          </p>
        </div>

        <div className="shrink-0">
          <p className="text-sm text-slate-500">
            Total amount
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            ₹{totalAmount.toLocaleString("en-IN")}
          </p>
        </div>

        <button
          type="button"
          onClick={onContinue}
          disabled={
            selectedSeats.length === 0 || isContinuing
          }
          className="shrink-0 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isContinuing ? "Processing..." : "Continue"}
        </button>
      </div>
    </section>
  );
};

export default BookingSummary;