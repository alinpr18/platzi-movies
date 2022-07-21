import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "7d699183383f669299886f7c9f162b9c",
    language: "es-ES",
  },
});
