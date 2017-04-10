import * as React from "react"
import Counter from "state_components/counter"

export interface Props {
    count: number
    increment: any
    decrement: any
}

export default (props: Props) => {
    const {increment, decrement, count} = props
    return (
        <div>
            <Counter increment={increment} decrement={decrement} count={count}/>
        </div>
    )
}
    