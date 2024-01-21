import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


const AuthForm = ({onSubmit,isAdmin}) => {
 
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignup, setIsSignup] = useState(false);  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value,

      
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({inputs , signup : isAdmin ? false : isSignup});
    // onSubmit?.(inputs);
  };

 
// PaperProps={{ style: { borderRadius: 40 } }}
  return (
    <Dialog  open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {isSignup ? "Signup " : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={400}
          alignContent={"center"}
          padding={6}
        >
          { !isAdmin && isSignup && (
            <>
              <FormLabel sx={{ mt: 1, mb: 1 }}>Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                variant="standard"
                type="text"
                name="name"
              />
            </>
          )}

          <FormLabel sx={{ mt: 1, mb: 1 }}>Email</FormLabel>
          <TextField
            value={inputs.email}
            onChange={handleChange}
            variant="standard"
            type="email"
            name="email"
          />
          <FormLabel sx={{ mt: 1, mb: 1 }}>Password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={handleChange}
            variant="standard"
            type="password"
            name="password"
          />
          <Button sx={{ mt: 1, mb: 1 }} variant="contained" type="submit">
            {isSignup ? "Signup " : "Login"}
          </Button>
         { !isAdmin && (<Button onClick={() => setIsSignup(!isSignup)} sx={{ mt: 1, mb: 1 }}>
            Switch to {isSignup ? "Login" : "Signup"}
          </Button>)}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
