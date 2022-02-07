import React, { useState } from 'react';
import { calBMI } from '../actions/calBMI'
import { connect } from 'react-redux'

function FindBMI({calBMI}) {
    const [bmi, setBmi] = useState({weight: "", height: ""})

    const handleSubmit = e => {
        e.preventDefault()
        calBMI(Number(bmi.weight), Number(bmi.height))
    }

    const handleChange = e => {
        setBmi({...bmi,
            [e.target.name]: e.target.value
        })
    }

  return <div>
      <h1>Calculate your BMI</h1>
      <form onSubmit={handleSubmit}>
          <label for="weight">Weight: </label>
          <input type="number" id="weight" name="weight" value={bmi.weight} onChange={handleChange} required/>

          <label for="height">Height: </label>
          <input type="number" id="height" name="height" value={bmi.height} onChange={handleChange} required/>

          <input type="submit" value="Calculate" />

      </form>

  </div>;
}

export default connect(null, {calBMI})(FindBMI);
