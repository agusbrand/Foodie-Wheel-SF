"use client";

import React from "react";
import { useFoodTruckContext } from "../context/FoodTruckContext";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { green } from "@mui/material/colors";
import GoogleMapsLink from "@/components/GoogleMapsLink";

const ChosenFoodTruck: React.FC = () => {
  const { chosenFoodTrucks } = useFoodTruckContext();

  if (chosenFoodTrucks.length === 0) {
    return null;
  }

  const foodTruckName = chosenFoodTrucks[0].name;
  const foodTruckDescription = chosenFoodTrucks[0].description;

  return (
    <>
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

      <Stack spacing={5} marginTop={6}>
        <Typography fontWeight={600} fontSize={21}>
          Food Truck Locations
        </Typography>

        {chosenFoodTrucks.map((foodTruck) => (
          <Card key={foodTruck.id} variant="outlined" sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {foodTruck.type}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {foodTruck.address}
              </Typography>
              <Typography variant="body2">
                {foodTruck.addressDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <GoogleMapsLink
                latitude={foodTruck.latitude}
                longitude={foodTruck.longitude}
              />
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default ChosenFoodTruck;
