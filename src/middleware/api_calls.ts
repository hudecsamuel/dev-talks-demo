import { GET_ENTRIES } from "actions/types"
import Entry from "api/models/entry"

const apiMiddleware = store => next => action => {
    if (action.type === GET_ENTRIES.CREATE) {
        //tell we are about to start request
        next({
            type: GET_ENTRIES.STARTED
        })
        //make request and resolve promise
        Entry.getAll().then((request: any) => {
            next({
                type: GET_ENTRIES.SUCCESS,
                payload: request.data
            })
        }).catch((err) => {
            next({
                type: GET_ENTRIES.ERROR,
                error: err
            })
        })
    } else {
        next(action)
    }
}

export default apiMiddleware