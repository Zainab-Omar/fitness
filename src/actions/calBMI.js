export function calBMI(weight, height){
    return dispatch => {
        fetch(`https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mega-fitness-calculator1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_BMI_API
            }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});

    }
}