import React from 'react';
import { connect } from 'react-redux'
import SaveBMI from './SaveBMI';

function ShowBMI({bmi, users}) {
    if(bmi !== undefined){
        return <div>
        <p>{bmi.bmi}</p>
        <p>{bmi.health}</p>
        <p>{bmi.healthy_bmi_range}</p>
        <p>Keep track of your BMIs</p>
        <SaveBMI bmi={bmi} id={users} />
    </div>;
    }
    else {
        return null
    }

}


const mapStateToProps = state => {
    return {
        bmi: state.bmi.info,
        users: state.users.currentUser
    }

}

export default connect(mapStateToProps)(ShowBMI);