import { createClient } from "redis";

import dotenv from 'dotenv'

dotenv.config()

const redisClient = createClient({
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});
redisClient.on("error", (err) => {
  console.log("Redis Error:", err);
})

export const connectRedis = async () => {
  if (!redisClient.isOpen) {
    console.log("waiting for redis connection");

    await redisClient.connect()
    console.log("Redis connected");

  }
}

export default redisClient