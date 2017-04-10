import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*'
    },
    validateStatus: function (status) {
        return status <= 400; // Reject only if the status code is greater than or equal to 400
    }
})

export default instance