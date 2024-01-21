import express from "express";
import { addMovie, getMovieById, getMovies } from "../controllers/movie-controller.js";
const movieRouter = express.Router();

movieRouter.post("/",addMovie)
movieRouter.get("/",getMovies)
movieRouter.get("/:id",getMovieById)

export default movieRouter;