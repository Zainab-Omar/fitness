import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import SaveExercise from './SaveExercise'

const Exercise =({exercise, users}) => {
    return(
        <div className='exercise'>
            <Card>
                <Card.Img variant="top" src={exercise.gifUrl} />
                <Card.Body>
                    <Card.Title>{exercise.name}</Card.Title>
                    <Card.Text>
                    <p>Body Part: {exercise.bodyPart}</p>
                    <p>Equipment: {exercise.equipment}</p>
                    <p>Target: {exercise.target}</p>
                    </Card.Text>
                    {localStorage.token !== undefined ?<SaveExercise exercise={exercise} id={users} /> : null}
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users.currentUser,
    }
}

export default connect(mapStateToProps)(Exercise);
