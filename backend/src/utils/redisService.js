import redisClient from '../config/redisClient.js'

export const redisService = {
  async set(key, value, ttl = null) {
  
    const data = JSON.stringify(value)

    if (ttl) {
      await redisClient.set(key, data, { EX: ttl })
      console.log(ttl);

    } else {
      await redisClient.set(key, data)
    }

  },

  async get(key) {
    const data = await redisClient.get(key)
    return data ? JSON.parse(data) : null
  },

  async del(key) {
    await redisClient.del(key)
  },

    async deletePattern(
    pattern
  ) {

    const keys =
      await redisClient.keys(
        pattern
      )

    if (keys.length > 0) {

      await redisClient.del(
        keys
      )
    }
  },
  async incr(key, ttl = null) {
    const count = await redisClient.incr(key)
    if (ttl && count === 1) await redisClient.expire(key, ttl)
    return count
  },
   /* HASH INCREMENT */

  async hincr(
    key,
    field,
    ttl = null
  ) {

    const count =
      await redisClient.hIncrBy(

        key,

        field,

        1
      )

    if (ttl) {

      await redisClient.expire(
        key,
        ttl
      )
    }

    return count
  }
}