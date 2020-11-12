import { SET_SEARCH_FIELD_EVENT } from './constants';

const initialState = {
  searchField: '',
};

export const setSearchField = (userInputedText) => ({
  type: SET_SEARCH_FIELD_EVENT,
  payload: {
    text: userInputedText,
  },
});

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_FIELD_EVENT: 
      return { ...state, searchField: action.payload.text };
    default:
      return state;
  }
};

