import { fetchFoodTrucks } from "../services/foodTruckService";

export default async function Home() {
  const foodTrucks = await fetchFoodTrucks();

  return (
    <main>
      <h1>The Food Truck Roulette</h1>
      <div>
        {foodTrucks.map((foodTruck) => (
          <div key={foodTruck.id}>{foodTruck.name}</div>
        ))}
      </div>
    </main>
  );
}
