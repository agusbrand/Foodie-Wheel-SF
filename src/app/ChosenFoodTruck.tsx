"use client";

import { useFoodTruckContext } from "../context/FoodTruckContext";
import { Box, Typography } from "@mui/material";

const ChosenFoodTruck = () => {
  const { chosenFoodTrucks } = useFoodTruckContext();

  if (chosenFoodTrucks.length === 0) {
    return null;
  }

  const foodTruckName = chosenFoodTrucks[0].name;
  const foodTruckDescription = chosenFoodTrucks[0].description;

  return (
    <Box>
      <Typography variant="h2">{foodTruckName}</Typography>
      <Typography>{foodTruckDescription}</Typography>

      {chosenFoodTrucks.map((foodTruck, index) => (
        <Box key={index} borderBottom="solid 2px black">
          <Typography key={index} variant="h4">
            {foodTruck.name}
          </Typography>
          <Typography>{foodTruck.type}</Typography>
          <Typography>{foodTruck.address}</Typography>
          <Typography>{foodTruck.addressDescription}</Typography>
          <Typography>{foodTruck.latitude}</Typography>
          <Typography>{foodTruck.longitude}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChosenFoodTruck;
