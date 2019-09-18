import * as types from "./../actions/actionTypes";
const initialState = {
  userData: [],
  fetching: true
};

const fetchUserData = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_USER_DATA:
      return {
        ...state,
        fetching: true
      };

    case types.REQUEST_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: payload,
        fetching: false
      };

    case types.REQUEST_USER_DATA_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default fetchUserData;
