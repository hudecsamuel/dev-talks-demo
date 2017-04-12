import { GET_ESHOP } from "actions/types"
import { ReduxEntity } from "reducers/types"
import { Eshop } from "api/models/eshop"
import { Action } from "actions"

const defaultState: ReduxEntity<Eshop> = {
    data: {},
    isLoading: false,
    isLoaded: false,
    error: null,
    updated: new Date()
}

export default (state: ReduxEntity<Eshop> = defaultState, action): ReduxEntity<Eshop> => {
    switch (action.type) {
        case GET_ESHOP.STARTED:
            // return Object.assign({}, state, { isLoading: true })
            return { ...state, ...{ isLoading: true } }
        case GET_ESHOP.SUCCESS:
            return {
                ...state, ...{
                    data: action.payload,
                    isLoaded: true,
                    isLoading: false,
                    updated: new Date(),
                }
            }
        case GET_ESHOP.ERROR:
            return {
                ...state, ...{
                    isLoaded: false,
                    isLoading: false,
                    error: action.payload,
                }
            }
        default:
            return state
    }

}
