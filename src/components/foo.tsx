import * as React from "react"
import { Entry } from "api/models/entry"
import { GET_ENTRIES } from "actions/types"
import { connect } from "react-redux"
import {getFirst} from "reducers/entries"

export interface Props {
    entries?: Array<Entry>
    firstEntry?: Entry
    isLoaded?: boolean
    isLoading?: boolean
    error?: Error
    updated?: Date
    dispatch?: any
}

export interface State { }

class Foo extends React.Component<Props, State> {
    public static defaultProps: Props = {}

    componentWillMount() {
        const { dispatch } = this.props
        dispatch({
            type: GET_ENTRIES.CREATE,
        })
    }

    renderList() {
        const { entries } = this.props

        return entries.map((entry: Entry) => {
            return (
                <li className="list-group-item" key={`entry-${entry.id}`} >
                    <h3>{entry.content}</h3>
                </li>
            )
        })
    }

    render() {
        const { entries, isLoaded, isLoading, error, updated } = this.props

        if (isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        const { dispatch } = this.props

        return (
            <div>
                <button className="btn btn-primary" onClick={() => {
                    dispatch({
                        type: GET_ENTRIES.STARTED,
                    })
                }}>Reload</button>
                <ul className="list-group">
                    {this.renderList()}
                </ul>

                <h2>{this.props.firstEntry && this.props.firstEntry.content}</h2>

            </div>
        )
    }
}

export default connect((state) => {
    const entry = getFirst(state.entries)
    
    return {
        firstEntry: entry,
        entries: state.entries.data,
        isLoaded: state.entries.isLoaded,
        isLoading: state.entries.isLoading,
        error: state.entries.error,
        updated: state.entries.updated,
    }
})(Foo)
