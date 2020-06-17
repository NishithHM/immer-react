import {combineReducers} from 'redux';
import person from './person'
import personImmer from './personImmer'

export default combineReducers({
    person,
    personImmer  
   });