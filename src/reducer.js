import { combineReducers } from 'redux'

import { searchReducer } from './searchSlice';
import { loadingReducer } from './loadingSlice';
import { robotsReducer } from './robotSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  loading: loadingReducer,
  robotsRepo: robotsReducer,
});

export default rootReducer;
