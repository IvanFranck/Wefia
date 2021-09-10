import axios from "axios";

export const Request = axios.create({
    baseURL: "https://wefia.herokuapp.com/api"
});