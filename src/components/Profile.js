import React from "react";
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Profile({users}) {

    const navigate = useNavigate();

    if(localStorage.token !== undefined){
        if(users !== undefined){
            return(
                <React.Fragment>
                    <h1>Welcome {users.data.attributes.user_name}</h1>

                    <figure>
                        <img src="/images/workout.jpg" alt="workout" height={250} width={300}/>
                        <figcaption>My Exercises</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/bmi.jpeg" alt="body mass index"height={250} width={300}/>
                        <figcaption>Calculate your BMI</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/health-food.jpeg" alt="health food" height={250} width={300}/>
                        <figcaption>Find Healthy Recipes</figcaption>
                    </figure>      
                    
                </React.Fragment>
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
