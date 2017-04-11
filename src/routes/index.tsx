import React from "react"
import {Route, IndexRoute} from "react-router"

import App from "components/app"
import Foo from "components/foo"
import Bar from "state_components/bar"
import Eshop from "components/eshop"
import Counters from "components/counters"
import {SET_ROUTE} from "actions/types"

export const ROUTES = {
    HOME: "HOME",
    FOO: "FOO",
    ESHOP: "ESHOP",
    BAR: "BAR",
    COUNTERS: "COUNTERS",
}

function setCurrentRoute(store, route: string = ROUTES.HOME) {
    return (nextState, replace, callback) => {
        store.dispatch({
            type: SET_ROUTE,
            payload: route
        })
        callback()
    }
}

export default (store) => (
    <Route path="/" component={App} onEnter={setCurrentRoute(store)} >
        <Route path="/foo" component={Foo} onEnter={setCurrentRoute(store, ROUTES.FOO)} />
        <Route path="/bar" component={Bar} onEnter={setCurrentRoute(store, ROUTES.BAR)} />
        <Route path="/eshop/:eshop_id" component={Eshop} onEnter={setCurrentRoute(store, ROUTES.ESHOP)} />
        <Route path="/counters" component={Counters} onEnter={setCurrentRoute(store, ROUTES.COUNTERS)} />
    </Route>
)


