import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { exerciseDBAPI } from "../actions/exerciseDBAPI";
import Exercises from "../components/Exercises";

function ExercisesContainer({exercises, exerciseDBAPI}){

    useEffect(() => {
        exerciseDBAPI()
        console.log(exercises)
    },[])

    return(
        <div>
            Hello
            <h1>fetch data</h1>
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