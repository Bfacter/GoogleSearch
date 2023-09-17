import { data } from "autoprefixer";
import axios from "axios";

const Base_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyBJ8ZVvuqli6nSdov80eFkDMbNqbWDMSSU",
  cx: "f38ef12aadf054e2a",
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(Base_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
