import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import passport from "./src/config/passport.config.js";

// Route Imports
import authRoutes from './src/modules/auth/auth.routes.js';
import movieRoutes from './src/modules/movies/movie.routes.js';
import uploadRoutes from './src/modules/upload/upload.routes.js';
import cityRoutes from './src/modules/theatres/city/city.routes.js';
import theatreRoutes from './src/modules/theatres/theatre/theatre.routes.js';
import screenRoutes from './src/modules/theatres/screen/screen.routes.js';
import seatLayoutRoutes from './src/modules/theatres/seatLayout/seatLayout.routes.js';
import showRoutes from './src/modules/shows/show/show.routes.js';
import showSeatRoutes from './src/modules/shows/showSeat/showSeat.routes.js';
import bookingRoutes from './src/modules/bookings/booking.routes.js';
import paymentRoutes from './src/modules/payments/payment.routes.js';
import locationRoutes from './src/modules/location/location.route.js'
import reviewRoutes from './src/modules/review/review.routes.js'
import castRoute from './src/modules/cast/cast.routes.js'
import personRoute from './src/modules/person/person.routes.js'
import genreRoute from './src/modules/genre/routes/genre.routes.js'
import profileRoute from './src/modules/profile/profile.routes.js'

// Middleware Imports
import { errorHandler } from './src/middlewares/error.middleware.js';

const app = express();

// --- Middleware Configuration ---

console.log("FRONTEND_URL:", process.env.CLIENT_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);

const allowedOrigins = process.env.CLIENT_URL
  .split(",")
  .map((origin) => origin.trim());


app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

// --- Route Declarations ---
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/theatres", theatreRoutes);
app.use("/api/screens", screenRoutes);
app.use("/api/seat-layouts", seatLayoutRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/show-seat", showSeatRoutes);
app.use("/api/bookings", bookingRoutes);
app.use('/api/location', locationRoutes)
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes)
app.use("/api/casts", castRoute)
app.use("/api/persons", personRoute)
app.use("/api/genres", genreRoute)
app.use("/api/profile", profileRoute);



// --- Error Handling ---
// Note: errorHandler must be the last middleware added
app.use(errorHandler);

export default app;