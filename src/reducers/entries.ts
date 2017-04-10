import { GET_ENTRIES } from "actions/types"
import { ReduxList } from "reducers/types"
import { Entry } from "api/models/entry"
import { Action } from "actions"

const defaultState: ReduxList<Entry> = {
    data: [],
    isLoading: false,
    isLoaded: false,
    error: null,
    updated: new Date()
}

export default (state: ReduxList<Entry> = defaultState, action): ReduxList<Entry> => {
    switch (action.type) {
        case GET_ENTRIES.STARTED:
            return { ...state, ...{ isLoading: true } }
        case GET_ENTRIES.SUCCESS:
            return {
                ...state, ...{
                    data: action.payload,
                    isLoaded: true,
                    isLoading: false,
                    updated: new Date()
                }
            }
        case GET_ENTRIES.ERROR:
            return {
                ...state, ...{
                    isLoaded: false,
                    isLoading: false,
                    error: action.payload
                }
            }
        default:
            return state
    }

}

/**
 * getFirst selector
 */

export function getFirst(state: ReduxList<Entry>): Entry {
    return state.data[0]
}