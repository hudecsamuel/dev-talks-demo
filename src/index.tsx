import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {createHistory} from 'history'
import { Router, Route } from "react-router"
import reducers from './reducers'
// import routes from "./routes"
import {History} from "history"
import routes from "routes"
import loggingMiddleware from "middleware/log"
import apiMiddleware from "middleware/api_calls"


const browserHistory: History = createHistory()

const createStoreWithMiddleware = applyMiddleware(loggingMiddleware, apiMiddleware)(createStore)

const store = createStoreWithMiddleware(reducers, window["devToolsExtension"] && window["devToolsExtension"]())


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    , document.querySelector('#container'));
