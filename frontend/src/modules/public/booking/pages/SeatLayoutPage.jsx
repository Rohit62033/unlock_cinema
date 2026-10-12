import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { useSeatLayoutData } from "../hooks/useSeatSelection.js"

import ShowInfoHeader from "../components/ShowInfoHeader";
import SeatLegend from "../components/SeatLegend";
import SeatMapCanvas from "../components/SeatMapCanvas";
import BookingSummary from "../components/BookingSummary";

const SeatLayoutPage = () => {
  const { showId } = useParams();

  const {
    show,
    seats,
    isLoading,
    isError,
    error,
  } = useSeatLayoutData(showId);

  const [selectedSeatIds, setSelectedSeatIds] = useState([]);
  const [notice, setNotice] = useState("");

  const flatSeats = useMemo(
    () => seats.flatMap((row) => row.seats),
    [seats]
  );

  const selectedSeats = useMemo(
    () =>
      flatSeats.filter((seat) =>
        selectedSeatIds.includes(seat.id)
      ),
    [flatSeats, selectedSeatIds]
  );

  const totalAmount = useMemo(
    () =>
      selectedSeats.reduce(
        (total, seat) => total + Number(seat.price || 0),
        0
      ),
    [selectedSeats]
  );

  const handleSeatSelect = (clickedSeat) => {
    setNotice("");

    setSelectedSeatIds((currentIds) => {
      if (currentIds.includes(clickedSeat.id)) {
        return currentIds.filter(
          (id) => id !== clickedSeat.id
        );
      }

      return [...currentIds, clickedSeat.id];
    });
  };

  const handleContinue = () => {
    if (selectedSeatIds.length === 0) return;

    /*
     * The seat selection UI is ready.
     *
     * Next, send these ShowSeat IDs to your backend's
     * lock endpoint. Do not create a booking directly
     * from this client-side selection.
     *
     * The lock endpoint and its request contract have
     * not been supplied yet, so no API call is invented here.
     */
    setNotice(
      "Seat selection is ready. Connect the seat-lock API before proceeding to booking."
    );
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-slate-600">
          Loading seat layout...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-xl font-bold text-slate-900">
          Unable to load seats
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          {error?.message ?? "Something went wrong while loading this show."}
        </p>
      </div>
    );
  }

  if (!show) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-slate-600">
          Show details could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ShowInfoHeader show={show} />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
          <div className="mb-6 text-center">
            <h2 className="text-lg font-bold text-slate-900">
              Select your seats
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose available seats from the layout below.
            </p>
          </div>

          <SeatLegend />

          {seats.length > 0 ? (
            <div className="mt-8">
              <SeatMapCanvas
                rows={seats}
                selectedSeatIds={selectedSeatIds}
                onSeatSelect={handleSeatSelect}
              />
            </div>
          ) : (
            <p className="py-12 text-center text-slate-500">
              No seats are available in this layout.
            </p>
          )}
        </section>

        <BookingSummary
          selectedSeats={selectedSeats}
          totalAmount={totalAmount}
          onContinue={handleContinue}
        />

        {notice && (
          <p
            role="status"
            className="mt-3 text-sm text-amber-700"
          >
            {notice}
          </p>
        )}
      </main>
    </div>
  );
};

export default SeatLayoutPage;