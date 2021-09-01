import axios from "axios";

const Request = axios.create({
    baseURL: "https://wefia.herokuapp.com/"
});

export default Request;