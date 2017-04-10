import {
    GET_ESHOP,
    INCREMENT, DECREMENT
} from "./types"
import {ID} from "reducers/types"
import EshopApi from "api/models/eshop"

export type Action = {
    type: string
    payload?: any
}

export function fetchEshop(id: ID): Action {
    return {
        type: GET_ESHOP.CREATE,
        payload: {id}
    }
}

export function increment(): Action {
    return {
        type: INCREMENT
    }
}

export function decrement(): Action {
    return {
        type: DECREMENT
    }
}