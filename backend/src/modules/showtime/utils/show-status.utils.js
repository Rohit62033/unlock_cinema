export const getShowAvailabilityStatus = ({
  totalSeats,
  availableSeats,
}) => {
  if (totalSeats === 0) {
    return "SOLD_OUT";
  }

  if (availableSeats === 0) {
    return "SOLD_OUT";
  }
 
  const percentage =
    (availableSeats / totalSeats) * 100;

  if (percentage <= 20) {
    return "FAST_FILLING";
  }

  return "AVAILABLE";
};