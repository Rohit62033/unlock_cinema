export const serializeProfile = (user) => {
  return {
    id: user._id,

    username: user.username,

    firstName: user.firstName,

    lastName: user.lastName,

    email: user.email,

    emailVerified: user.emailVerified || true,

    mobile: user.mobile,

    mobileVerified: user.mobileVerified,

    dob: user.dob,

    gender: user.gender,

    married: user.married,

    avatar: {
      url:user?.avatar?.url
    },

    preferences: user.preferences,
    
    city: user.city
      ? {
        id: user.city._id,
        name: user.city.name,
        slug: user.city.slug,
      }
      : null,

    createdAt: user.createdAt,

  }
}