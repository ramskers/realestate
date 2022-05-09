import axios from "axios";

export const baseUrl = "https://us-real-estate.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "NEXT_PUBLIC_RAPID_API_KEY",
    },
  });

  return data;
};
