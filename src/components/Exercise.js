import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Exercise =({exercise}) => {
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={exercise.gifUrl} />
                <Card.Body>
                    <Card.Title>{exercise.name}</Card.Title>
                    <Card.Text>
                    <p>Body Part: {exercise.bodyPart}</p>
                    <p>Equipment: {exercise.equipment}</p>
                    <p>Target: {exercise.target}</p>
                    </Card.Text>
                    <Button variant="primary">Add</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Exercise;
