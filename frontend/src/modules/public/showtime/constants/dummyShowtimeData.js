export const dummyShowtimeData = {

  movie: {
    id: "1",

    title: "Interstellar",

    language: "Hindi",

    duration: "1h 57m",

    certification: "UA16+",

    genres: [
      "Drama",
      "Thriller",
    ],
  },

  dates: [
    {
      id: 1,

      day: "SAT",

      displayDate: 16,

      month: "MAY",

      hasShows: true,
    },

    {
      id: 2,

      day: "SUN",

      displayDate: 17,

      month: "MAY",

      hasShows: false,
    },

    {
      id: 3,

      day: "MON",

      displayDate: 18,

      month: "MAY",

      hasShows: true,
    },
  ],

  theatres: [
    {
      id: "t1",

      name:
        "PVR: Nucleus Mall, Ranchi",

      amenities: [
        "Cancellation Available",
      ],

      shows: [
        {
          id: "s1",

          time: "10:30 AM",

          price: 220,

          status: "AVAILABLE",
        },

        {
          id: "s2",

          time: "01:45 PM",

          price: 250,

          status: "FAST_FILLING",
        },
      ],
    },

    {
      id: "t2",

      name:
        "INOX: Spring City Mall",

      amenities: [
        "Food & Beverage",
      ],

      shows: [
        {
          id: "s3",

          time: "04:00 PM",

          price: 180,

          status: "AVAILABLE",
        },
      ],
    },
  ],
};