import React, { useState } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';
import { login } from '../actions/login'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Login({login, users}) {
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        setState({...state,
            [e.target.name]: e.target.value
        })
    }

   const handleSubmit = e => {
    e.preventDefault()
    login(state)
    setState({email: "", password:""})
   }

    return (
        <div className="login-form">
            <h1>Log In!</h1>
            { /* check if user token is undefined return the login form else return errors  */}
            { localStorage.token === undefined ? <p>{users.error}</p> : null }
            <form onSubmit={handleSubmit}>
                <FormGroup>

                <label>email: </label>
                <FormControl input type="email" name="email" value={state.email} onChange={handleChange} required/>

                <label>password: </label>
                <FormControl input type="password" name="password" value={state.password} onChange={handleChange} required/><br/>
            
                <button className="btn btn-primary" type="submit">Log In</button>

                </FormGroup>
                <Link to="/logup">
                    <p>Create an account</p>
                </Link>
            </form> 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    login: userInfo => dispatch(login(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
