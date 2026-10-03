import mongoose from "mongoose";
import { Show } from "../shows/show/show.model.js";


export const findMovieShowtimes = async ({
  movieId,
  city,
  startDate,
  endDate,
}) => {

  console.log( movieId,
  city,
  startDate,
  endDate,);
  

    const movieObjectId =
   new mongoose.Types.ObjectId(movieId);

const result = await Show.aggregate([
  {
    $match: {
      movie: movieObjectId,

      startTime: {
        $gte: startDate,
        $lte: endDate,
      },

      status: {
        $in: [
          "SCHEDULED",
          "LIVE",
        ],
      },
    },
  },

  {
    $lookup: {
      from: "theatres",

      localField: "theatre",

      foreignField: "_id",

      as: "theatre",
    },
  },

  {
  $unwind: "$theatre"
},

{
  $match: {
    "theatre.isActive": true,
  },
},

{
  $lookup: {
    from: "cities",

    localField: "theatre.city",

    foreignField: "_id",

    as: "city",
  },
},

{
  $unwind: "$city",
},
{
  $match: {
    "city.isActive": true,
  },
},
{
  $match: {
    "city.name": {
      $regex: "^Ranchi$",
      $options: "i",
    },
  },
},

]);

return result
};

// export const findMovieShowtimes = async ({

//   movieId,
//   city,
//   startDate,
//   endDate,
// }) => {
//   const movieObjectId =
//     new mongoose.Types.ObjectId(movieId);

//   const now = new Date();

  

//   const pipeline = [
//     {
//       $match: {
//         movie: movieObjectId,

//         startTime: {
//           $gte: startDate,
//           $lte: endDate,
//         },

//         status: {
//           $in: [
//             "SCHEDULED",
//             "LIVE",
//           ],
//         },
//       },
//     },

//     {
//       $lookup: {
//         from: "theatres",

//         localField: "theatre",

//         foreignField: "_id",

//         as: "theatre",
//       },
//     },

//     {
//       $unwind: "$theatre",
//     },

//     {
//       $match: {
//         "theatre.isActive": true,
//       },
//     },

//     {
//       $lookup: {
//         from: "cities",

//         localField: "theatre.city",

//         foreignField: "_id",

//         as: "city",
//       },
//     },

//     {
//       $unwind: "$city",
//     },

//     {
//       $match: {
//         "city.isActive": true,
//       },
//     },
//   ];

//   if (city) {
//     pipeline.push({
//       $match: {
//         "city.name": {
//           $regex: city,
//           $options: "i",
//         },
//       },
//     });
//   }

//   pipeline.push(
//     {
//       $lookup: {
//         from: "showseats",

//         let: {
//           showId: "$_id",
//         },

//         pipeline: [
//           {
//             $match: {
//               $expr: {
//                 $eq: [
//                   "$show",
//                   "$$showId",
//                 ],
//               },
//             },
//           },

//           {
//             $project: {
//               status: 1,
//               lockExpiresAt: 1,
//             },
//           },
//         ],

//         as: "seatAvailability",
//       },
//     },

//     {
//       $addFields: {
//         totalSeats: {
//           $size: "$seatAvailability",
//         },

//         availableSeats: {
//           $size: {
//             $filter: {
//               input: "$seatAvailability",

//               as: "seat",

//               cond: {
//                 $or: [
//                   {
//                     $eq: [
//                       "$$seat.status",
//                       "available",
//                     ],
//                   },

//                   {
//                     $and: [
//                       {
//                         $eq: [
//                           "$$seat.status",
//                           "locked",
//                         ],
//                       },

//                       {
//                         $lte: [
//                           "$$seat.lockExpiresAt",
//                           now,
//                         ],
//                       },
//                     ],
//                   },
//                 ],
//               },
//             },
//           },
//         },
//       },
//     },

//     {
//       $addFields: {
//         availabilityPercentage: {
//           $cond: [
//             {
//               $gt: [
//                 "$totalSeats",
//                 0,
//               ],
//             },

//             {
//               $multiply: [
//                 {
//                   $divide: [
//                     "$availableSeats",
//                     "$totalSeats",
//                   ],
//                 },

//                 100,
//               ],
//             },

//             0,
//           ],
//         },
//       },
//     },

//   {
//   $project: {
//     _id: 1,

//     startTime: 1,
//     endTime: 1,

//     basePrice: 1,

//     language: 1,
//     format: 1,

//     status: 1,

//     totalSeats: 1,
//     availableSeats: 1,
//     availabilityPercentage: 1,

//     theatre: {
//       _id: "$theatre._id",
//       name: "$theatre.name",
//     },

//     city: {
//       _id: "$city._id",
//       name: "$city.name",
//     },
//   },
// },

//     {
//       $sort: {
//         startTime: 1,
//       },
//     }
//   );

//   return Show.aggregate(pipeline);
// };