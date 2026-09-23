// show-seat.repository.js


import { ShowSeat } from "./showSeat.model.js";

export const createMany = async (
  showSeats,
  session = null
) => {
  return ShowSeat.insertMany(
    showSeats,
    session ? { session } : undefined
  );
};

// export const showSeatRepo = {

//   async createShow(payload, session = null) {
//     const [show] = await Show.create(
//       [payload],
//       session ? { session } : undefined
//     );

//     return show;
//   }
// }