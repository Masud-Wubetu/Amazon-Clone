import axios from 'axios'

const axiosInstance = axios.create({
    //baseURL: "http://127.0.0.1:5001/clone-92bf6/us-central1/api"
    baseURL: "https://amazon-clone-770v.onrender.com"
});

export {axiosInstance}