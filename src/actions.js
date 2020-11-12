import { SET_SEARCH_FIELD_EVENT } from './constants';

export const setSearchField = (userInputedText) => ({
  type: SET_SEARCH_FIELD_EVENT,
  payload: {
    text: userInputedText,
  },
});
