import * as types from './../actions/actionTypes';
const initialState = {
    userData : [],
    fetching: true
}

const fetchUserData = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.REQUEST_USER_DATA :
        return {
            ...state, fetching:true,

        };        
        
        case types.REQUEST_USER_DATA_SUCCESS:
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

export default fetchUserData;