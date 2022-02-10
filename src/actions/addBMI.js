export const addBMI = (id, bmi) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${id}/bmis`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({bmi})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
}

