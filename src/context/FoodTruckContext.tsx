"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { FoodTruck } from "../types/FoodTruck";

interface FoodTruckContext {
  chosenFoodTrucks: FoodTruck[] | [];
  setChosenFoodTrucks: (value: FoodTruck[]) => void;
}

const FoodTruckContext = createContext<FoodTruckContext | undefined>(undefined);

export const FoodTruckContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [chosenFoodTrucks, setChosenFoodTrucks] = useState<FoodTruck[] | []>(
    []
  );

  return (
    <FoodTruckContext.Provider
      value={{ chosenFoodTrucks, setChosenFoodTrucks }}
    >
      {children}
    </FoodTruckContext.Provider>
  );
};

export const useFoodTruckContext = (): FoodTruckContext => {
  const context = useContext(FoodTruckContext);
  if (!context) {
    throw new Error(
      "useFoodTruckContext must be used within a FoodTruckContextProvider"
    );
  }
  return context;
};
