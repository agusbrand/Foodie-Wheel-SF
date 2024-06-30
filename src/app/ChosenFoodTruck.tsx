"use client";

import React from "react";
import { useFoodTruckContext } from "../context/FoodTruckContext";
import { Box, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import FoodTruckLocations from "./FoodTruckLocations";

const ChosenFoodTruck: React.FC = () => {
  const { chosenFoodTrucks } = useFoodTruckContext();

  if (chosenFoodTrucks.length === 0) {
    return null;
  }

  const foodTruckName = chosenFoodTrucks[0].name;
  const foodTruckDescription = chosenFoodTrucks[0].description;

  return (
    <Box data-cy="chosen-food-truck">
      <Stack spacing={3} marginTop={12} textAlign="center">
        <Typography
          variant="h3"
          color={green[700]}
          fontWeight={600}
          fontSize={"5rem"}
          aria-label={`Food Truck Name: ${foodTruckName}`}
        >
          {foodTruckName}
        </Typography>
        <Typography
          fontSize={"2rem"}
          aria-label={`Food Truck Description: ${foodTruckDescription}`}
        >
          {foodTruckDescription}
        </Typography>
      </Stack>

      <FoodTruckLocations foodTrucks={chosenFoodTrucks} />
    </Box>
  );
};

export default ChosenFoodTruck;
