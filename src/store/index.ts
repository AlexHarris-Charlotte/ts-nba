import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import clickReducer from './clickReducer';
import teamsReducer from './teamsReducer';

export default combineReducers({
    inputReducer,
    clickReducer,
    teamsReducer,
})