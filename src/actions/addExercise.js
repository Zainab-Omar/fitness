export const addExercise = (id, exercise) => {
    return(dispatch)=> {
        fetch(`http://localhost:3000/api/v1/users/${id}/exercises`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({exercise})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error(err);
        })
    }
}