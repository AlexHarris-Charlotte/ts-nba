import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import clickReducer from './clickReducer';
import teamsReducer from './teamsReducer';
import teamPageReducer from './teamPageReducer';

export default combineReducers({
    inputReducer,
    clickReducer,
    teamsReducer,
    teamPageReducer
})