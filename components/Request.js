import axios from "axios";

const Request = axios.create({
    baseURL: "https://wefia.herokuapp.com/api"
});

export default Request;