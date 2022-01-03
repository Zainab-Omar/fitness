import React , { useState } from "react";
import { Link } from 'react-router-dom'
import { FormControl, FormGroup } from 'react-bootstrap';


function Login(){
    const [state, setState] = useState({
        user_name: "",
        email: "",
        password: "",
        password_confirmation:""
    })
  

    return(
        <div>
            {/* {console.log(state.email)} */}
        </div>

    )
 


}

export default Login;