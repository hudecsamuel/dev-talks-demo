import * as React from "react"
import Mer from "state_components/mer"

export interface Props {
    count: number
    increment: any
    decrement: any
}

export default (props: Props) => {
    const {increment, decrement, count} = props
    return (
        <div>
            <Mer increment={increment} decrement={decrement} count={count} />
            <Mer increment={increment} decrement={decrement} count={count}   />
        </div>
    )
}