import { combineReducers } from 'redux'
import eshopReducer from "reducers/eshop"
import routeReducer from "reducers/route"
import counterReducer from "reducers/counter"
import entriesReducers from "reducers/entries"

const rootReducer = combineReducers({
    route: routeReducer,
    count: counterReducer,
    eshop: eshopReducer,
    entries: entriesReducers,
})

export default rootReducer