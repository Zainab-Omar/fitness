import React from "react";
// import { profile } from '../actions/profile'
import { connect } from 'react-redux'

function Profile({users}) {

    return(
        <div>
            Profile
        </div>
    )

}

const mapStateToProps = state => {
    return {
        users: state.users.currentUser
    }
}

export default connect(mapStateToProps)(Profile);
