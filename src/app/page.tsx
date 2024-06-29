import Container from "@mui/material/Container";
import { FoodTruckContextProvider } from "../context/FoodTruckContext";
import Hero from "../components/Hero";
import RouletteWithReferences from "./RouletteWithReferences";
import ChosenFoodTruck from "./ChosenFoodTruck";

export default async function Home() {
  return (
    <main>
      <FoodTruckContextProvider>
        <Container>
          <Hero
            title={"The Food Truck Roulette"}
            description={
              "Spin the wheel and let The Food Truck Roulette decide your next food truck destination!"
            }
          />
          <RouletteWithReferences />
          <ChosenFoodTruck />
        </Container>
      </FoodTruckContextProvider>
    </main>
  );
}
