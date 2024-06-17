import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
    baseURL:baseUrl,
    timeout: 20*1000,
    timeoutErrorMessage:"Check Internet Connection"
})

api.interceptors.request.use((req) =>{
    // req.headers["Accept"] = "application/json"
    // req.headers["Content-Type"] ="application/json"
    // req.headers["Authorization"] = `Bearer`
    return req
})

export default api