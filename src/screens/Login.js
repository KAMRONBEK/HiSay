import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = () => {
    setAuth(true);
    navigate("/");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(315deg, #718cb7 0%, #cddada 100%)",
      }}
    >
      <form
        style={{
          width: "500px",
          background: "white",

          borderRadius: "10px",
          boxShadow: "0 2px 25px rgba(0, 0, 0, 0.2)",
        }}
        onSubmit={submitHandler}
      >
        <Box padding={"15px 10px"}>
          <Typography variant="h4" marginLeft={2} marginTop={3}>
            Login
          </Typography>
          <Stack width={"100%"} paddingX={4} mt={5} rowGap={3}>
            <TextField
              type="number"
              variant="standard"
              placeholder="Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              type="text"
              variant="standard"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Stack>
        </Box>
        <Stack direction={"row"} sx={{ width: "100%" }} marginTop="25px">
          <Button
            sx={{
              flex: 1,
              borderRadius: "0px 0px 0px 10px",
              boxShadow: "none",
            }}
            variant="contained"
            color="success"
            size="large"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
          <Button
            sx={{
              flex: 1,
              borderRadius: "0px 0px 10px 0px",
              boxShadow: "none",
            }}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Sign In
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
