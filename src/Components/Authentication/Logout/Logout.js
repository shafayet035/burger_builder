import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../../../store/action'

const Logout = (props) => {

    useEffect(() => {
        props.logout()
    }, [props])

    return (
        <div>
            <Redirect to="/"/>
        </div>
    )
}

const mapDispatch = Dispatch => {
    return {
        logout: () => Dispatch({type: actions.LOGOUT, token: null, userId: null})
    }
}
export default connect(null, mapDispatch) (Logout)
