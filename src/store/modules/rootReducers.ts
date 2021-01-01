import { combineReducers } from 'redux';
import tasklist from './tasklist/reducers';

const reducers = combineReducers({
  tasklist,
});

export default reducers;
