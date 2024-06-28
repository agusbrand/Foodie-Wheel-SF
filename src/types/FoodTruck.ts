enum FoodTruckType {
  Truck = "Truck",
  PushCart = "Push Cart",
}

export interface FoodTruck {
  id: string;
  name: string;
  type: FoodTruckType;
  description: string;
  latitude: string;
  longitude: string;
  address: string;
  addressDescription: string;
}
