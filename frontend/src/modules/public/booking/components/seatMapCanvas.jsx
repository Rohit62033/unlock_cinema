import { useEffect, useRef } from "react";

const SEAT_WIDTH = 38;
const SEAT_HEIGHT = 32;
const COLUMN_GAP = 10;
const ROW_GAP = 18;
const PADDING_X = 48;
const PADDING_TOP = 100;
const PADDING_BOTTOM = 36;

const SCREEN_WIDTH = 520;
const SCREEN_HEIGHT = 28;

const getSeatColors = (status, selected) => {
  if (selected) {
    return {
      fill: "#16a34a",
      stroke: "#15803d",
      text: "#ffffff",
    };
  }

  switch (status?.toLowerCase()) {
    case "available":
      return {
        fill: "#ffffff",
        stroke: "#94a3b8",
        text: "#334155",
      };

    case "locked":
      return {
        fill: "#f59e0b",
        stroke: "#d97706",
        text: "#ffffff",
      };

    case "booked":
      return {
        fill: "#64748b",
        stroke: "#475569",
        text: "#ffffff",
      };

    default:
      return {
        fill: "#e2e8f0",
        stroke: "#cbd5e1",
        text: "#94a3b8",
      };
  }
};

const SeatMapCanvas = ({
  rows = [],
  selectedSeatIds = [],
  onSeatSelect,
}) => {
  const canvasRef = useRef(null);
  const hitAreasRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const maxSeatsInRow = Math.max(
      0,
      ...rows.map((row) => row.seats?.length ?? 0)
    );

    const rowWidth =
      maxSeatsInRow * (SEAT_WIDTH + COLUMN_GAP) - COLUMN_GAP;

    const canvasWidth = Math.max(
      680,
      rowWidth + PADDING_X * 2
    );

    const canvasHeight =
      PADDING_TOP +
      rows.length * (SEAT_HEIGHT + ROW_GAP) +
      PADDING_BOTTOM +
      SCREEN_HEIGHT;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    hitAreasRef.current = [];

    // Screen arc.
    const screenX = (canvasWidth - SCREEN_WIDTH) / 2;
    const screenY = 22;

    ctx.beginPath();
    ctx.moveTo(screenX, screenY + SCREEN_HEIGHT);

    ctx.quadraticCurveTo(
      canvasWidth / 2,
      screenY - 24,
      screenX + SCREEN_WIDTH,
      screenY + SCREEN_HEIGHT
    );

    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#64748b";
    ctx.font = "600 12px Arial, sans-serif";
    ctx.textAlign = "center";

    ctx.fillText(
      "SCREEN",
      canvasWidth / 2,
      screenY + SCREEN_HEIGHT + 22
    );

    // Draw each row.
    rows.forEach((row, rowIndex) => {
      const seats = row.seats ?? [];

      const currentRowWidth =
        seats.length * (SEAT_WIDTH + COLUMN_GAP) -
        COLUMN_GAP;

      // Center rows even when their seat counts differ.
      const startX = (canvasWidth - currentRowWidth) / 2;

      const y =
        PADDING_TOP + rowIndex * (SEAT_HEIGHT + ROW_GAP);

      ctx.fillStyle = "#64748b";
      ctx.font = "600 12px Arial, sans-serif";
      ctx.textAlign = "right";

      ctx.fillText(
        row.rowName,
        startX - 14,
        y + SEAT_HEIGHT / 2 + 4
      );

      seats.forEach((seat, columnIndex) => {
        const x =
          startX + columnIndex * (SEAT_WIDTH + COLUMN_GAP);

        const selected = selectedSeatIds.includes(seat.id);
        const colors = getSeatColors(seat.status, selected);

        ctx.beginPath();
        ctx.roundRect(
          x,
          y,
          SEAT_WIDTH,
          SEAT_HEIGHT,
          6
        );

        ctx.fillStyle = colors.fill;
        ctx.fill();

        ctx.strokeStyle = colors.stroke;
        ctx.lineWidth = 1.25;
        ctx.stroke();

        ctx.fillStyle = colors.text;
        ctx.font = "10px Arial, sans-serif";
        ctx.textAlign = "center";

        ctx.fillText(
          seat.seatNumber,
          x + SEAT_WIDTH / 2,
          y + SEAT_HEIGHT / 2 + 4
        );

        hitAreasRef.current.push({
          seat,
          x,
          y,
          width: SEAT_WIDTH,
          height: SEAT_HEIGHT,
        });
      });
    });
  }, [rows, selectedSeatIds]);

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clickX = (event.clientX - rect.left) * scaleX;
    const clickY = (event.clientY - rect.top) * scaleY;

    const hit = hitAreasRef.current.find((area) => {
      return (
        clickX >= area.x &&
        clickX <= area.x + area.width &&
        clickY >= area.y &&
        clickY <= area.y + area.height
      );
    });

    if (!hit) return;

    const { seat } = hit;

    if (!seat.id || seat.status?.toLowerCase() !== "available") {
      return;
    }

    onSeatSelect?.(seat);
  };

  return (
    <div className="w-full overflow-x-auto">
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        role="img"
        aria-label="Interactive cinema seat layout"
        className="mx-auto block max-w-none"
      />
    </div>
  );
};

export default SeatMapCanvas;