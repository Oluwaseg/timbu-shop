// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    Appid: "BX2XX72MKKPA4RC",
    Apikey: "25ff67d2942e45e3aa13dc9b0810479420240712144414667166",
  },
});

export default axiosInstance;
