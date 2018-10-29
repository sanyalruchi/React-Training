import * as types from './../actions/actionTypes';
const initialState = {
    userData : [],
    fetching: true
}

const addUserData = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.ADD_USER_DATA :
        
        console.log(payload, "payload in reducer");
        return {
            ...state
        };        
        
        case types.ADD_USER_DATA_SUCCESS:
        return {
            ...state, 
            userData : payload,
            fetching: false
        };

        default:
        return state;
    }
}

export default addUserData;