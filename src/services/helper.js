import axios from "axios";

export const BASE_URL = "http://localhost:8080";

{/**axios library is used for server-call */}
export const myAxios = axios.create({
    baseURL : BASE_URL,
})