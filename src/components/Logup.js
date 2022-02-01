import React , { useState } from "react";
import { FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logup } from '../actions/logup'
import { Link, useNavigate } from 'react-router-dom'

function Logup({logup, users}){
    const [state, setState] = useState({
        user_name: "",
        email: "",
        password: "",
        password_confirmation:""
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setState({...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        logup(state)
    }
  

    return(
        <div className="logup-form">
            <h1>Log Up</h1>
            {localStorage.token === undefined? <p>{users.error}</p>: navigate('/exercises')}
            <form onSubmit={handleSubmit}>
                <FormGroup>

                <label>username: </label>
                <FormControl input type="text" name="user_name" value={state.user_name} onChange={handleChange} required/>

                <label>email: </label>
                <FormControl input type="email" name="email" value={state.email} onChange={handleChange} required/>

                <label>password: </label>
                <FormControl input type="password" name="password" value={state.password} onChange={handleChange} required/><br/>
                
                <label>password confirmation: </label>
                <FormControl input type="password" name="password_confirmation" value={state.password_confirmation} onChange={handleChange} required/><br/>
                
                <button className="btn btn-primary" type="submit">Log Up</button>

                </FormGroup>

                <Link to="/login">
                    <p>Have an account Login</p>
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
    logup: userInfo => dispatch(logup(userInfo))
})

export default connect (mapStateToProps, mapDispatchToProps)(Logup);