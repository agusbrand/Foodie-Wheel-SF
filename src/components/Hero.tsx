import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <Stack
      sx={{ width: "100%", textAlign: "center" }}
      px={{ xs: 1, md: 10 }}
      py={{ xs: 3, md: 10 }}
      spacing={4}
    >
      <Typography variant="h1" aria-label={`Title: ${title}`}>
        {title}
      </Typography>
      <Typography
        fontSize={20}
        color={grey[700]}
        aria-label={`Description: ${description}`}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default Hero;
