import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "1465240c75d3440e4b45d4f3f0a65f20",
    language: "ko-KR",
  },
});

export default instance;
