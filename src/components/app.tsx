import * as React from "react"
import {connect} from "react-redux"
import Nav from "components/nav"

export interface Props { 
    children?: any
}

export interface State { }

class App extends React.Component<Props, State> {
    public static defaultProps: Props = {}

    render() {
        const {children} = this.props
        return (
            <div>
                <Nav />
                {children}
            </div>
        )
    }
}

export default App