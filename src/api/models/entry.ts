import axiosInstance from "api/axios"
import {ID} from "reducers/types"

export interface Entry {
    id: ID
    content: string
}

export class EntryApi {
    private axios
    constructor(axios) {
        this.axios = axios
    }

    getAll() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve({
                    data: [
                        {
                            id: 1,
                            content: "Test entry 1",
                        },
                        {
                            id: 2,
                            content: "Test entry 2",
                        },
                        {
                            id: 3,
                            content: "Test entry 3",
                        },
                    ]
                })
            }, 2000)
        })
        return promise
    }
}


const entryInstance: EntryApi = new EntryApi(axiosInstance)
export default entryInstance