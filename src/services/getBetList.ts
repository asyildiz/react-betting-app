import { ENDPOINTS } from "../constants/endpoints";

export const getBetList = async () => {
  const response = await fetch(ENDPOINTS.FETCH_BET_LIST, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();

  if (data.error) {
    throw new Error("Error");
  }

  return data;
};
