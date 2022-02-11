import React from 'react';
import { connect } from 'react-redux'
import { addExercise } from '../actions/addExercise';

function SaveExercise({addExercise}) {

    const handleClick = () => {
        // addExercise()
    }
  return <div>
      <button onClick={handleClick}>Add Exercise</button>
  </div>;
}


export default connect(null, { addExercise })
