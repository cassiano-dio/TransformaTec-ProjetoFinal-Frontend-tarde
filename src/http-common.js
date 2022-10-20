import axios from "axios";

export default axios.create({
    //baseURL: 'http://localhost:8080/api',
    baseURL: 'http://ec2-54-92-195-134.compute-1.amazonaws.com:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});