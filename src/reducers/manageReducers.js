import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users: userReducer   
})

export default rootReducer;

function userReducer(state = [], action){
    switch(action.type){
        case 'LOGIN_USER':
          return {...state, currentUser: action.userObj}

          case 'ERROR_MESSAGE':
            return {...state, error: action.error}

            default:
             return state;
    }
}


