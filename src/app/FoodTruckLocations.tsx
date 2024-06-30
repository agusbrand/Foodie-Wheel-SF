import React from "react";
import {
  Stack,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import GoogleMapsLink from "@/components/GoogleMapsLink";
import { FoodTruck } from "../types/FoodTruck";

interface FoodTruckLocationsProps {
  foodTrucks: FoodTruck[];
}

const FoodTruckCard: React.FC<{ foodTruck: FoodTruck }> = ({ foodTruck }) => {
  return (
    <Card key={foodTruck.id} variant="outlined" sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {foodTruck.type}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {foodTruck.address}
        </Typography>
        <Typography variant="body2">{foodTruck.addressDescription}</Typography>
      </CardContent>
      <CardActions>
        <GoogleMapsLink
          latitude={foodTruck.latitude}
          longitude={foodTruck.longitude}
        />
      </CardActions>
    </Card>
  );
};

const FoodTruckLocations: React.FC<FoodTruckLocationsProps> = ({
  foodTrucks,
}) => {
  return (
    <Stack spacing={5} marginTop={6}>
      <Typography fontWeight={600} fontSize={21}>
        Food Truck Locations
      </Typography>

      {foodTrucks.map((foodTruck) => (
        <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
      ))}
    </Stack>
  );
};

export default FoodTruckLocations;
