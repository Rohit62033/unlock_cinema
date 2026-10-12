const normalizeId = (value) => {
  if (!value) return null;

  if (typeof value === "object") {
    return value._id?.toString() ?? value.id?.toString() ?? null;
  }

  return value.toString();
};

export const mapSeatLayout = (layout, showSeats = []) => {
  if (!layout?.rows) return [];

  const showSeatMap = new Map();

  for (const showSeat of showSeats) {
    const layoutSeatId = normalizeId(showSeat.seat);

    if (layoutSeatId) {
      showSeatMap.set(layoutSeatId, showSeat);
    }
  }

  return layout.rows.map((row, rowIndex) => ({
    rowName: row.rowName,
    rowIndex,

    seats: row.seats.map((layoutSeat, columnIndex) => {
      const layoutSeatId = normalizeId(layoutSeat._id);
      const showSeat = showSeatMap.get(layoutSeatId);

      return {
        // This is the ShowSeat ID used for locking.
        id: showSeat ? normalizeId(showSeat._id) : null,

        // This is the physical SeatLayout seat ID.
        layoutSeatId,

        seatNumber: showSeat?.seatNumber ?? layoutSeat.seatNumber,
        row: showSeat?.row ?? row.rowName,
        rowIndex,
        columnIndex,

        category: showSeat?.category ?? layoutSeat.category,

        // ShowSeat price is authoritative for this show.
        price: showSeat?.price ?? layoutSeat.price,

        // Never let a seat without a ShowSeat record be selected.
        status: showSeat?.status?.toLowerCase() ?? "unavailable",
      };
    }),
  }));
};