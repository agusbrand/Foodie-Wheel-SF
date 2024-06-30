import Container from "@mui/material/Container";
import { FoodTruckContextProvider } from "../context/FoodTruckContext";
import Hero from "../components/Hero";
import RouletteWithReferences from "./RouletteWithReferences";
import ChosenFoodTruck from "./ChosenFoodTruck";

export default function Home() {
  return (
    <main>
      <FoodTruckContextProvider>
        <Container maxWidth="lg">
          <Hero
            title={"Foodie Wheel SF"}
            description={
              "Spin the wheel and let the roulette decide your next food truck destination!"
            }
          />
          <RouletteWithReferences />
          <ChosenFoodTruck />
        </Container>
      </FoodTruckContextProvider>
    </main>
  );
}
