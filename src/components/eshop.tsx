import * as React from "react"
import EshopApi, {Eshop} from "api/models/eshop"
import {GET_ESHOP} from "actions/types"
import { connect} from "react-redux"

export interface Props {
    eshop?: Eshop
    isLoaded?: boolean
    isLoading?: boolean
    error?: Error
    updated?: Date
    dispatch?: any
}

export interface State {}

class EshopComponent extends React.Component<Props, State> {
    public static defaultProps: Props = {}

    componentWillMount() {
        const {dispatch} = this.props
        dispatch({
            type: GET_ESHOP.STARTED,
        })
        EshopApi.get(1).then((resp: any) => {
            dispatch({
                type: GET_ESHOP.SUCCESS,
                payload: resp.data
            })
        })
        .catch((err) => {
            dispatch({
                type: GET_ESHOP.ERROR,
                payload: err
            })
        })
    }

    render() {
        const {eshop, isLoaded, isLoading, error, updated} = this.props

        if(!isLoaded && isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div className="jumbotron">
                <h1>{eshop.name}</h1>
                <p>Loaded!</p>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        eshop: state.eshop.data,
        isLoaded: state.eshop.isLoaded,
        isLoading: state.eshop.isLoading,
        error: state.eshop.error,
        updated: state.eshop.updated,
    }
})(EshopComponent)