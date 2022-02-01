import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/logout'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Logout({logout}){

    const navigate = useNavigate()

    const handleClick = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        logout()
        navigate("./login")
    }
    return(
        <Button className="logout-button" variant="link" onClick={handleClick}>Logout</Button>
    )

}


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Logout);