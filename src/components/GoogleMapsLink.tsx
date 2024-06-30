import React from "react";
import { Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface GoogleMapsLinkProps {
  latitude: string;
  longitude: string;
}

const GoogleMapsLink: React.FC<GoogleMapsLinkProps> = ({
  latitude,
  longitude,
}) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <Link
      href={googleMapsUrl}
      target="_blank"
      rel="noopener"
      underline="none"
      color="primary"
      display="flex"
      alignItems="center"
    >
      <OpenInNewIcon style={{ marginRight: "0.5rem" }} />
      Open in Google Maps
    </Link>
  );
};

export default GoogleMapsLink;
