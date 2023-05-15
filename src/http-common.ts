import axios from "axios";

export default axios.create({
    baseURL: process.env.API_LINK_BASE,
    headers: {
        "Content-Type": "application/json"
    }
});
