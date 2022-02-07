import React from "react";
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Profile({users}) {

    const navigate = useNavigate();

    if(localStorage.token !== undefined){
        if(users !== undefined){
            return(
                <h1>Welcome {users.data.attributes.user_name}</h1>
            )
        }
        else return null    
    }
    else{
        return(
            navigate('/login')
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.currentUser
    }
}

export default connect(mapStateToProps)(Profile);
