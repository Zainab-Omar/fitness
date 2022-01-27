import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/logout'
import { Button } from 'react-bootstrap'

function Logout({logout}){

    const handleClick = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        logout()
    }
    return(
        <Button className="logout-button" variant="link" onClick={handleClick}>Logout</Button>
    )

}


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Logout);