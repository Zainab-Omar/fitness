import React from 'react';
import { connect } from 'react-redux'
import { addBMI } from '../actions/addBMI'

function SaveBMI({addBMI, bmi, id }) {

    const handleClick = () => {
        addBMI(id.data.id, bmi)
    }
  return <div>
      <button onClick={handleClick}>Add BMI</button>

  </div>;
}

export default connect(null, {addBMI})(SaveBMI)
