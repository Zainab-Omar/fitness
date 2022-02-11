import React from 'react';
import { connect } from 'react-redux'
import { addExercise } from '../actions/addExercise';

function SaveExercise({addExercise, exercise, id}) {

    const handleClick = () => {
        addExercise(id.data.id, exercise)
    }
  return <div>
      <button onClick={handleClick}>Add Exercise</button>
  </div>;
}


export default connect(null, { addExercise })(SaveExercise)
