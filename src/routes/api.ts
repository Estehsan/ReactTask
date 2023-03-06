import axios from "axios";

const BASE_URL = "https://api.tvmaze.com/search";

export const getShows = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/shows/?q=${query}`);
  return response.data;
};

export const getShowById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/shows/${id}`);
  return response.data;
};
