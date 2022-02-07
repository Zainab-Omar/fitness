import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users: userReducer,
    exercises: exerciseReducer,
    bmi: bmiReducer,
})

export default rootReducer;

function userReducer(state = [], action){
    switch(action.type){
        case 'LOGIN_USER':
          return {...state, currentUser: action.userObj}

          case 'LOGOUT_USER': 
           return {...state, currentUser: {}}

          case 'ERROR_MESSAGE':
            return {...state, error: action.error}

            default:
             return state;
    }
}

function exerciseReducer(state = [], action){
    switch(action.type){
        case 'EXERCISES':
            return action.data
            default:
                return state
    }
}

function bmiReducer(state=[], action){
    switch(action.type){
        case 'BMI':
            return action.data
            default: return state
    }
}


