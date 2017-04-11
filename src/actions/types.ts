/**
 * Toast actions
 */
export const CREATE_TOAST = "CREATE_TOAST"
export const REMOVE_TOAST = "REMOVE_TOAST"
export const RESET_TOASTS = "RESET_TOASTS"


/**
 * Api request action
 */
interface ApiRequest {
    CREATE: string
    STARTED: string
    SUCCESS: string
    ERROR: string
}

export const GET_ESHOP: ApiRequest = {
    CREATE: "GET_ESHOP_CREATE",
    STARTED: "GET_ESHOP_STARTED",
    SUCCESS: "GET_ESHOP_SUCCESS",
    ERROR: "GET_ESHOP_ERROR",
}

export const GET_ENTRIES: ApiRequest = {
    CREATE: "GET_ENTRIES_CREATE",
    STARTED: "GET_ENTRIES_STARTED",
    SUCCESS:  "GET_ENTRIES_SUCCESS",
    ERROR: "GET_ENTRIES_ERROR",
}

export const SET_ROUTE = "SET_ROUTE"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"