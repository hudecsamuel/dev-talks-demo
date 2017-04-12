import * as React from "react"
import Faz from "components/faz"
import Counter from "components/counter"

export interface Props { }

export interface State { }

class Bar extends React.Component<Props, State> {
    public static defaultProps: Props = {}

    render() {
        return (
            <div>
                <p>Direct child</p>
                <Counter />
                <hr />
                <p>Faz -> Mer -> 2x Counter</p>
                <Faz />
            </div>
        )
    }
}

export default Bar