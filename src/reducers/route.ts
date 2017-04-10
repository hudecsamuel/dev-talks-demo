import {Action}from "actions"
import {SET_ROUTE}from "actions/types"

export default (state: string = "", action: Action) => {
    if(action.type === SET_ROUTE) {
        return action.payload
    }
    return state
}