import axios from "axios";
const http = axios.create({
    baseURL: 'http://ec2-54-186-32-134.us-west-2.compute.amazonaws.com:3000/',
    headers: {
        "Content-type": "application/json",
    }
});

export default http
