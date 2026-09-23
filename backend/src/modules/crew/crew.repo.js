import { Crew }
  from "./movieCrew.model.js";


  export const crewRepository={
    async getMovieCrew(movieId){
       return Crew.find({
      movie: movieId,
    })
      .populate({
        path: "person",
        select:
          "name profileImage",
      });
    }
  }