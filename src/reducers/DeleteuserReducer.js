import * as types from "./../actions/actionTypes";
const initialState = {
  userData: [],
  fetching: true
};

const deleteUserData = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DELETE_USER_DATA:
      return {
        ...state
      };

    case types.DELETE_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: payload,
        fetching: false
      };

    case types.DELETE_USER_DATA_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default deleteUserData;
