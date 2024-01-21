import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../api-helpers/api-helpers.js'
import MovieItem from './MovieItem';

const Movies = () => {
  const [movies, setMovies]=useState();
  useEffect (() => { 
    getAllMovies()
    .then((data)=> setMovies(data.movies))
    .catch(err=>console.log(err));
  },[])
  return (
    <Box width={"70%"}  margin={"auto"} marginTop={4}>
      <Typography margin={"auto"} varient="h4" padding={2} textAlign={"center"} width={"40%"} bgcolor={"#900C3F"} color={"white"}>All Movies</Typography>
      <Box 
      width={"100%"} 
    
      marginTop={5}
      margin={"auto"}
    
       
      display={"flex"} justifyContent={"flex-start"} flexWrap={"wrap"}
      >
        {movies && movies.map((movie,index)=> <MovieItem key={index} id={movie.id} posterUrl={movie.posterUrl} releasedDate={movie.releasedDate} title={movie.title}></MovieItem>)}

      </Box>
    </Box>
  )
}

export default Movies
