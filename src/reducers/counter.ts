import {Action} from "actions"
import {INCREMENT, DECREMENT}  from "actions/types"

export default (state: number = 0, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}