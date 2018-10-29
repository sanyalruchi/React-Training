import * as types from "./actionTypes";

// action to fetch User data from Api
export function requestUserData() {
  return {
    type: types.REQUEST_USER_DATA
  };
}

export function requestUserDataSuccess(payload) {
  return {
    type: types.REQUEST_USER_DATA_SUCCESS,
    payload
  };
}

export function requestUserDataFailed() {
    return {
      type: types.REQUEST_USER_DATA_FAILED
    };
  }

// action to update User data
export const updateUserData = (payload) => ({
    type: types.UPDATE_USER_DATA, payload
});

//action to add new user
export const addUserData = payload => ({
    type: types.ADD_USER_DATA, payload
});

// action to delete user
export const deleteUserData = () => ({
    type: types.DELETE_USER_DATA
});
