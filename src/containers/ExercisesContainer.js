import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { exerciseDBAPI } from "../actions/exerciseDBAPI";
import Exercises from "../components/Exercises";

function ExercisesContainer({exercises, exerciseDBAPI}){
    
    useEffect(() => {
        exerciseDBAPI()
    },[])

    return(
        <div>
            <select className="select">
                <option selected>Find Exercises By Body Part</option>
                <option value="cardio">Cardio</option>
                <option value="chest">Chest</option>
                <option value="lower arms">Lower arms</option>
                <option value="upper arms">upper arms</option>
                <option value="lower legs">Lower legs</option>
                <option value="upper legs">upper legs</option>
                <option value="neck">Neck</option>
                <option value="shoulders">Shoulders</option>
                <option value="waist">Waist</option>
                <option value="back">Back</option>
          </select>
            {/* <p>Cardio</p>
            <p>Chest</p>
            <p>Lower arms</p>
            <p>upper arms</p>
            <p>Lower legs</p>
            <p>upper legs</p>
            <p>neck</p>
            <p>shoulders</p> 
            <p>waist</p>
            <p>back</p> */}
           
            <Exercises execises={exercises} />
        </div>
    )

}

const mapStateToProps = state => {
    return {
        exercises: state.exercises
    }
}

export default connect(mapStateToProps, {exerciseDBAPI})(ExercisesContainer)