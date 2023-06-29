import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import {
  Search,
  Upload,
  LocationOn,
  Add,
  ControlPoint,
  RemoveCircleOutline,
  Check,
} from "@mui/icons-material";

const data = [
  {
    key: "work",
    value: "Work and Travel",
  },
  {
    key: "jane",
    value: "Jane Doe",
  },
  {
    key: "mary",
    value: "Mary Phillips",
  },
  {
    key: "robert",
    value: "Robert",
  },
  {
    key: "karius",
    value: "Karius",
  },
];

const UserScreen = () => {
  const [img, setImg] = useState();
  const [imgLoading, setImgLoading] = useState(false);
  const [tags, setTags] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElItem, setAnchorElItem] = useState(null);
  const openItem = Boolean(anchorElItem);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseItem = () => {
    setAnchorElItem(null);
  };

  const handleImageInput = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickItem = (event) => {
    setAnchorElItem(event.currentTarget);
  };

  const handleCheck = (e, value) => {
    if (e.target.checked) {
      setTags((prev) => [...prev, value]);
    }
  };

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=<YOUR_API_KEY>&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  console.log({ weather });
  console.log({ location });

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "225px",
      }}
    >
      <Box border="1px solid black" sx={{ padding: "50px" }}>
        <Typography mb={5} variant="h3">
          Describe your problem
        </Typography>
        <Stack flexDirection={"row"}>
          <Box width={700}>
            <Stack
              sx={{ border: "1px solid gray" }}
              direction={"row"}
              alignItems={"center"}
              p={2}
            >
              <input
                type="text"
                placeholder="Problem ..."
                style={{ border: "none", width: "100%", fontSize: "18px" }}
                id="textField"
              />
              <label className="custom-file-upload">
                <input type="file" onChange={handleImageInput} />
                {img ? <Check fontSize="small" /> : <Upload fontSize="small" />}
              </label>

              <Button sx={{ padding: "0", ":hover": { background: "white" } }}>
                <Search fontSize="large" />
              </Button>
            </Stack>
          </Box>

          <Button
            sx={{ padding: "0", ":hover": { background: "white" } }}
            onClick={handleLocationClick}
          >
            {location ? (
              <Check sx={{ fontSize: "35px" }} />
            ) : (
              <LocationOn sx={{ fontSize: "45px" }} />
            )}
          </Button>
        </Stack>
        <Stack direction={"row"} gap={"1rem"} alignItems={"center"} mt={2}>
          {tags.map((tag) => (
            <Typography
              fontSize={"15px"}
              sx={{
                border: "1px solid blue",
                borderRadius: "25px",
                opacity: 0.8,
                color: "blue",
                padding: "10px",
              }}
            >
              {tag}
            </Typography>
          ))}
          <Button
            sx={{
              padding: 0,
              ":hover": { background: "white" },
            }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ControlPoint fontSize="large" />
          </Button>
        </Stack>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {data.map((item) => (
            <>
              <MenuItem
                key={item.key}
                id="demo-positioned-button"
                aria-controls={openItem ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openItem ? "true" : undefined}
                onClick={handleClickItem}
              >
                {item.value}
              </MenuItem>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorElItem}
                open={openItem}
                onClose={handleCloseItem}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {data.map((item) => (
                  <MenuItem
                    key={item.key}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {item.value.length > 14
                      ? `${item.value.slice(0, 10)}...`
                      : item.value}
                    <Checkbox
                      checked={tags.find((el) => el === item.value)}
                      onChange={(e) => handleCheck(e, item.value)}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </>
          ))}
        </Menu>
      </Box>
    </form>
  );
};

export default UserScreen;
