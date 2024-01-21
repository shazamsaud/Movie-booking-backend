import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const MovieItem = ({ title, releasedDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        margin: 3,
        width: 300,
        height: 360,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {/* <img height={"50%"} width={"100%"} alt="" /> */}
      <CardContent>
        <img height={"200"} width={"100%"} src={posterUrl} alt={title} />
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releasedDate).toDateString()}

        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ margin: "auto" }} size="small">
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
