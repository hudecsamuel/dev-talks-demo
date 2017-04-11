import * as React from "react"
import {Link} from "react-router"
import { ROUTES } from "routes"
import {connect} from "react-redux"

export interface Props {
    route: string
}

export interface State { }

class Nav extends React.Component<Props, State> {
    public static defaultProps: Props = {
        route: "HOME"
    }

    render() {
        const {route} = this.props
        return (
            <ul className="nav nav-pills">
                <li role="presentation" className={`${route === ROUTES.HOME ? "active": ""}`}>
                    <Link to="/">Home</Link>
                </li>
                <li role="presentation" className={`${route === ROUTES.FOO ? "active": ""}`}>
                    <Link to="/foo">Foo</Link>
                </li>
                <li role="presentation" className={`${route === ROUTES.BAR ? "active": ""}`}>
                    <Link to="/bar">Bar</Link>
                </li>
                <li role="presentation" className={`${route === ROUTES.ESHOP ? "active": ""}`}>
                    <Link to="/eshop/1">Eshop</Link>
                </li>
                <li role="presentation" className={`${route === ROUTES.COUNTERS ? "active": ""}`}>
                    <Link to="/counters">Counters</Link>
                </li>
            </ul>
        )
    }
}

export default connect((state) => {
    return {
        route: state.route
    }
})(Nav)