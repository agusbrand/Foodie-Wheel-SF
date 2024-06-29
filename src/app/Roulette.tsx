"use client";
import { useState } from "react";
import { useFoodTruckContext } from "../context/FoodTruckContext";
import dynamic from "next/dynamic";
import { grey, blueGrey, lightBlue } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { FoodTrucks } from "../types/FoodTruck";

const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          minWidth: "445px",
          minHeight: "445px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    ),
  }
);

const Roulette = ({ foodTrucks }: { foodTrucks: FoodTrucks }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { setChosenFoodTrucks } = useFoodTruckContext();

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const onStopSpinning = () => {
    setMustSpin(false);
    const chosenFoodTruckName: string = Object.keys(foodTrucks)[prizeNumber];

    setChosenFoodTrucks(foodTrucks[chosenFoodTruckName]);
  };

  const data = Object.keys(foodTrucks).map((foodTruck, index) => ({
    option: index + 1,
    style: {
      backgroundColor: index % 2 === 0 ? blueGrey[50] : lightBlue[500],
      textColor: "black",
    },
  }));

  return (
    <Box textAlign="center">
      <Box>
        <Wheel
          startingOptionIndex={0}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          disableInitialAnimation={true}
          spinDuration={0.3}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={onStopSpinning}
          radiusLineWidth={0}
          innerRadius={50}
          innerBorderWidth={20}
          outerBorderWidth={5}
          outerBorderColor={grey[800]}
          innerBorderColor={grey[800]}
          textDistance={80}
        />
        <Button
          variant="contained"
          size="large"
          onClick={handleSpinClick}
          sx={{ marginTop: "20px" }}
        >
          SPIN
        </Button>
      </Box>
    </Box>
  );
};

export default Roulette;
