import React from "react";
import Exercise from './Exercise'
import { v4 as uuidv4 } from 'uuid';

const Exercises = ({execises}) => {
    // in case of receiving and empty array return [] so map method does not throw error

    const execisesArray = execises || []
    const renderexecises = execisesArray.map(exercise => <Exercise key={uuidv4()} exercise={exercise}/>)

    return(
        <div>
            {renderexecises}
        </div>
    )
}

export default Exercises