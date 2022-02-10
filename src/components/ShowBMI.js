import React from 'react';
import { connect } from 'react-redux'

function ShowBMI({bmi}) {
  return <div>
      <p>{bmi.bmi}</p>
      <p>{bmi.health}</p>
      <p>{bmi.healthy_bmi_range}</p>
      <p>Keep track of your BMIs</p>
      <button>Add</button>
  </div>;
}


const mapStateToProps = state => {
    return {
        bmi: state.bmi.info
    }

}

export default connect(mapStateToProps)(ShowBMI);