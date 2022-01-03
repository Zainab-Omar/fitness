import React , { useState } from "react";
import { Link } from 'react-router-dom'
import { FormControl, FormGroup } from 'react-bootstrap';


function Logup(){
    const [state, setState] = useState({
        user_name: "",
        email: "",
        password: "",
        password_confirmation:""
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
  

    return(
        <div className="logup-form">
            <h1>Log Up</h1>
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
            </form> 
          
        </div>

    )
 


}

export default Logup;