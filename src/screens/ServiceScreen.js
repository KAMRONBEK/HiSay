import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import problemImage from "../assets/woman.jpg";

const dummyData = [
  {
    problemName: "This is the problem no 1",
    categories: ["tag 1", "tag 2", "tag 3"],
    problemImg: problemImage,
  },
  {
    problemName: "This is the problem no 2",
    categories: ["tag 1", "tag 2", "tag 3"],
    problemImg: problemImage,
  },
  {
    problemName: "This is the problem no 3",
    categories: ["tag 1", "tag 2", "tag 3"],
    problemImg: problemImage,
  },
  {
    problemName: "This is the problem no 4",
    categories: ["tag 1", "tag 2", "tag 3"],
    problemImg: problemImage,
  },
];

const ServiceScreen = () => {
  return (
    <Box marginTop={"100px"} sx={{ display: "flex", justifyContent: "center" }}>
      <Stack width={"800px"} gap={"2rem"}>
        {dummyData.map((item) => (
          <Stack
            sx={{ border: "1px solid gray" }}
            padding={"15px"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Stack>
              <Typography>{item.problemName}</Typography>
              <Stack direction={"row"} columnGap={"0.5rem"} mt={"20px"}>
                {item.categories.map((tag) => (
                  <Typography variant="p">{tag}</Typography>
                ))}
              </Stack>
            </Stack>

            <img src={item.problemImg} width={"150px"} height={"100px"} />
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ServiceScreen;
