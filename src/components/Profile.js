import React from "react";
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Profile({users}) {

    const navigate = useNavigate();

    if(localStorage.token !== undefined){
        if(users !== undefined){
            return(
                <div className="profile">
                    <h1>Welcome {users.data.attributes.user_name}</h1>

                
                    <div className="profile-pic">
                        <img src="/images/workout.jpg" alt="workout" height={250} width={300}/>
                        <p>My Exercises</p>
                    </div>

                    <div className="profile-pic">
                        <img src="/images/bmi.jpeg" alt="body mass index"height={250} width={300}/>
                        <p>Calculate your BMI</p>
                    </div>
                    <div className="profile-pic">
                        <img src="/images/health-food.jpeg" alt="health food" height={250} width={300}/>
                        <p>Find Healthy Recipes</p>
                    </div>     
                </div> 
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
