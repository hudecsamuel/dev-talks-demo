import * as React from "react"
import Counter from "state_components/counter"
import Faz from "state_components/faz"

export interface Props {}

export interface State {
    count: number
}

class Bar extends React.Component<Props, State> {
    public static defaultProps: Props = {}
    constructor(props: Props) {
        super(props)

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        console.log("increment", this.state.count)
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        console.log("decrement", this.state.count)
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        return (
            <div>
                <h3>Direct child</h3>
                <Counter increment={this.increment} decrement={this.decrement} count={this.state.count} />
                <hr  />
                <h3>Faz -> Mer -> 2x Counter</h3>
                <Faz increment={this.increment} decrement={this.decrement} count={this.state.count} />
            </div>
        )
        
    }
}

export default Bar