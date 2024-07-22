import { apiUrl } from "./urls";

export const useRestaurantsData = async ()=> {
  const data = await fetch(apiUrl);
  const jsonData = await data.json();
  const restaurantData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return restaurantData;
}