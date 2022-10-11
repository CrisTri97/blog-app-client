import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tridev-blog-app.herokuapp.com/",
});
