import * as React from "react"
import {connect} from "react-redux"
import {Link} from "react-router"

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
                <ul className="nav nav-pills">
                    <li role="presentation" className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/foo">Foo</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/bar">Bar</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/eshop/1">Eshop</Link>
                    </li>
                    <li role="presentation">
                        <Link to="/counters">Counters</Link>
                    </li>
                </ul>
                {children}
            </div>
        )
    }
}

export default App