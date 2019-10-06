import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 436fc8593fc2555d5821d7066fc838a17bf86711432446b653f6ee218461f10d"
    }
});
