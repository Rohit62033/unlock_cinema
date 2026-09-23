

import mongoose from "mongoose";


// Replace these with your actual MongoDB genre ObjectIds
const SCI_FI_GENRE_ID = new mongoose.Types.ObjectId(
  "6a11a535b6fafb2d4f8b5c90"
);

const DRAMA_GENRE_ID = new mongoose.Types.ObjectId(
  "6a11a7d2b6fafb2d4f8b5cac"
);

const ACTION_GENRE_ID = new mongoose.Types.ObjectId(
  "6a11a535b6fafb2d4f8b5c90"
);

const THRILLER_GENRE_ID = new mongoose.Types.ObjectId(
  "6a11a7d2b6fafb2d4f8b5cac"
);

const movies = [
  // -------------------------------------------------------
  // 1. INTERSTELLAR
  // -------------------------------------------------------
  {
    title: "Interstellar",

    genres: [
      SCI_FI_GENRE_ID,
      DRAMA_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 169,

    releaseDate: new Date("2014-11-28T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/a4d3ff65wj0g1urm7i84.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/pzckngjbvpq0ip7envbi.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "A team of explorers travel through a mysterious wormhole in space in an attempt to ensure humanity’s survival as Earth faces environmental collapse. Driven by emotion, sacrifice, and the bond between a father and daughter, Interstellar blends breathtaking science fiction with a deeply human story across time and space.",

    publishedAt: new Date("2026-05-23T20:35:09.634Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 5,

    totalReviews: 1,

    createdAt: new Date("2026-03-20T10:21:00.202Z"),

    updatedAt: new Date("2026-05-27T04:35:45.419Z"),
  },

  // -------------------------------------------------------
  // 2. INCEPTION
  // -------------------------------------------------------
  {
    title: "Inception",

    genres: [
      SCI_FI_GENRE_ID,
      THRILLER_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 148,

    releaseDate: new Date("2010-07-16T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/inception.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/inception.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "A skilled extractor who steals secrets through shared dreams is given an impossible task: planting an idea inside the mind of a powerful businessman. As layers of dreams unfold, reality and illusion begin to blur.",

    publishedAt: new Date("2026-05-24T10:30:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.8,

    totalReviews: 24,

    createdAt: new Date("2026-03-21T10:00:00.000Z"),

    updatedAt: new Date("2026-05-28T08:30:00.000Z"),
  },

  // -------------------------------------------------------
  // 3. THE DARK KNIGHT
  // -------------------------------------------------------
  {
    title: "The Dark Knight",

    genres: [
      ACTION_GENRE_ID,
      DRAMA_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 152,

    releaseDate: new Date("2008-07-18T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/dark-knight.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/dark-knight.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "Batman faces a criminal mastermind whose reign of chaos pushes Gotham City toward its limits. With the help of allies and the determination of a city prosecutor, Batman must confront a threat unlike anything he has faced before.",

    publishedAt: new Date("2026-05-25T09:15:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.9,

    totalReviews: 36,

    createdAt: new Date("2026-03-22T09:30:00.000Z"),

    updatedAt: new Date("2026-05-29T07:45:00.000Z"),
  },

  // -------------------------------------------------------
  // 4. AVENGERS: ENDGAME
  // -------------------------------------------------------
  {
    title: "Avengers: Endgame",

    genres: [
      ACTION_GENRE_ID,
      SCI_FI_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 181,

    releaseDate: new Date("2019-04-26T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/avengers-endgame.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/avengers-endgame.jpg",
    },

    formats: [
      "2D",
      "3D",
      "IMAX",
    ],

    description:
      "After a devastating event changes the fate of the universe, the remaining Avengers attempt one final mission to restore what was lost. Their journey brings together heroes, sacrifice, friendship, and a final battle for the future.",

    publishedAt: new Date("2026-05-26T11:00:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.7,

    totalReviews: 42,

    createdAt: new Date("2026-03-23T11:00:00.000Z"),

    updatedAt: new Date("2026-05-30T09:00:00.000Z"),
  },

  // -------------------------------------------------------
  // 5. DUNE: PART TWO
  // -------------------------------------------------------
  {
    title: "Dune: Part Two",

    genres: [
      SCI_FI_GENRE_ID,
      DRAMA_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 166,

    releaseDate: new Date("2024-03-01T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/dune-part-two.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/dune-part-two.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "Paul Atreides joins the Fremen and begins a journey toward revenge and destiny. As conflict spreads across Arrakis, he must navigate politics, prophecy, love, and the consequences of becoming a symbol of resistance.",

    publishedAt: new Date("2026-05-27T12:30:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.6,

    totalReviews: 28,

    createdAt: new Date("2026-03-24T12:00:00.000Z"),

    updatedAt: new Date("2026-05-31T10:30:00.000Z"),
  },

  // -------------------------------------------------------
  // 6. OPPENHEIMER
  // -------------------------------------------------------
  {
    title: "Oppenheimer",

    genres: [
      DRAMA_GENRE_ID,
      THRILLER_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 180,

    releaseDate: new Date("2023-07-21T00:00:00.000Z"),

    certification: "A",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/oppenheimer.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/oppenheimer.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "The story follows J. Robert Oppenheimer and the scientific effort behind the development of the first atomic bomb. The film explores ambition, responsibility, political pressure, and the consequences of scientific discovery.",

    publishedAt: new Date("2026-05-28T14:00:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.5,

    totalReviews: 31,

    createdAt: new Date("2026-03-25T14:00:00.000Z"),

    updatedAt: new Date("2026-06-01T11:00:00.000Z"),
  },

  // -------------------------------------------------------
  // 7. THE MARTIAN
  // -------------------------------------------------------
  {
    title: "The Martian",

    genres: [
      SCI_FI_GENRE_ID,
      DRAMA_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 144,

    releaseDate: new Date("2015-10-02T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/the-martian.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/the-martian.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "After being presumed dead and left behind on Mars, an astronaut must use his scientific knowledge and ingenuity to survive while NASA works to bring him home.",

    publishedAt: new Date("2026-05-29T15:30:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.4,

    totalReviews: 19,

    createdAt: new Date("2026-03-26T15:30:00.000Z"),

    updatedAt: new Date("2026-06-02T12:30:00.000Z"),
  },

  // -------------------------------------------------------
  // 8. AVATAR: THE WAY OF WATER
  // -------------------------------------------------------
  {
    title: "Avatar: The Way of Water",

    genres: [
      SCI_FI_GENRE_ID,
      ACTION_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 192,

    releaseDate: new Date("2022-12-16T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/avatar-way-of-water.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/avatar-way-of-water.jpg",
    },

    formats: [
      "2D",
      "3D",
      "IMAX",
    ],

    description:
      "Jake Sully and Neytiri have built a family on Pandora, but a returning human threat forces them to leave their home and seek refuge among the ocean-dwelling Metkayina clan.",

    publishedAt: new Date("2026-05-30T16:00:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.3,

    totalReviews: 22,

    createdAt: new Date("2026-03-27T16:00:00.000Z"),

    updatedAt: new Date("2026-06-03T13:00:00.000Z"),
  },

  // -------------------------------------------------------
  // 9. TENET
  // -------------------------------------------------------
  {
    title: "Tenet",

    genres: [
      SCI_FI_GENRE_ID,
      ACTION_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 150,

    releaseDate: new Date("2020-09-03T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/tenet.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/tenet.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "A secret agent becomes involved in a global mission where time itself can be manipulated. As opposing forces move forward and backward through time, he must uncover the mystery behind an impending catastrophe.",

    publishedAt: new Date("2026-05-31T17:30:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.2,

    totalReviews: 17,

    createdAt: new Date("2026-03-28T17:30:00.000Z"),

    updatedAt: new Date("2026-06-04T14:00:00.000Z"),
  },

  // -------------------------------------------------------
  // 10. JOKER
  // -------------------------------------------------------
  {
    title: "Joker",

    genres: [
      DRAMA_GENRE_ID,
      THRILLER_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 122,

    releaseDate: new Date("2019-10-02T00:00:00.000Z"),

    certification: "A",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/joker.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/joker.jpg",
    },

    formats: [
      "2D",
      "IMAX",
    ],

    description:
      "Set in a troubled Gotham City, a struggling comedian gradually descends into a darker identity as social isolation, personal hardship, and a changing city reshape his life.",

    publishedAt: new Date("2026-06-01T18:00:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.1,

    totalReviews: 15,

    createdAt: new Date("2026-03-29T18:00:00.000Z"),

    updatedAt: new Date("2026-06-05T15:00:00.000Z"),
  },

  // -------------------------------------------------------
  // 11. GUARDIANS OF THE GALAXY VOL. 3
  // -------------------------------------------------------
  {
    title: "Guardians of the Galaxy Vol. 3",

    genres: [
      ACTION_GENRE_ID,
      SCI_FI_GENRE_ID,
    ],

    languages: [
      "English",
      "Hindi",
    ],

    duration: 150,

    releaseDate: new Date("2023-05-05T00:00:00.000Z"),

    certification: "UA",

    isActive: true,

    poster: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856513/movies/posters/guardians-vol-3.jpg",
    },

    banner: {
      url: "https://res.cloudinary.com/didapjeso/image/upload/v1779856516/movies/banners/guardians-vol-3.jpg",
    },

    formats: [
      "2D",
      "3D",
      "IMAX",
    ],

    description:
      "The Guardians face a dangerous mission connected to Rocket’s past. As the team travels across the galaxy, they must confront old enemies, personal memories, and the possibility of losing one of their own.",

    publishedAt: new Date("2026-06-02T19:00:00.000Z"),

    status: "LIVE",

    subtitleLanguages: [
      "English",
      "Hindi",
    ],

    isDeleted: false,

    averageRating: 4.0,

    totalReviews: 13,

    createdAt: new Date("2026-03-30T19:00:00.000Z"),

    updatedAt: new Date("2026-06-06T16:00:00.000Z"),
  },
];

// =======================================================
// SEED FUNCTION
// =======================================================

const seedMovies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected.");

    // Optional:
    // Remove existing movies before inserting seed data.
    await Movie.deleteMany({});

    const insertedMovies = await Movie.insertMany(movies);

    console.log(
      `Successfully inserted ${insertedMovies.length} movies.`
    );

    process.exit(0);
  } catch (error) {
    console.error("Movie seeding failed:", error);

    process.exit(1);
  }
};

seedMovies();