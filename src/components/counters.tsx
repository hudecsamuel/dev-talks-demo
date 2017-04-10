import * as React from "react"
import Counter from "components/counter"

export interface Props {}

export interface State {}

class Counters extends React.Component<Props, State> {
    public static defaultProps: Props = {}

    render() {
        return (
            <div>
                <Counter />
                <Counter />
            </div>
        )
    }
}

export default Counters