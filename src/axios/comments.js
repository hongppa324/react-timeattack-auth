import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3001/comments",
  timeout: 1500,
});

commentsAxios.interceptors.request.use();

commentsAxios.interceptors.response.use(
  (response) => {
    console.log("요청 성공입니다.");
    return response;
  },
  (error) => {
    alert("응답을 받지 못 했습니다.");
    return Promise.reject(error);
  }
);

export default commentsAxios;
