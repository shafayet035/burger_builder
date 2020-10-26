import React, { useState } from 'react'
import Button from '../BurderBuilder/Button/Button'
import './Auth.css'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../../store/action'
import Spinner from '../Spinner/Spinner'
import { Redirect } from 'react-router-dom'


const Auth = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [err, setErr] = useState('')
    const [reg, setReg] = useState(true)
    const [spin, setSpin] = useState(false)


    const registerUser = (e) => {
        e.preventDefault()

        setSpin(true)

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
    

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDITlWHZWcnRpLDIIdNisJyMwJmYFRaCCQ'

        if(!reg) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDITlWHZWcnRpLDIIdNisJyMwJmYFRaCCQ'
        }
        
        axios.post(url, authData)
            .then(res => {
                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('userId', res.data.localId)
                props.getAuth(res.data.idToken, res.data.localId)
                setErr('')
                setSpin(false)
                if (props.building) {
                    props.history.push('/checkout')
                }
            })
            .catch( err => {
                setErr(err.response.data.error.message)
                setSpin(false)
            } )
       
        
   
    }

    const switchAuth = () => {
        setReg(!reg)
    }

    let redirect;

    if (props.isAuth) {
        redirect = ( <Redirect to="/" /> )
    }

    let form = (
        <div>
            {redirect}
         <form onSubmit={registerUser}>
            <p>{err}</p>
            <p>{reg ? 'Sign in to your Account' : 'Register Your Account'}</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Enter Your Email' />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Enter Your Password' />
            <Button btnType="Success" >Submit</Button>
          </form>
            <Button btnType="Danger" clicked={switchAuth}>{reg ? 'Create an Account' : 'Sign in'}</Button>
        </div>
    )

    return (
        <div className="auth-form">
            {spin ? <Spinner />: form} 
        </div>
    )
}

const mapState = state => {
    return {
        isAuth: state.token !== null,
        building: state.building
    }
}

const mapDispatch = Dispatch => {
    return {
        getAuth: (token, userId) => Dispatch({ type: actions.GET_AUTH, token: token, userId: userId})
    }
}

export default connect(mapState, mapDispatch) (Auth)
