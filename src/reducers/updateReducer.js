import * as types from "./../actions/actionTypes";
const initialState = {
  userData: [],
  fetching: true
};

const updateUserData = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_USER_DATA:
      return {
        ...state
      };

    case types.UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: payload,
        fetching: false
      };

    case types.UPDATE_USER_DATA_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default updateUserData;
