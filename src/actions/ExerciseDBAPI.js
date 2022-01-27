export function ExerciseDBAPI(query="cardio"){
    return dispatch => {
        fetch( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${query}`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
		        "x-rapidapi-key": process.env.REACT_APP_FITNESS
            }
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: 'EXERCISES', data
        }))
        .catch(error => console.log(error))
    }
}
