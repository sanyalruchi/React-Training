import * as types from './../actions/actionTypes';
const initialState = {
    userData : [],
    fetching: true
}

const updateUserData = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.UPDATE_USER_DATA :
        console.log(payload, "updatedjgh");
        return {
            ...state
        };        
        
        case types.UPDATE_USER_DATA_SUCCESS:
        console.log(payload, "payload");
        return {
            ...state, 
            userData : payload,
            fetching: false
        };

        default:
        return state;
    }
}

export default updateUserData;