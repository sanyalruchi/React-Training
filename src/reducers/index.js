import { combineReducers} from 'redux';
import fetchUserData from './Reducer';
import updateUserData from './updateReducer';
import addUserData from './addUserReducer';

export default combineReducers({
    fetchUserData,
    updateUserData,
    addUserData
})