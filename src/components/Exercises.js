import React from "react";
import Exercise from './Exercise'

const Exercises = ({execises}) => {
    // in case of receiving and empty array return [] so map method does not throw error

    const execisesArray = execises || []
    const renderexecises = execisesArray.map(exercise => <Exercise exercise={exercise}/>)

    return(
        <div>
            {renderexecises}
        </div>
    )
}

export default Exercises