import { FoodTrucks, FoodTruck } from "../types/FoodTruck";
import { groupBy } from "../utils/utils";

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

/**
 * Fetches the San Francisco's Food Truck Permits open dataset and
 * returns an object with the approved food trucks.
 *
 * Refer to the following link for more details on the dataset:
 * https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/about_data
 */
export async function fetchFoodTrucks(): Promise<FoodTrucks> {
  try {
    const response = await fetch(FULL_URL, {
      next: { revalidate: CACHE_DURATION },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from data.sfgov.org");
    }

    const data: FoodTruck[] = await response.json();

    const foodTrucks: FoodTrucks = groupBy(data, "name");
    return foodTrucks;
  } catch (error) {
    throw error;
  }
}
