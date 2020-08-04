import axios from "axios"

const service = axios.create({
    baseURL:"http://127.0.0.1:8081",
    // baseURL:"http://122.248.216.43:8081/",
    timeout:5000,

})

export default service