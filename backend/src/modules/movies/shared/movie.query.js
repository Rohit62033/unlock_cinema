
export const buildMovieFilters = (query = {}) => {
  const filters = {
    isDeleted: false,
  };

  console.log(query);
  

  /* STATUS */
  if (query.status) {
    filters.status = query.status;
  }

  /* SEARCH */
  if (query.search) {
    filters.$text = {
      $search: query.search,
    };
  }

  /* LANGUAGE */
  if (query.language) {
    filters.language = {
      $in: query.language.split(","),
    };
  }

  /* GENRE */
  if (query.genre) {
    filters.genre = {
      $in: query.genre.split(","),
    };
  }

  /* FORMATS */
  if (query.formats) {
    filters.formats = {
      $in: query.formats.split(','), // Fixed typo: changed query.format to query.formats
    };
  }

  /* CITY */
  if (query.city) {
    filters.city = query.city;
  }

  return filters;
};

export const buildMovieSort =
  (sort) => {

    switch (sort) {

      case 'oldest':
        return {
          createdAt: 1
        }

      case 'rating':
        return {
          averageRating: -1
        }

      case 'releaseDate':
        return {
          releaseDate: -1
        }

      default:
        return {
          createdAt: -1
        }
    }
  }

export const normalizeMovieQuery =
  (query, userCity) => {

    const page =
      Number(query.page) || 1

    const limit =
      Math.min(
        Number(query.limit) || 20,
        50
      )

    return {

      city:
        userCity || query.city || null,

      language:
        query.language || null,

      genre:
        query.genre || null,



      page,

      limit,

      skip:
        (page - 1) * limit,
    }
  }


//   export const buildMovieFilters =
// ({
//   city,
//   language,
//   genre
// }) => {

//   return {
//     city,
//     language,
//     genre,
//   }
// }