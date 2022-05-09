import axios from "axios";

export const baseUrl = "https://us-real-estate.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "8f7e3eaf73msh6861e1e88266e5fp186bcbjsn5fbe164c6ec3",
    },
  });

  return data;
};
