import axiosInstance from "api/axios"
import {ID} from "reducers/types"

export interface Eshop {
    id: ID
    name: string
    created_at: string
    updated_at: string
    inactiveCount?: number
    activeCount?: number
}

export class EshopApi {
    private axios
    constructor(axios) {
        this.axios = axios
    }

    get(id: ID) {
        let promise  = new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve({
                    data: {
                        id: id,
                        name: "TestShop.com",
                    }
                })
            }, 2000)
        } )
        return promise
        // return this.axios.get(`/eshops/${id}`)
    }

    getProjects(id: ID): Promise<any> {
        return this.axios.get(`/eshops/${id}/projects`)
    }
}

const eshopInstance: EshopApi = new EshopApi(axiosInstance)
export default eshopInstance