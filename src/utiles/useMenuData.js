import { useState, useEffect } from "react";
import { resturentMenuUrl } from "./urls";

export const useMenuData = (restaurantId)=> {
  const [resturentsData, setResturentsData] = useState(null);

  useEffect(()=> {
    fetchMenuData()
  },[])

  const fetchMenuData = async()=> {
    const data = await fetch(resturentMenuUrl+restaurantId);
    const jsonData = await data.json();
    setResturentsData(jsonData);
  }

  return resturentsData;

}
