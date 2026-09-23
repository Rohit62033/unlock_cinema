import redisClient from "./redisClient.js";

const cache = {

  async get(key) {

    const data =
      await redisClient.get(key);

    return data
      ? JSON.parse(data)
      : null;
  },

  async set(
    key,
    value,
    ttl = null
  ) {

    const data =
      JSON.stringify(value);

    if (ttl) {

      await redisClient.set(
        key,
        data,
        { EX: ttl }
      );

    } else {

      await redisClient.set(
        key,
        data
      );
    }
  },

  async del(key) {

    await redisClient.del(...key);
  },

  async delPattern(pattern) {

    const keys = [];

    const iterator =
      redisClient.scanIterator({
        MATCH: pattern,
        COUNT: 100
      });

    for await (const key of iterator) {
      keys.push(...key);
    }

    if (keys.length > 0) {
      await redisClient.del(...keys);
    }
  }
};

export default cache;