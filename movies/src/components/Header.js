import React, { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  TextField,
  Autocomplete,
  Tabs,
  Tab,
} from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import Box from "@mui/material/Box";
import { getAllMovies } from "./api-helpers/api-helpers.js";
import { Link } from "react-router-dom";
// const dummyArray = ["eMemory", "LifeOfPi","Avatar"];

export default function Header() {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))

      .catch((err) => console.log(err));
  }, []);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"}>
          {" "}
          <MovieCreationIcon />
        </Box>
        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={movies && movies.map((option) => option.title)}
            // options={ dummyArray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                {...params}
                placeholder="Search Across Movies"
              />
            )}
          />
        </Box>

        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            <Tab LinkComponent={Link} to="/admin" label="Admin" />
            <Tab LinkComponent={Link} to="/auth" label="Auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
