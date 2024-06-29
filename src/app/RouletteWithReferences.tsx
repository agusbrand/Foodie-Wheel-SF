import { fetchFoodTrucks } from "../services/foodTruckService";
import Stack from "@mui/material/Stack";
import Roulette from "./Roulette";
import References from "./References";

const RouletteWithReferences = async () => {
  const foodTrucks = await fetchFoodTrucks();

  return (
    <Stack
      direction="row"
      spacing={10}
      useFlexGap
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <References foodTrucks={foodTrucks} />
      <Roulette foodTrucks={foodTrucks} />
    </Stack>
  );
};

export default RouletteWithReferences;
