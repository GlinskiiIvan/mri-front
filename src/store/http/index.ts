import axios from "axios";

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URI,
    headers: {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('access_token'))}`
    },
    withCredentials: true,
});



export {$host};