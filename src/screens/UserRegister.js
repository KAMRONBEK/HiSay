import { Upload, Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegister = ({ setAuth }) => {
  const handleSubmit = () => {
    setAuth(true);
  };
  const [isService, setIsService] = useState(false);
  const [img, setImg] = useState();
  const navigate = useNavigate();
  const handleImageInput = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      my={"50px"}
    >
      <form onSubmit={handleSubmit}>
        <Box
          width={"700px"}
          padding={"25px 50px"}
          rowGap={"1.5rem"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          sx={{ boxShadow: "0px 0px 2px 0px", borderRadius: "5px" }}
        >
          <Typography variant="h4" component="h1" align="center">
            Create an Account
          </Typography>
          <Stack>
            <Typography variant="body1" color={"GrayText"}>
              Full Name
            </Typography>
            <TextField size="small" type="text" />
          </Stack>
          <Stack>
            <Typography variant="body1" color={"GrayText"}>
              Phone Number
            </Typography>
            <TextField size="small" type="number" />
          </Stack>
          {isService && (
            <>
              <Stack>
                <Typography variant="body1" color={"GrayText"}>
                  Passport number
                </Typography>
                <TextField size="small" type="number" />
              </Stack>
              <Stack direction={"row"} gap={"1rem"}>
                <Typography variant="body1" color={"GrayText"}>
                  Passport picture
                </Typography>
                <label
                  className="custom-file-upload"
                  style={{ width: "46px" }}
                  onChange={handleImageInput}
                >
                  <input type="file" />
                  {img ? (
                    <Check fontSize="small" />
                  ) : (
                    <Upload fontSize="small" />
                  )}
                </label>
              </Stack>
            </>
          )}
          <Stack>
            <Typography variant="body1" color={"GrayText"}>
              Password
            </Typography>
            <TextField size="small" type="password" required />
          </Stack>
          <Stack>
            <Typography variant="body1" color={"GrayText"}>
              Repeat Password
            </Typography>
            <TextField size="small" type="password" required />
          </Stack>
          <Button fullWidth type="submit" variant="contained">
            Submit
          </Button>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography>Register as service agent</Typography>
            <Checkbox
              value={isService}
              onChange={(e) => setIsService(e.target.checked)}
            />
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography>Have an account</Typography>
            <Button onClick={() => navigate("/login")}>Log in</Button>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default UserRegister;
