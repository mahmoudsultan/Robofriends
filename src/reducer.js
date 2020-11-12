import { combineReducers } from 'redux'

import { searchReducer } from './searchSlice';
import { loadingReducer } from './loadingSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  loading: loadingReducer,
});

export default rootReducer;
