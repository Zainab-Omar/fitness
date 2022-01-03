import React, { useState } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';
function Login() {
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
    console.log(state)
    console.log("submitted")
   }

    return (
        <div className="login-form">
            <h1>Log In!</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup>

                <label>email: </label>
                <FormControl input type="email" name="email" value={state.email} onChange={handleChange} required/>

                <label>password: </label>
                <FormControl input type="password" name="password" value={state.password} onChange={handleChange} required/><br/>
            
                <button className="btn btn-primary" type="submit">Log In</button>

                </FormGroup>
            </form> 
        </div>
    )
}

export default Login
