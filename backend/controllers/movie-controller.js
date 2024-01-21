import mongoose from "mongoose";
import Movie from "../models/Movie.js"
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js"
export const addMovie = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1];
  if (!extractedToken && extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" });
  }
  let adminId;

  //   verify
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(404).json({ message: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }   
  });

  // create new movie
  const { title, description, releasedDate, posterUrl, featured } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !releasedDate &&
    releasedDate.trim() === "" &&
    !posterUrl &&
    posterUrl.trim() === "" &&
    !featured &&
    featured.trim() === "" 
  ) {
    return res.status(422).json({ message: "Invalid input" });
  }
  let movie;
  try {
    movie = new Movie({
      title,
      description,
      releasedDate: new Date(`${releasedDate}`),
      posterUrl,
      featured,
      admin:adminId,
    });
   const session = await mongoose.startSession();
   const adminUser = await Admin.findById(adminId);
   session.startTransaction();
   await movie.save({session});
   adminUser.addedMovies.push(movie);
   await adminUser.save({session});
   await session.commitTransaction();

  } catch (err) {
    return console.log(err);
  }
  if (!movie) {
    return res.status(500).json({ message: "cant store movie" });
  }
  return res.status(201).json({ movie });
};



export const getMovies = async(req,res,next)=>{
    let movies;
    try {
     
      movies = await Movie.find();

      } catch (err) {
        return console.log(err);
      }
      if (!movies) {
        return res.status(500).json({ message: "cant show movie" });
      }
      return res.status(201).json({ movies});

}



export const getMovieById = async(req,res,next)=>{
    const id = req.params.id;
    let movie;
    try {
     
      movie = await Movie.findById(id);

      } catch (err) {
        return console.log(err);
      }
      if (!movie) {
        return res.status(404).json({ message: "Invalid movie" });
      }
      return res.status(201).json({ movie});
}



