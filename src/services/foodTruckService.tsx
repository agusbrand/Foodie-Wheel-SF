import { FoodTruck } from "../types/FoodTruck";

/**
 * Fetches the San Francisco's Food Truck Permits open dataset and
 * returns an array of FoodTruck objects that are currently approved.
 *
 * Refer to the following link for more details on the dataset:
 * https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/about_data
 */

// The request to the open dataset is being cached for 12 hours.
// This is to avoid being rate-limited, and to improve performance.
// According to the docs, the dataset may be published daily.
const CACHE_DURATION = 3600 * 12; // 12 hours

// Dataset identifier for the Mobile Food Facility Permit dataset
const DATASET_IDENTIFIER = "rqzj-sfat";

const BASE_URL = `https://data.sfgov.org/resource/${DATASET_IDENTIFIER}.json`;

// Refer to Socrata API documentation for more details on filters and queries:
// https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat
const queryParams = new URLSearchParams({
  status: "APPROVED",
  $select: [
    "objectid AS id",
    "applicant AS name",
    "facilitytype AS type",
    "fooditems as description",
    "latitude",
    "longitude",
    "address",
    "locationdescription AS addressDescription",
  ].join(","),
});

const FULL_URL = `${BASE_URL}?${queryParams.toString()}`;

export async function fetchFoodTrucks(): Promise<FoodTruck[]> {
  try {
    const response = await fetch(FULL_URL, {
      next: { revalidate: CACHE_DURATION },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from data.sfgov.org");
    }

    const data: FoodTruck[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
