import Table from "../components/Table";
import { FoodTrucks } from "../types/FoodTruck";

const References = ({ foodTrucks }: { foodTrucks: FoodTrucks }) => {
  const rows = Object.keys(foodTrucks).map((foodTruckName, index) => {
    return { id: index + 1, name: foodTruckName };
  });

  return <Table rows={rows} />;
};

export default References;
