import React from "react"
import {Route, IndexRoute} from "react-router"

import App from "components/app"
import Foo from "components/foo"
import Bar from "state_components/bar"
import Eshop from "components/eshop"
import Counters from "components/counters"


export const ROUTES = {
    FOO: "FOO",
    ESHOP: "ESHOP",
    BAR: "BAR",
    COUNTER: "COUNTER"
}

export default (
    <Route path="/" component={App}>
        <Route path="/foo" component={Foo} />
        <Route path="/bar" component={Bar} />
        <Route path="/eshop/:eshop_id" component={Eshop} />
        <Route path="/counters" component={Counters}/>
    </Route>
)


