import * as React from "react"
import { connect } from "react-redux"
import { increment, decrement } from "actions"

export interface Props {
    count: number
    increment: any
    decrement: any
}

class Counter extends React.Component<Props, {}> {
    render() {
        const { count, increment, decrement } = this.props
        return (
            <div className="jumbotron">
                <h1>Count: {count}</h1>
                <button className="btn btn-primary" onClick={() => { increment() }}> Increment</button>
                <button className="btn btn-danger" onClick={() => { decrement() }}> Decrement</button>
            </div>
        )
    }
}

export default Counter
